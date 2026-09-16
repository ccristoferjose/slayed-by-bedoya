import Image from "next/image";
import Link from "next/link";
import { whatsappMessages } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

type FinalCTAProps = {
  heading?: string;
  body?: string;
  image?: string;
  imageAlt?: string;
  message?: string;
  secondary?: { label: string; href: string };
};

export function FinalCTA({
  heading = "Ready for your next look?",
  body = "Tell Slayed by Bedoya what service you're interested in, your preferred date, and any details about your event.",
  image = "/images/final-cta.jpg",
  imageAlt = "Beauty portrait photographed in warm low light",
  message = whatsappMessages.general,
  secondary = { label: "View Services", href: "/services" },
}: FinalCTAProps) {
  return (
    <section aria-labelledby="final-cta" className="relative isolate overflow-hidden bg-ink">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="object-cover object-center opacity-60"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/25" />

      <Container size="wide" className="relative py-24 lg:py-40">
        <div className="max-w-2xl">
          <h2
            id="final-cta"
            className="font-display text-[clamp(2.5rem,6.5vw,5rem)] leading-[1] font-light tracking-[-0.025em] text-ivory"
          >
            {heading}
          </h2>
          <p className="mt-6 max-w-lg text-[0.9375rem] leading-relaxed text-ivory/75">{body}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <WhatsAppButton
              label="Message on WhatsApp"
              message={message}
              event="whatsapp_service_click"
              eventParams={{ location: "final_cta" }}
              className="!bg-ivory !text-ink hover:!bg-nude"
            />
            <Link
              href={secondary.href}
              className="inline-flex min-h-12 items-center justify-center border border-ivory/40 px-8 py-4 text-[0.6875rem] font-medium tracking-[0.18em] text-ivory uppercase transition-colors duration-250 hover:border-ivory hover:bg-ivory/10"
            >
              {secondary.label}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
