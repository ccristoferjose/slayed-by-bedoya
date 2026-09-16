"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { whatsappMessages } from "@/lib/whatsapp";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { MobileMenu } from "./MobileMenu";

/** Routes that open with a full-bleed dark photograph the bar can sit on top of. */
const overlayRoutes = new Set(["/", "/bridal"]);

export function Navbar() {
  const pathname = usePathname() ?? "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const canOverlay = overlayRoutes.has(pathname);
  const overlay = canOverlay && !scrolled;

  // Only routes that open on a full-bleed photograph need the scroll listener;
  // everywhere else `overlay` is already false and there is nothing to track.
  useEffect(() => {
    if (!canOverlay) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [canOverlay]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          overlay ? "bg-transparent" : "border-b border-ink/10 bg-ivory"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[110rem] items-center justify-between gap-6 px-6 sm:px-8 lg:h-20 lg:px-12">
          <Link
            href="/"
            className={`font-display text-lg leading-none tracking-tight transition-colors lg:text-xl ${
              overlay ? "text-ivory" : "text-ink"
            }`}
          >
            {site.name}
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {nav.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`label pb-1 transition-colors ${
                        overlay
                          ? "text-ivory/80 hover:text-ivory"
                          : active
                            ? "border-b border-burgundy text-burgundy"
                            : "text-taupe hover:text-ink"
                      } ${overlay && active ? "border-b border-ivory/70 text-ivory" : ""}`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <WhatsAppButton
              label="Contact on WhatsApp"
              message={whatsappMessages.general}
              variant={overlay ? "solid" : "solid"}
              event="whatsapp_nav_click"
              eventParams={{ location: "navbar" }}
              className={
                overlay
                  ? "!bg-ivory !text-ink px-6 py-3 min-h-0 hover:!bg-nude"
                  : "px-6 py-3 min-h-0"
              }
            />
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className={`-mr-3 flex h-12 w-12 items-center justify-center lg:hidden ${
              overlay ? "text-ivory" : "text-ink"
            }`}
          >
            <span className="sr-only">Open menu</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M3 7h18M3 17h18" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} currentPath={pathname} />
    </>
  );
}
