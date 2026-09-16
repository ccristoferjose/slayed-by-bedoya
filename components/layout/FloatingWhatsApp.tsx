"use client";

import { useEffect, useState } from "react";
import { createWhatsAppUrl, whatsappMessages } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

/**
 * Fades in once the visitor has scrolled past the opening screen, so it never
 * sits on top of a hero's own CTA. On pages too short to scroll that far it
 * appears immediately — otherwise it would never appear at all.
 * No pulse, no bounce; it just waits there.
 */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const threshold = window.innerHeight * 0.8;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(window.scrollY > threshold || scrollable < threshold);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <a
      href={createWhatsAppUrl(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_floating_click")}
      aria-label="Message Slayed by Bedoya on WhatsApp — opens in a new tab"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed right-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-40 inline-flex min-h-12 items-center gap-2.5 bg-ink px-4 py-3.5 text-ivory shadow-[0_2px_20px_rgba(23,18,14,0.18)] transition-all duration-500 hover:bg-burgundy sm:right-6 sm:bottom-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <WhatsAppIcon className="h-[1.125rem] w-[1.125rem]" />
      <span className="text-[0.6875rem] font-medium tracking-[0.18em] uppercase">WhatsApp</span>
    </a>
  );
}
