import Link from "next/link";
import { whatsappMessages } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center pt-28 pb-20 lg:pt-40">
      <Container size="wide">
        <div className="max-w-2xl">
          <SectionLabel>404</SectionLabel>
          <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] font-light tracking-[-0.03em]">
            This page doesn&apos;t exist.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-espresso/85">
            The link may be old, or the address slightly off. The portfolio and
            the full service list are both a tap away.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <WhatsAppButton
              label="Message on WhatsApp"
              message={whatsappMessages.general}
              event="whatsapp_service_click"
              eventParams={{ location: "not_found" }}
            />
            <Link href="/portfolio" className="link-rule">
              View Portfolio
            </Link>
            <Link href="/services" className="link-rule">
              View Services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
