"use client";

import { useEffect, useState } from "react";
import { basePath } from "@/lib/site";

const DESKTOP = `${basePath}/images/hero-desktop.mp4`;
const MOBILE = `${basePath}/images/hero-mobile.mp4`;

type NetworkInformation = { saveData?: boolean };

/**
 * The moving layer of the hero, mounted over the static hero photograph.
 *
 * Deliberately client-only and deferred until after the first paint, so the
 * poster image stays the LCP element and the video never competes with it.
 * The photograph underneath is what everyone sees first, and what remains for
 * anyone who doesn't get the video at all:
 *
 *   - `prefers-reduced-motion: reduce` — no video is requested
 *   - Data Saver enabled              — no video is requested
 *   - JavaScript unavailable          — no video is requested
 *   - Autoplay blocked by the browser — video stays transparent
 *
 * `src` is chosen in JavaScript rather than with <source media>, which browsers
 * only evaluate once and inconsistently. Note the basePath prefix: unlike
 * next/link, a plain <video> gets no automatic prefix on GitHub Pages.
 */
export function HeroVideo() {
  const [src, setSrc] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    if (connection?.saveData) return;

    const wide = window.matchMedia("(min-width: 768px)").matches;

    // rAF defers the request until after the first paint, so the poster wins LCP.
    const frame = requestAnimationFrame(() => setSrc(wide ? DESKTOP : MOBILE));
    return () => cancelAnimationFrame(frame);
  }, []);

  if (!src) return null;

  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      // Required for inline autoplay on iOS; without it Safari opens fullscreen.
      playsInline
      preload="auto"
      // Decorative: the photograph beneath it carries the alt text.
      aria-hidden="true"
      tabIndex={-1}
      onCanPlay={() => setVisible(true)}
      className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
