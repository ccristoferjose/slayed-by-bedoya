/**
 * Central brand configuration.
 *
 * ─────────────────────────────────────────────────────────────
 *  TODO BEFORE LAUNCH — replace the three placeholder values
 *  marked `PLACEHOLDER` below (or set the matching variables in
 *  `.env.local`). Nothing else in the codebase hard-codes them.
 * ─────────────────────────────────────────────────────────────
 */

/**
 * Reads a public env var, treating an empty or whitespace-only value as unset.
 *
 * This matters in CI: an unset GitHub Actions variable is injected as `""`,
 * not as undefined, so `??` alone would accept the empty string and ship a
 * site with no WhatsApp number and no canonical URL.
 */
function env(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

export const site = {
  name: "Slayed by Bedoya",
  shortName: "Bedoya",
  tagline: "Professional Makeup Artistry",

  /**
   * WhatsApp number in full international format, digits only.
   * No `+`, no spaces, no dashes. Example: 13105550147
   * PLACEHOLDER — set NEXT_PUBLIC_WHATSAPP_NUMBER in .env.local
   */
  whatsappNumber: env(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER, "15555550123"),

  /** Instagram handle without the `@`. PLACEHOLDER */
  instagramHandle: env(process.env.NEXT_PUBLIC_INSTAGRAM_HANDLE, "slayedbybedoya"),

  /** Displayed service area. PLACEHOLDER */
  location: env(process.env.NEXT_PUBLIC_LOCATION, "New York, NY"),

  /** Secondary contact. Leave empty and every email link is simply not rendered. */
  email: env(process.env.NEXT_PUBLIC_CONTACT_EMAIL, "slayedbybedoya@gmail.com"),

  /** Canonical origin, used for metadata and the sitemap. */
  url: env(process.env.NEXT_PUBLIC_SITE_URL, "https://slayedbybedoya.com"),

  /** GA4 measurement ID. Leave empty to disable analytics entirely. */
  gaId: env(process.env.NEXT_PUBLIC_GA_ID, ""),
} as const;

/**
 * Base path the site is served under — "/slayed-by-bedoya" on a GitHub Pages
 * project site, "" at a domain root. Any trailing slash is stripped so callers
 * can always concatenate `${basePath}/foo`.
 */
export const basePath = env(process.env.NEXT_PUBLIC_BASE_PATH, "").replace(/\/+$/, "");

/** Canonical origin with any trailing slash removed, for safe concatenation. */
export const siteUrl = site.url.replace(/\/+$/, "");

export const instagramUrl = `https://instagram.com/${site.instagramHandle}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  //{ label: "Bridal", href: "/bridal" },
  { label: "Education", href: "/education" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
] as const;
