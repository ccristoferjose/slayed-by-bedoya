import Image from "next/image";
import Link from "next/link";
import { getServicesByCategory, getCategory } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function LashBrow() {
  const category = getCategory("lash-brow");
  const items = getServicesByCategory("lash-brow");

  return (
    <section aria-labelledby="lash-brow" className="py-20 lg:py-32">
      <Container size="wide">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <SectionLabel>Treatments</SectionLabel>
            <h2
              id="lash-brow"
              className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] font-light tracking-[-0.02em]"
            >
              Lash &amp; Brow
            </h2>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-espresso/85">
              {category.intro}
            </p>
          </div>

          <WhatsAppButton
            label="Ask About Lash &amp; Brow Services"
            message={category.cta!.message}
            variant="outline"
            event="whatsapp_service_click"
            eventParams={{ service: "lash-brow", location: "home_lash_brow" }}
            srLabel="Ask about lash and brow services — opens a WhatsApp conversation in a new tab"
            className="shrink-0"
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16">
          {items.map((service, index) => (
            <Reveal key={service.slug} delay={index * 120}>
              <Link href={`/services/${service.slug}`} className="group block">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.imageAlt ?? service.name}
                      fill
                      sizes="(min-width: 640px) 46vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                    />
                  ) : null}
                </div>
                <h3 className="mt-5 font-display text-2xl font-light transition-colors group-hover:text-burgundy lg:text-3xl">
                  {service.name}
                </h3>
                <p className="measure mt-2 text-[0.9375rem] leading-relaxed text-espresso/75">
                  {service.shortDescription}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
