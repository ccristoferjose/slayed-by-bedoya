import type { Metadata } from "next";
import { site } from "./site";

const defaultOgImage = {
  url: "/images/og-image.jpg",
  width: 1200,
  height: 630,
  alt: `${site.name} — ${site.tagline}`,
};

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

/** Builds consistent per-page metadata, including canonical URL and Open Graph. */
export function pageMetadata({ title, description, path, image }: PageMetaInput): Metadata {
  const ogImage = image
    ? { url: image, width: 1200, height: 1600, alt: title }
    : defaultOgImage;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} — ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      images: [ogImage],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${site.name}`,
      description,
      images: [ogImage.url],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline} in ${site.location}`,
    template: `%s — ${site.name}`,
  },
  description: `${site.name} is a professional makeup artist in ${site.location}, creating bridal, quinceañera, soft glam, full glam, and editorial makeup. Message directly on WhatsApp to check availability.`,
  applicationName: site.name,
  keywords: [
    "makeup artist",
    `makeup artist ${site.location}`,
    "bridal makeup",
    "wedding makeup artist",
    "quinceañera makeup",
    "soft glam makeup",
    "full glam makeup",
    "editorial makeup artist",
    "lash lift",
    "brow lamination",
    "makeup lessons",
    site.name,
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: `Bridal, quinceañera, soft glam, full glam, and editorial makeup in ${site.location}.`,
    images: [defaultOgImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: `Bridal, quinceañera, soft glam, full glam, and editorial makeup in ${site.location}.`,
    images: [defaultOgImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

/** JSON-LD for local SEO. Rendered once in the root layout. */
export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: site.name,
    description: `${site.tagline} — bridal, quinceañera, soft glam, full glam, and editorial makeup.`,
    url: site.url,
    image: `${site.url}/images/og-image.jpg`,
    areaServed: site.location,
    ...(site.email ? { email: site.email } : {}),
    address: { "@type": "PostalAddress", addressLocality: site.location },
    sameAs: [`https://instagram.com/${site.instagramHandle}`],
    makesOffer: [
      "Bridal Makeup",
      "Quinceañera Makeup",
      "Soft Glam Makeup",
      "Full Glam Makeup",
      "Editorial Makeup",
      "Lash Lift",
      "Brow Lamination",
      "Private Makeup Lessons",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  };
}
