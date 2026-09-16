/**
 * Pre-renders responsive WebP variants for every photograph in public/images.
 *
 *   node scripts/optimize-images.mjs
 *
 * GitHub Pages serves plain static files, so Next's on-demand image optimizer
 * has no server to run on. Instead we generate the sizes ahead of time and let
 * `lib/image-loader.ts` point next/image at them — which keeps real srcset,
 * lazy loading, and WebP rather than shipping full-resolution JPEGs to phones.
 *
 * Runs automatically via the `predev` and `prebuild` npm scripts. It is
 * incremental: a variant is only re-encoded when its source is newer.
 */
import { mkdir, readdir, stat, writeFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, "public", "images");
const OUT_DIR = path.join(SRC_DIR, "_opt");
const MANIFEST = path.join(ROOT, "lib", "image-manifest.ts");

const config = JSON.parse(readFileSync(path.join(ROOT, "config", "image-sizes.json"), "utf8"));
const WIDTHS = [...new Set([...config.imageSizes, ...config.deviceSizes])].sort((a, b) => a - b);
const QUALITY = config.quality;

const SOURCE_EXT = new Set([".jpg", ".jpeg", ".png"]);

async function isStale(source, target) {
  if (!existsSync(target)) return true;
  const [a, b] = await Promise.all([stat(source), stat(target)]);
  return a.mtimeMs > b.mtimeMs;
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const entries = (await readdir(SRC_DIR, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && SOURCE_EXT.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
    .sort();

  const manifest = {};
  let written = 0;
  let skipped = 0;

  for (const file of entries) {
    const source = path.join(SRC_DIR, file);
    const base = file.replace(/\.[^.]+$/, "");
    const { width: sourceWidth } = await sharp(source).metadata();

    // Never upscale: keep only widths the source can actually fill, and always
    // keep at least one variant even for images smaller than the first step.
    let widths = WIDTHS.filter((w) => w <= sourceWidth);
    if (widths.length === 0) widths = [sourceWidth];
    else if (widths[widths.length - 1] < sourceWidth && sourceWidth < WIDTHS[WIDTHS.length - 1]) {
      widths = [...widths, sourceWidth];
    }

    for (const width of widths) {
      const target = path.join(OUT_DIR, `${base}-${width}.webp`);
      if (!(await isStale(source, target))) {
        skipped += 1;
        continue;
      }
      await sharp(source)
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 5 })
        .toFile(target);
      written += 1;
    }

    manifest[`/images/${file}`] = widths;
  }

  const body = Object.entries(manifest)
    .map(([src, widths]) => `  ${JSON.stringify(src)}: [${widths.join(", ")}],`)
    .join("\n");

  await writeFile(
    MANIFEST,
    `// GENERATED FILE — do not edit by hand.
// Run \`node scripts/optimize-images.mjs\` (or any \`npm run dev\` / \`npm run build\`).
//
// Maps each source image to the widths that exist in public/images/_opt.

export const imageManifest: Record<string, readonly number[]> = {
${body}
};
`,
  );

  console.log(
    `images: ${entries.length} sources, ${written} variants encoded, ${skipped} up to date`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
