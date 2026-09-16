import { imageManifest } from "./image-manifest";
import { basePath } from "./site";

type LoaderArgs = {
  src: string;
  width: number;
  quality?: number;
};

/**
 * Points next/image at the WebP variants pre-rendered by
 * `scripts/optimize-images.mjs`.
 *
 * GitHub Pages has no server, so there is no on-demand optimizer to call.
 * next/image still builds the `srcset` and handles lazy loading — this just
 * resolves each requested width to a file that already exists on disk.
 *
 * It also prepends `basePath`, because next/image does NOT do that for `src`
 * (unlike next/link). Handling it here keeps the base path out of all ~50
 * image references in the codebase.
 *
 * `quality` is ignored: the variants are encoded once, at the quality set in
 * `config/image-sizes.json`.
 */
export default function imageLoader({ src, width }: LoaderArgs): string {
  const widths = imageManifest[src];

  // An image with no pre-rendered variants (newly added, script not yet run)
  // still renders — just at its original size rather than breaking the page.
  if (!widths || widths.length === 0) return `${basePath}${src}`;

  // Smallest variant that covers the requested width; the largest if none does.
  const best = widths.find((candidate) => candidate >= width) ?? widths[widths.length - 1];
  const name = src.replace(/^\/images\//, "").replace(/\.[^.]+$/, "");

  return `${basePath}/images/_opt/${name}-${best}.webp`;
}
