import type { MetadataRoute } from "next";
import { detailPageServices } from "@/lib/services";
import { site } from "@/lib/site";

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
      url: `${site.url}${path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
    })),
    ...detailPageServices.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
