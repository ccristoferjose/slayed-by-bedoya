import type { NextConfig } from "next";
import imageSizes from "./config/image-sizes.json";

/**
 * Base path for a GitHub Pages *project* site, e.g. "/slayed-by-bedoya".
 * Empty when serving from a domain root. Set by the deploy workflow.
 * Normalised here so a value with or without a leading slash both work.
 */
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
const basePath = rawBasePath ? `/${rawBasePath.replace(/^\/+|\/+$/g, "")}` : "";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only — emit plain HTML/CSS/JS into `out/`.
  output: "export",

  basePath,

  // Emits `about/index.html` rather than `about.html`, which GitHub Pages
  // resolves unambiguously at both /about and /about/.
  trailingSlash: true,

  images: {
    // No server means no on-demand optimizer. The loader resolves each width
    // to a WebP pre-rendered by scripts/optimize-images.mjs.
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",

    // The widths next/image is allowed to request. Kept in the shared JSON so
    // the generator and this config cannot disagree.
    deviceSizes: imageSizes.deviceSizes,
    imageSizes: imageSizes.imageSizes,
  },
};

export default nextConfig;
