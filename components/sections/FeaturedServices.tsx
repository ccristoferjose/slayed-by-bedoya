import Link from "next/link";
import { featuredServices, getServicesByCategory } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ServicePreview } from "./ServicePreview";

/** The makeup services that aren't given a full row of their own. */
const additionalSlugs = new Set([
  "social-event-makeup",
  "special-occasion-makeup",
  "concert-night-out-makeup",
]);

export function FeaturedServices() {
  const additional = getServicesByCategory("makeup-artistry").filter((service) =>
    additionalSlugs.has(service.slug),
  );

  return (
    <section aria-labelledby="makeup-artistry" className="py-20 lg:py-32">
      <Container size="wide">
        <Reveal className="max-w-2xl">
          <SectionLabel>Services</SectionLabel>
          <h2
            id="makeup-artistry"
            className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] font-light tracking-[-0.02em]"
          >
            Makeup Artistry
          </h2>
        </Reveal>

        <div className="mt-14 space-y-20 lg:mt-20 lg:space-y-32">
          {featuredServices.map((service, index) => (
            <ServicePreview key={service.slug} service={service} index={index} />
          ))}
        </div>

        <Reveal className="mt-20 border-t border-ink/10 pt-10 lg:mt-32">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
            <SectionLabel className="lg:col-span-3">Also available</SectionLabel>

            <ul className="lg:col-span-6 lg:col-start-4">
              {additional.map((service) => (
                <li key={service.slug} className="border-b border-ink/10 py-5 last:border-b-0">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex items-baseline justify-between gap-6"
                  >
                    <span className="font-display text-xl font-light transition-colors group-hover:text-burgundy lg:text-2xl">
                      {service.name}
                    </span>
                    <span className="label shrink-0 transition-colors group-hover:text-burgundy">
                      View
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="lg:col-span-3 lg:col-start-10 lg:text-right">
              <Link href="/services" className="link-rule">
                View All Makeup Services
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
