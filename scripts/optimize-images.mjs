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
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { existsSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";
import sharp from "sharp";

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, "public", "images");
const OUT_DIR = path.join(SRC_DIR, "_opt");
const MANIFEST = path.join(ROOT, "lib", "image-manifest.ts");
// Deliberately OUTSIDE public/ — anything under public/ is copied into the
// export and served, and build metadata has no business being published.
const CACHE = path.join(ROOT, ".image-cache.json");

const config = JSON.parse(readFileSync(path.join(ROOT, "config", "image-sizes.json"), "utf8"));
const WIDTHS = [...new Set([...config.imageSizes, ...config.deviceSizes])].sort((a, b) => a - b);
const QUALITY = config.quality;

const SOURCE_EXT = new Set([".jpg", ".jpeg", ".png"]);

/**
 * Fingerprints a source image by its CONTENT, not its timestamp.
 *
 * Timestamps are not trustworthy here: copying or downloading a photo
 * preserves its original mtime, so a freshly dropped-in image can easily look
 * "older" than the variants generated from the file it replaced. That silently
 * left stale placeholder variants in place while only the new widths were
 * rebuilt — the exact bug this replaced.
 */
function fingerprint(buffer, widths) {
  return createHash("sha256")
    .update(buffer)
    .update(`q${QUALITY}|w${widths.join(",")}`)
    .digest("hex")
    .slice(0, 16);
}

async function readCache() {
  try {
    return JSON.parse(await readFile(CACHE, "utf8"));
  } catch {
    return {};
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const entries = (await readdir(SRC_DIR, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && SOURCE_EXT.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => entry.name)
    .sort();

  const cache = await readCache();
  const nextCache = {};
  const manifest = {};
  const expected = new Set();
  let rebuilt = 0;
  let skipped = 0;

  for (const file of entries) {
    const source = path.join(SRC_DIR, file);
    const base = file.replace(/\.[^.]+$/, "");
    const buffer = await readFile(source);
    const { width: sourceWidth } = await sharp(buffer).metadata();

    // Never upscale: keep only widths the source can actually fill, and always
    // keep at least one variant even for images smaller than the first step.
    let widths = WIDTHS.filter((w) => w <= sourceWidth);
    if (widths.length === 0) widths = [sourceWidth];
    else if (widths[widths.length - 1] < sourceWidth && sourceWidth < WIDTHS[WIDTHS.length - 1]) {
      widths = [...widths, sourceWidth];
    }

    const targets = widths.map((width) => ({ width, name: `${base}-${width}.webp` }));
    for (const target of targets) expected.add(target.name);

    const hash = fingerprint(buffer, widths);
    const unchanged =
      cache[file] === hash && targets.every(({ name }) => existsSync(path.join(OUT_DIR, name)));

    if (unchanged) {
      skipped += targets.length;
    } else {
      for (const { width, name } of targets) {
        await sharp(buffer)
          .resize({ width, withoutEnlargement: true })
          .webp({ quality: QUALITY, effort: 5 })
          .toFile(path.join(OUT_DIR, name));
        rebuilt += 1;
      }
    }

    nextCache[file] = hash;
    manifest[`/images/${file}`] = widths;
  }

  // Drop variants left behind by images that changed dimensions or were
  // deleted — otherwise they linger forever and ship in the export.
  let pruned = 0;
  for (const name of await readdir(OUT_DIR)) {
    if (expected.has(name)) continue;
    await rm(path.join(OUT_DIR, name), { force: true });
    pruned += 1;
  }

  await writeFile(CACHE, JSON.stringify(nextCache, null, 2));

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
    `images: ${entries.length} sources, ${rebuilt} encoded, ${skipped} up to date` +
      (pruned ? `, ${pruned} stale removed` : ""),
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
