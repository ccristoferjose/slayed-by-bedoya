import Image from "next/image";
import type { Service } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FinalCTA } from "./FinalCTA";

export type OfferingPoint = {
  title: string;
  body: string;
};

type OfferingPageProps = {
  service: Service;
  label: string;
  title: string;
  intro: string;
  /** Paragraphs under "How it works". */
  body: string[];
  points: OfferingPoint[];
  ctaHeading: string;
  ctaBody: string;
  /** GA4 location tag for this page's CTAs. */
  analyticsLocation: string;
};

/**
 * The shared layout for the grouped offerings — personal shopping, private
 * lessons, and consultations. One markup definition, three sets of content.
 */
export function OfferingPage({
  service,
  label,
  title,
  intro,
  body,
  points,
  ctaHeading,
  ctaBody,
  analyticsLocation,
}: OfferingPageProps) {
  return (
    <>
      <PageHeader label={label} title={title} intro={intro} />

      {service.image ? (
        <Container size="wide">
          <Reveal>
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-cream lg:aspect-[21/9]">
              <Image
                src={service.image}
                alt={service.imageAlt ?? service.name}
                fill
                preload
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </Container>
      ) : null}

      <section aria-labelledby="how-it-works" className="py-16 lg:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <SectionLabel as="h2">
                <span id="how-it-works">How it works</span>
              </SectionLabel>
              <div className="measure mt-6 space-y-5 text-base leading-relaxed text-espresso/85">
                {body.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7">
              <ol className="border-t border-ink/10">
                {points.map((point, index) => (
                  <Reveal
                    key={point.title}
                    as="li"
                    delay={index * 80}
                    className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink/10 py-7 sm:grid-cols-[4rem_1fr] sm:gap-6"
                  >
                    <span className="font-display text-2xl leading-none font-light text-stone">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl leading-none font-light">{point.title}</h3>
                      <p className="mt-3 text-[0.9375rem] leading-relaxed text-espresso/80">
                        {point.body}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="whats-included" className="border-t border-ink/10 bg-cream py-16 lg:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <SectionLabel>Included</SectionLabel>
              <h2
                id="whats-included"
                className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-light tracking-[-0.02em]"
              >
                {service.name}
              </h2>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-6 lg:col-start-6">
              <ul className="border-t border-ink/10">
                {service.includes?.map((item) => (
                  <li
                    key={item}
                    className="border-b border-ink/10 py-4 text-[0.9375rem] text-espresso/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <WhatsAppButton
                  label={service.ctaLabel}
                  message={service.whatsappMessage}
                  event="whatsapp_service_click"
                  eventParams={{ service: service.slug, location: analyticsLocation }}
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <FinalCTA
        heading={ctaHeading}
        body={ctaBody}
        message={service.whatsappMessage}
        image={service.image ?? "/images/final-cta.jpg"}
        imageAlt={service.imageAlt ?? service.name}
      />
    </>
  );
}
