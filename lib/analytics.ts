"use client";

import { site } from "./site";

/** GA4 event names used across the site. Keep this list in sync with the CTAs. */
export type AnalyticsEvent =
  | "whatsapp_hero_click"
  | "whatsapp_service_click"
  | "whatsapp_bridal_click"
  | "whatsapp_professional_click"
  | "whatsapp_floating_click"
  | "whatsapp_footer_click"
  | "whatsapp_nav_click"
  | "instagram_click"
  | "portfolio_interaction";

type GtagWindow = Window & {
  gtag?: (command: "event", name: string, params?: Record<string, unknown>) => void;
};

/**
 * Fires a GA4 event when analytics is configured. No-ops silently otherwise,
 * so CTAs behave identically whether or not GA4 is set up.
 */
export function trackEvent(event: AnalyticsEvent, params?: Record<string, unknown>): void {
  if (!site.gaId) return;
  if (typeof window === "undefined") return;
  const { gtag } = window as GtagWindow;
  if (typeof gtag !== "function") return;
  gtag("event", event, params);
}
