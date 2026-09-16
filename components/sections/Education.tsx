import Image from "next/image";
import Link from "next/link";
import { getService } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function Education() {
  const service = getService("private-makeup-lesson")!;

  return (
    <section aria-labelledby="makeup-education" className="py-20 lg:py-32">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionLabel>Education</SectionLabel>
            <h2
              id="makeup-education"
              className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] font-light tracking-[-0.02em]"
            >
              Makeup Education
            </h2>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <p className="measure text-[0.9375rem] leading-relaxed text-espresso/85">
              Private lessons, taught on your own face. Every lesson is tailored
              to your current skill level, the products you already own, your
              features, and what you actually want to be able to do — whether
              that&apos;s a five-minute weekday routine or a full look for an event.
            </p>

            <ul className="mt-8 border-t border-ink/10">
              {service.includes?.map((item) => (
                <li
                  key={item}
                  className="border-b border-ink/10 py-3.5 text-sm text-espresso/80"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <WhatsAppButton
                label="Ask About Makeup Lessons"
                message={service.whatsappMessage}
                variant="outline"
                event="whatsapp_service_click"
                eventParams={{ service: service.slug, location: "home_education" }}
              />
              <Link href="/education" className="link-rule">
                Details
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="mt-14 lg:mt-20">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-cream lg:aspect-[21/9]">
            {service.image ? (
              <Image
                src={service.image}
                alt={service.imageAlt ?? service.name}
                fill
                sizes="100vw"
                className="object-cover"
              />
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
