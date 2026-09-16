"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { nav, site, instagramUrl } from "@/lib/site";
import { whatsappMessages } from "@/lib/whatsapp";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  currentPath: string;
};

export function MobileMenu({ open, onClose, currentPath }: MobileMenuProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (eventArgs: KeyboardEvent) => {
      if (eventArgs.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      // Kept mounted so the fade runs in both directions; fully inert when closed.
      inert={!open}
      aria-hidden={!open}
      className={`fixed inset-0 z-50 bg-ivory transition-opacity duration-300 lg:hidden ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex h-dvh flex-col px-6 pt-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        <div className="flex items-center justify-between">
          <span className="font-display text-xl tracking-tight text-ink">{site.name}</span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="-mr-3 flex h-12 w-12 items-center justify-center text-ink"
          >
            <span className="sr-only">Close menu</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M5 5l14 14M19 5L5 19" />
            </svg>
          </button>
        </div>

        <nav aria-label="Main" className="mt-12 flex-1">
          <ul className="space-y-1">
            {nav.map((item) => {
              const active = currentPath === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={`block py-3 font-display text-[2.25rem] leading-tight tracking-tight transition-colors ${
                      active ? "text-burgundy" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="space-y-5 border-t border-ink/10 pt-6">
          <WhatsAppButton
            label="Contact on WhatsApp"
            message={whatsappMessages.general}
            event="whatsapp_nav_click"
            eventParams={{ location: "mobile_menu" }}
            className="w-full"
          />
          <div className="flex items-center justify-between">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="label hover:text-burgundy"
            >
              Instagram
            </a>
            <Link href="/contact" onClick={onClose} className="label hover:text-burgundy">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
