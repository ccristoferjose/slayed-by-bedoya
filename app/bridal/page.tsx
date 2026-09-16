import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bridalPortfolio } from "@/lib/portfolio";
import { bridalFaq } from "@/lib/faq";
import { getService } from "@/lib/services";
import { whatsappMessages } from "@/lib/whatsapp";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { BridalHero } from "@/components/sections/BridalHero";
import { BridalExperience } from "@/components/sections/BridalExperience";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = pageMetadata({
  title: "Bridal",
  description: `Wedding makeup in ${site.location} by Slayed by Bedoya — bridal makeup, bridal party services, and pre-wedding lash and brow treatments. Ask about your wedding date on WhatsApp.`,
  path: "/bridal",
  image: "/images/service-bridal.jpg",
});

/** Real offerings assembled for brides — each maps to an existing service. */
const bridalServices = [
  {
    name: "Bridal Makeup",
    body: "Wedding-day makeup designed around your features, your dress, the venue's light, and how the day is photographed. Planned to last from the first look onward.",
    href: "/services/bridal",
    cta: "Ask About Bridal Makeup",
    message: whatsappMessages.bridal,
  },
  {
    name: "Bridal Party & Family",
    body: "Bridesmaids, mothers, and family scheduled in the same block as the bride, with a timeline built backwards from when you need to be finished.",
    href: null,
    cta: "Ask About Bridal Party Makeup",
    message: whatsappMessages.bridalParty,
  },
  {
    name: "Lash & Brow Before the Wedding",
    body: "A lash lift and brow lamination in the weeks before the wedding open the eyes and set the brows, so the makeup has a better base to work on.",
    href: "/services/lash-lift",
    cta: "Ask About Lash & Brow",
    message: whatsappMessages.lashBrow,
  },
];

export default function BridalPage() {
  const bridal = getService("bridal")!;

  return (
    <>
      <BridalHero />

      {/* Introduction */}
      <section aria-labelledby="bridal-intro" className="py-20 lg:py-32">
        <Container size="wide">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <SectionLabel>For brides</SectionLabel>
              <h2
                id="bridal-intro"
                className="mt-4 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] font-light tracking-[-0.02em]"
              >
                The one look that has to hold all day.
              </h2>
              <div className="measure mt-7 space-y-5 text-base leading-relaxed text-espresso/85">
                <p>
                  Bridal makeup is judged twice — once in the mirror and once in
                  photographs you&apos;ll keep for the rest of your life. Those two
                  things don&apos;t always want the same makeup, and reconciling them
                  is most of the work.
                </p>
                <p>
                  {bridal.longDescription?.[2]}
                </p>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
                <Image
                  src="/images/bridal-intro.jpg"
                  alt="Bride with soft luminous bridal makeup before the ceremony"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Bridal portfolio */}
      <section
        id="bridal-portfolio"
        aria-labelledby="bridal-portfolio-heading"
        className="scroll-mt-24 bg-cream py-20 lg:py-28"
      >
        <Container size="wide">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2
              id="bridal-portfolio-heading"
              className="font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-none font-light tracking-[-0.02em]"
            >
              Bridal Work
            </h2>
            <Link href="/portfolio" className="link-rule">
              Full Portfolio
            </Link>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-3 lg:mt-14 lg:grid-cols-4 lg:gap-5">
            {bridalPortfolio.map((item, index) => (
              <Reveal key={item.id} delay={index * 90}>
                <div className={`relative w-full overflow-hidden bg-sand ${index % 2 === 1 ? "aspect-[3/4] lg:mt-10" : "aspect-[3/4]"}`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 24vw, 48vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Bridal services */}
      <section aria-labelledby="bridal-services" className="py-20 lg:py-28">
        <Container size="wide">
          <Reveal>
            <SectionLabel>Services</SectionLabel>
            <h2
              id="bridal-services"
              className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-none font-light tracking-[-0.02em]"
            >
              Available for Weddings
            </h2>
          </Reveal>

          <div className="mt-10 border-t border-ink/10 lg:mt-14">
            {bridalServices.map((service, index) => (
              <Reveal
                key={service.name}
                as="article"
                delay={index * 70}
                className="grid grid-cols-1 gap-5 border-b border-ink/10 py-9 lg:grid-cols-12 lg:gap-10 lg:py-12"
              >
                <h3 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.05] font-light tracking-[-0.015em] lg:col-span-4">
                  {service.name}
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-espresso/85 lg:col-span-5">
                  {service.body}
                </p>
                <div className="flex flex-col items-start gap-4 lg:col-span-3 lg:items-end">
                  <WhatsAppButton
                    label={service.cta}
                    message={service.message}
                    variant="outline"
                    event="whatsapp_bridal_click"
                    eventParams={{ service: service.name, location: "bridal_services" }}
                    className="w-full lg:w-auto"
                  />
                  {service.href ? (
                    <Link href={service.href} className="link-rule">
                      Details
                    </Link>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <BridalExperience showSecondaryCta={false} />

      {/* Bridal party */}
      <section aria-labelledby="bridal-party" className="py-20 lg:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-cream">
                <Image
                  src="/images/bridal-party.jpg"
                  alt="Bridal party getting ready together on the wedding morning"
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
              <SectionLabel>The party</SectionLabel>
              <h2
                id="bridal-party"
                className="mt-4 font-display text-[clamp(2.25rem,4.5vw,3.25rem)] leading-[1.05] font-light tracking-[-0.02em]"
              >
                Bridal Party Services
              </h2>
              <p className="measure mt-5 text-[0.9375rem] leading-relaxed text-espresso/85">
                Bridesmaids, mothers, and family can all be scheduled in the same
                block. Everyone gets a start time, the order is planned so nobody
                is sitting in makeup for hours before photos, and the whole
                timeline is built backwards from when you need to be finished.
              </p>
              <p className="measure mt-4 text-[0.9375rem] leading-relaxed text-espresso/85">
                Send the number of people and the time your photographer arrives,
                and you&apos;ll get a schedule that works.
              </p>
              <div className="mt-9">
                <WhatsAppButton
                  label="Ask About Bridal Party Makeup"
                  message={whatsappMessages.bridalParty}
                  event="whatsapp_bridal_click"
                  eventParams={{ location: "bridal_party" }}
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Bridal FAQ */}
      <section aria-labelledby="bridal-faq" className="bg-cream py-20 lg:py-28">
        <Container>
          <Reveal>
            <SectionLabel>Questions</SectionLabel>
            <h2
              id="bridal-faq"
              className="mt-4 font-display text-[clamp(2.25rem,5vw,3.5rem)] leading-none font-light tracking-[-0.02em]"
            >
              Bridal FAQ
            </h2>
          </Reveal>

          <div className="mt-10">
            <FaqAccordion items={bridalFaq.items} />
          </div>

          <Reveal className="mt-10">
            <Link href="/faq" className="link-rule">
              All Questions
            </Link>
          </Reveal>
        </Container>
      </section>

      <FinalCTA
        heading="Ask about your wedding date"
        body="Send your wedding date, the location, your bridal party size, and the makeup style you have in mind. Availability comes back in the same conversation."
        image="/images/service-bridal.jpg"
        imageAlt="Bridal makeup portrait with a soft luminous complexion"
        message={whatsappMessages.bridalDate}
        secondary={{ label: "View Portfolio", href: "/portfolio" }}
      />
    </>
  );
}
