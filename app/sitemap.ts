import type { MetadataRoute } from "next";
import { detailPageServices } from "@/lib/services";
import { siteUrl } from "@/lib/site";

// Required by `output: "export"` — emits a static sitemap.xml at build time.
export const dynamic = "force-static";

/**
 * `trailingSlash: true` is set for GitHub Pages, so the canonical form of every
 * URL ends in a slash. The sitemap must match what the pages declare, or search
 * engines see two URLs for one page.
 */
const canonical = (path: string) =>
  `${siteUrl}${path === "/" ? "/" : `${path}/`}`;

const staticRoutes: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/portfolio", priority: 0.9 },
  { path: "/bridal", priority: 0.9 },
  { path: "/professional", priority: 0.7 },
  { path: "/education", priority: 0.7 },
  { path: "/personal-shopping", priority: 0.7 },
  { path: "/beauty-consultation", priority: 0.7 },
  { path: "/about", priority: 0.7 },
  { path: "/faq", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: canonical(path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...detailPageServices.map((service) => ({
      url: canonical(`/services/${service.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
