/**
 * Central brand configuration.
 *
 * ─────────────────────────────────────────────────────────────
 *  TODO BEFORE LAUNCH — replace the three placeholder values
 *  marked `PLACEHOLDER` below (or set the matching variables in
 *  `.env.local`). Nothing else in the codebase hard-codes them.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  name: "Slayed by Bedoya",
  shortName: "Bedoya",
  tagline: "Professional Makeup Artistry",

  /**
   * WhatsApp number in full international format, digits only.
   * No `+`, no spaces, no dashes. Example: 13105550147
   * PLACEHOLDER — set NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local
   */
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "15555550123",

  /** Instagram handle without the `@`. PLACEHOLDER */
  instagramHandle: process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE ?? "slayedbybedoya",

  /** Displayed service area. PLACEHOLDER */
  location: process.env.NEXT_PUBLIC_LOCATION ?? "New York, NY",

  /** Optional. Leave empty and the email link is simply not rendered. */
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",

  /** Canonical origin, used for metadata and the sitemap. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://slayedbybedoya.com",

  /** GA4 measurement ID. Leave empty to disable analytics entirely. */
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
} as const;

export const instagramUrl = `https://instagram.com/${site.instagramHandle}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Bridal", href: "/bridal" },
  { label: "Education", href: "/education" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
] as const;
