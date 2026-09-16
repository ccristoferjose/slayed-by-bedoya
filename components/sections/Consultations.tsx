import Link from "next/link";
import { getService } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

/** Deliberately text-only — it sits between two image-led sections. */
export function Consultations() {
  const service = getService("personal-beauty-consultation")!;

  return (
    <section aria-labelledby="beauty-consultations" className="border-y border-ink/10 bg-cream py-20 lg:py-28">
      <Container>
        <Reveal className="text-center">
          <SectionLabel>Consultations</SectionLabel>
          <h2
            id="beauty-consultations"
            className="mt-4 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] font-light tracking-[-0.02em]"
          >
            Beauty Consultations
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-espresso/85">
            For clients who want direction without booking a makeup appointment —
            what suits you, what to buy, what to stop buying, and how to put a
            routine together that you&apos;ll actually keep up with.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10">
          <ul className="mx-auto flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-2.5">
            {service.includes?.map((item) => (
              <li key={item} className="label text-taupe">
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={200} className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <WhatsAppButton
            label="Ask About a Consultation"
            message={service.whatsappMessage}
            event="whatsapp_service_click"
            eventParams={{ service: service.slug, location: "home_consultations" }}
          />
          <Link href="/beauty-consultation" className="link-rule">
            Details
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
