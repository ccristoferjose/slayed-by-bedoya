import { site } from "./site";

/**
 * Pre-filled subject lines, mirroring the WhatsApp openers in `lib/whatsapp.ts`.
 * A subject means the message lands with context instead of "(no subject)".
 */
export const emailSubjects = {
  general: "Makeup inquiry — Slayed by Bedoya",
} as const;

/**
 * Builds a mailto link with a pre-filled subject.
 *
 * Returns an empty string when no address is configured — every caller already
 * guards on `site.email`, so the link is never rendered in that case.
 */
export function createMailtoUrl(subject: string = emailSubjects.general): string {
  if (!site.email) return "";
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}
