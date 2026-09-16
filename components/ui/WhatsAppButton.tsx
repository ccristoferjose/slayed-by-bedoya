"use client";

import { createWhatsAppUrl } from "@/lib/whatsapp";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

export type WhatsAppButtonVariant = "solid" | "outline" | "quiet" | "link";

type WhatsAppButtonProps = {
  /** Visible button text. */
  label: string;
  /** Pre-filled WhatsApp message. */
  message: string;
  variant?: WhatsAppButtonVariant;
  /** GA4 event fired on click. */
  event?: AnalyticsEvent;
  /** Extra GA4 parameters, e.g. `{ service: "bridal" }`. */
  eventParams?: Record<string, unknown>;
  /**
   * Overrides the screen-reader label. Defaults to a sentence that makes the
   * destination clear, since "Ask About Soft Glam" alone doesn't say where it goes.
   */
  srLabel?: string;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2.5 text-center font-sans font-medium uppercase transition-colors duration-250";

const variants: Record<WhatsAppButtonVariant, string> = {
  solid:
    "bg-ink text-ivory px-8 py-4 text-[0.6875rem] tracking-[0.18em] hover:bg-burgundy min-h-12",
  outline:
    "border border-ink/30 text-ink px-8 py-4 text-[0.6875rem] tracking-[0.18em] hover:border-burgundy hover:text-burgundy min-h-12",
  quiet:
    "bg-cream text-ink px-6 py-3.5 text-[0.6875rem] tracking-[0.18em] hover:bg-sand min-h-12",
  link: "link-rule",
};

/**
 * Every WhatsApp entry point on the site renders through this component, so
 * the number, the tracking, and the accessible labelling stay consistent.
 */
export function WhatsAppButton({
  label,
  message,
  variant = "solid",
  event = "whatsapp_service_click",
  eventParams,
  srLabel,
  className = "",
}: WhatsAppButtonProps) {
  return (
    <a
      href={createWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent(event, eventParams)}
      aria-label={srLabel ?? `${label} — opens a WhatsApp conversation in a new tab`}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {label}
    </a>
  );
}
