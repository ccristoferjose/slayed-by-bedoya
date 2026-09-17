/**
 * Encodes the hero background video for the web.
 *
 *   node scripts/encode-hero-video.mjs [--crop W:H:X:Y]
 *
 * Source:  media-src/hero.mp4   (your original — NOT served, NOT committed)
 * Outputs: public/images/hero-desktop.mp4   landscape, for >= 768px
 *          public/images/hero-mobile.mp4    portrait centre slice, for < 768px
 *
 * Why two files: the hero is full-bleed with `object-cover`, so on a portrait
 * phone a 16:9 clip gets roughly three quarters of its width cropped away.
 * Serving a pre-cropped portrait slice keeps the subject framed and the file
 * smaller, instead of downloading pixels the phone will never show.
 *
 * Requires ffmpeg on PATH (`brew install ffmpeg`). This is a one-off authoring
 * step, not part of the build — the encoded files are committed.
 */
import { execFile } from "node:child_process";
import { mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { promisify } from "node:util";

const run = promisify(execFile);

const ROOT = process.cwd();
const SOURCE = path.join(ROOT, "media-src", "hero.mp4");
const OUT_DIR = path.join(ROOT, "public", "images");

/**
 * Crop applied before everything else, as ffmpeg `w:h:x:y`.
 *
 * The current clip carries a watermark along the bottom edge and carousel
 * chevrons in the left and right margins; this trims all three off. Re-measure
 * for new footage (or pass --crop) and use "none" if the source is clean.
 */
const DEFAULT_CROP = "1580:1010:180:0";

/** Portrait slice taken from the centre of the cropped frame, for phones. */
const MOBILE_SLICE = { width: 620 };

const CRF = { desktop: 28, mobile: 28 };

function parseArgs() {
  const index = process.argv.indexOf("--crop");
  if (index === -1) return DEFAULT_CROP;
  const value = process.argv[index + 1];
  if (!value) throw new Error("--crop needs a value, e.g. --crop 1580:1010:180:0");
  return value.toLowerCase() === "none" ? null : value;
}

async function encode(label, filters, crf) {
  const target = path.join(OUT_DIR, `hero-${label}.mp4`);
  await run("ffmpeg", [
    "-v", "error", "-y",
    "-i", SOURCE,
    ...(filters ? ["-vf", filters] : []),
    // The hero is muted and decorative; an audio track would only add bytes.
    "-an",
    "-c:v", "libx264",
    "-profile:v", "high",
    "-crf", String(crf),
    "-preset", "slow",
    "-pix_fmt", "yuv420p",
    // Puts the moov atom first so playback can start before the whole file
    // has downloaded. Without it the browser waits for the entire video.
    "-movflags", "+faststart",
    target,
  ]);
  const { size } = await stat(target);
  console.log(`  hero-${label}.mp4`.padEnd(26) + `${(size / 1048576).toFixed(2)} MB`);
  return target;
}

async function main() {
  if (!existsSync(SOURCE)) {
    console.error(`Missing ${path.relative(ROOT, SOURCE)} — put your original hero video there.`);
    process.exitCode = 1;
    return;
  }

  await mkdir(OUT_DIR, { recursive: true });
  const crop = parseArgs();

  const cropped = crop ? [`crop=${crop}`] : [];
  const [, croppedHeight] = crop ? crop.split(":") : [];

  await encode("desktop", cropped.join(",") || null, CRF.desktop);

  // Centre slice: x offset keeps the middle of the already-cropped frame.
  const width = crop ? Number(crop.split(":")[0]) : null;
  const sliceX = width ? Math.round((width - MOBILE_SLICE.width) / 2) : 0;
  const mobileFilters = [
    ...cropped,
    `crop=${MOBILE_SLICE.width}:${croppedHeight ?? "ih"}:${sliceX}:0`,
  ].join(",");

  await encode("mobile", mobileFilters, CRF.mobile);

  console.log("\nDone. Both files are faststart and have no audio track.");
}

main().catch((error) => {
  console.error(error.stderr ?? error);
  process.exitCode = 1;
});
