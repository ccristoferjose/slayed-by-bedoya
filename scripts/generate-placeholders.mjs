/**
 * Renders a warm neutral placeholder for every slot in the manifest.
 *
 *   node scripts/generate-placeholders.mjs
 *
 * These exist so the layout can be judged with real aspect ratios before the
 * photography arrives. Replace each file with a real photograph at the same
 * path and ratio — see IMAGES.md.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";
import { slots } from "./placeholder-manifest.mjs";

const OUT_DIR = path.join(process.cwd(), "public", "images");

/** Warm ivory → taupe → espresso duotones, sampled from the site palette. */
const tones = [
  ["#f4ece2", "#d8c6b2"],
  ["#f6efe6", "#e0cdb8"],
  ["#efe5d9", "#c9b49d"],
  ["#eadfd1", "#b39c84"],
  ["#e8dbcb", "#a8907a"],
  ["#f1e7db", "#cbb49c"],
  ["#f3e9df", "#d4bda6"],
  ["#eee3d6", "#b9a289"],
  ["#4a3d33", "#1e1712"],
  ["#5a4a3d", "#241b15"],
];

const isDark = (index) => index >= 8;

function svgFor({ w, h, tone, file, shot }) {
  const [from, to] = tones[tone];
  const ink = isDark(tone) ? "#f4ece2" : "#5d4f42";
  const rule = isDark(tone) ? "rgba(244,236,226,0.35)" : "rgba(93,79,66,0.3)";
  const scale = Math.min(w, h) / 1000;
  const labelSize = Math.max(11, Math.round(17 * scale));
  const ratio = `${w} × ${h}`;

  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0.45" y2="1">
      <stop offset="0%" stop-color="${from}"/>
      <stop offset="100%" stop-color="${to}"/>
    </linearGradient>
    <radialGradient id="v" cx="50%" cy="38%" r="78%">
      <stop offset="55%" stop-color="#000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0.16"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect width="${w}" height="${h}" fill="url(#v)"/>
  <g fill="${ink}" font-family="Helvetica Neue, Helvetica, Arial, sans-serif" text-anchor="middle">
    <line x1="${w / 2 - 30 * scale}" y1="${h / 2 - 34 * scale}" x2="${w / 2 + 30 * scale}" y2="${h / 2 - 34 * scale}" stroke="${rule}" stroke-width="${Math.max(1, scale)}"/>
    <text x="${w / 2}" y="${h / 2 + 2 * scale}" font-size="${labelSize}" letter-spacing="${3.2 * scale}" opacity="0.72">${file.replace(".jpg", "").toUpperCase()}</text>
    <text x="${w / 2}" y="${h / 2 + 30 * scale}" font-size="${labelSize * 0.8}" letter-spacing="${2 * scale}" opacity="0.45">${ratio}</text>
  </g>
  <title>${shot}</title>
</svg>`);
}

/** Fine film grain so the flat gradients don't band on large surfaces. */
function grain(w, h) {
  const pixels = Buffer.alloc(w * h);
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index] = 118 + Math.round((Math.random() - 0.5) * 26);
  }
  return sharp(pixels, { raw: { width: w, height: h, channels: 1 } })
    .toColourspace("b-w")
    .png()
    .toBuffer();
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  for (const slot of slots) {
    const { file, w, h } = slot;
    const base = await sharp(svgFor(slot)).png().toBuffer();
    const noise = await grain(w, h);

    const out = await sharp(base)
      .composite([{ input: noise, blend: "overlay", opacity: 0.35 }])
      .jpeg({ quality: 82, chromaSubsampling: "4:4:4", mozjpeg: true })
      .toBuffer();

    await writeFile(path.join(OUT_DIR, file), out);
    process.stdout.write(`  ${file.padEnd(30)} ${w}×${h}\n`);
  }

  console.log(`\n${slots.length} placeholders written to public/images/`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
