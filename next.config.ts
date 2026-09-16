import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first, WebP as the fallback. Beauty photography is the bulk of the
    // payload, so the extra encode time is worth it.
    formats: ["image/avif", "image/webp"],
    // Matches the single quality passed by the hero; keeping the list tight
    // avoids generating variants nothing requests.
    qualities: [75],
  },
  // Trailing slashes off keeps canonical URLs matching the sitemap exactly.
  trailingSlash: false,
};

export default nextConfig;
