import Link from "next/link";
import { site, instagramUrl } from "@/lib/site";
import { whatsappMessages } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  //{ label: "Bridal", href: "/bridal" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-cream">
      <Container size="wide" className="py-14 lg:py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Link href="/" className="font-display text-2xl tracking-tight text-ink lg:text-3xl">
              {site.name}
            </Link>
            <p className="label mt-3">
              {site.tagline} · {site.location}
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="label hover:text-burgundy">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="label hover:text-burgundy"
            >
              Instagram
            </a>
            <WhatsAppButton
              label="WhatsApp"
              message={whatsappMessages.general}
              variant="link"
              event="whatsapp_footer_click"
              className="!text-[0.6875rem] !tracking-[0.22em] !text-taupe hover:!text-burgundy"
            />
            {site.email ? (
              <a href={`mailto:${site.email}`} className="label hover:text-burgundy">
                Email
              </a>
            ) : null}
          </div>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
            <Link href="/privacy" className="label hover:text-burgundy">
              Privacy Policy
            </Link>
            <Link href="/terms" className="label hover:text-burgundy">
              Service Policies
            </Link>
          </div>
        </div>

        <p className="mt-8 text-xs text-taupe">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
