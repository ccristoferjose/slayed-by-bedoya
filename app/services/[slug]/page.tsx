import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { detailPageServices, getService, getCategory, getServicesByCategory } from "@/lib/services";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function generateStaticParams() {
  return detailPageServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return pageMetadata({
    title: service.name,
    description: `${service.shortDescription} Available in ${site.location} — message Slayed by Bedoya on WhatsApp to check availability.`,
    path: `/services/${service.slug}`,
    image: service.image,
  });
}

export default async function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service || !service.hasDetailPage) notFound();

  const category = getCategory(service.category);
  const related = getServicesByCategory(service.category).filter(
    (item) => item.slug !== service.slug && item.hasDetailPage,
  );
  const body = service.longDescription ?? [service.shortDescription];

  return (
    <>
      <article>
        <section className="pt-28 pb-14 lg:pt-40 lg:pb-20">
          <Container size="wide">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <Reveal className="lg:col-span-6">
                <nav aria-label="Breadcrumb">
                  <ol className="flex flex-wrap items-center gap-2">
                    <li>
                      <Link href="/services" className="label hover:text-burgundy">
                        Services
                      </Link>
                    </li>
                    <li aria-hidden="true" className="label text-stone">
                      /
                    </li>
                    <li>
                      <Link href={`/services#${category.slug}`} className="label hover:text-burgundy">
                        {category.name}
                      </Link>
                    </li>
                  </ol>
                </nav>

                <h1 className="mt-5 font-display text-[clamp(2.75rem,6.5vw,5rem)] leading-[0.98] font-light tracking-[-0.03em]">
                  {service.name}
                </h1>

                <div className="measure mt-8 space-y-5 text-base leading-relaxed text-espresso/85">
                  {body.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>

                {service.idealFor?.length ? (
                  <div className="mt-10">
                    <SectionLabel>Ideal for</SectionLabel>
                    <ul className="mt-4 border-t border-ink/10">
                      {service.idealFor.map((occasion) => (
                        <li
                          key={occasion}
                          className="border-b border-ink/10 py-3 text-[0.9375rem] text-espresso/80"
                        >
                          {occasion}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {/* Duration and price appear only once real values are set in
                    lib/services.ts — nothing here is estimated. */}
                {service.duration || service.startingPrice ? (
                  <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-4">
                    {service.duration ? (
                      <div>
                        <dt className="label">Approximate duration</dt>
                        <dd className="mt-1 font-display text-2xl font-light">{service.duration}</dd>
                      </div>
                    ) : null}
                    {service.startingPrice ? (
                      <div>
                        <dt className="label">Starting at</dt>
                        <dd className="mt-1 font-display text-2xl font-light">
                          {service.startingPrice}
                        </dd>
                      </div>
                    ) : null}
                  </dl>
                ) : (
                  <p className="mt-10 border-l border-ink/15 pl-5 text-sm leading-relaxed text-taupe">
                    Duration and pricing depend on the look, the number of people,
                    and the location — both are confirmed directly on WhatsApp.
                  </p>
                )}

                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                  <WhatsAppButton
                    label={service.ctaLabel}
                    message={service.whatsappMessage}
                    event="whatsapp_service_click"
                    eventParams={{ service: service.slug, location: "service_detail" }}
                  />
                  <Link
                    href="/portfolio"
                    className="inline-flex min-h-12 items-center justify-center border border-ink/30 px-8 py-4 text-[0.6875rem] font-medium tracking-[0.18em] uppercase transition-colors duration-250 hover:border-burgundy hover:text-burgundy"
                  >
                    View Portfolio
                  </Link>
                </div>
              </Reveal>

              {service.image ? (
                <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
                    <Image
                      src={service.image}
                      alt={service.imageAlt ?? service.name}
                      fill
                      preload
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              ) : null}
            </div>
          </Container>
        </section>

        {related.length ? (
          <section aria-labelledby="related" className="border-t border-ink/10 py-16 lg:py-20">
            <Container size="wide">
              <Reveal>
                <SectionLabel as="h2">
                  <span id="related">More in {category.name}</span>
                </SectionLabel>
              </Reveal>
              <ul className="mt-6 border-t border-ink/10">
                {related.map((item, index) => (
                  <Reveal key={item.slug} as="li" delay={index * 60} className="border-b border-ink/10">
                    <Link
                      href={`/services/${item.slug}`}
                      className="group flex items-baseline justify-between gap-6 py-5"
                    >
                      <span className="font-display text-xl font-light transition-colors group-hover:text-burgundy lg:text-2xl">
                        {item.name}
                      </span>
                      <span className="label shrink-0 transition-colors group-hover:text-burgundy">
                        View
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </ul>
            </Container>
          </section>
        ) : null}
      </article>

      <FinalCTA
        heading={`Ask about ${service.name.toLowerCase()}`}
        body="Send your date and any details about the event, and you'll get availability and pricing back in the same conversation."
        message={service.whatsappMessage}
        image={service.image ?? "/images/final-cta.jpg"}
        imageAlt={service.imageAlt ?? "Beauty portrait by Slayed by Bedoya"}
      />
    </>
  );
}
