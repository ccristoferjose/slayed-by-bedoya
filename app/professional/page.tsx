import type { Metadata } from "next";
import Image from "next/image";
import { getServicesByCategory } from "@/lib/services";
import { whatsappMessages } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = pageMetadata({
  title: "Professional & Creative",
  description: `Makeup for fashion shows, editorial, photoshoots, on-set work, and creative beauty in ${site.location}. For photographers, designers, brands, production teams, models, creative directors, and agencies.`,
  path: "/professional",
  image: "/images/professional-01.jpg",
});

const audience = [
  "Photographers",
  "Designers",
  "Brands",
  "Production teams",
  "Models",
  "Creative directors",
  "Agencies",
];

const briefFields = [
  "Project type",
  "Project date",
  "Location",
  "Approximate hours",
  "Number of models / talent",
  "Company or production",
  "Creative references",
];

export default function ProfessionalPage() {
  const items = getServicesByCategory("professional-creative");

  return (
    <div className="bg-espresso text-ivory">
      <section className="pt-28 pb-14 lg:pt-40 lg:pb-20">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <SectionLabel className="!text-ivory/55">For industry</SectionLabel>
              <h1 className="mt-4 font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] font-light tracking-[-0.03em] text-ivory">
                Professional &amp; Creative
              </h1>
              <p className="measure mt-7 text-base leading-relaxed text-ivory/70">
                Makeup for shoots, shows, and productions — briefed properly,
                built for the camera and the lighting setup, and delivered on
                schedule across a full call sheet.
              </p>
              <p className="measure mt-4 text-base leading-relaxed text-ivory/70">
                This is separate from consumer bookings. Rates, hours, and
                requirements are quoted per project.
              </p>

              <div className="mt-10">
                <WhatsAppButton
                  label="Start a Professional Inquiry"
                  message={whatsappMessages.professionalBrief}
                  event="whatsapp_professional_click"
                  eventParams={{ location: "professional_hero" }}
                  className="!bg-ivory !text-ink hover:!bg-nude"
                />
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-ink">
                <Image
                  src="/images/professional-01.jpg"
                  alt="Editorial beauty look with graphic liner created for a photo shoot"
                  fill
                  preload
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="professional-services" className="py-16 lg:py-24">
        <Container size="wide">
          <Reveal>
            <SectionLabel className="!text-ivory/55">Services</SectionLabel>
            <h2
              id="professional-services"
              className="mt-3 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-none font-light tracking-[-0.02em] text-ivory"
            >
              What&apos;s covered
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-x-16 border-t border-ivory/15 lg:mt-14 lg:grid-cols-2">
            {items.map((service, index) => (
              <Reveal
                key={service.slug}
                as="article"
                delay={index * 70}
                className="border-b border-ivory/15 py-7"
              >
                <h3 className="font-display text-2xl leading-none font-light text-ivory lg:text-3xl">
                  {service.name}
                </h3>
                <p className="measure mt-3 text-[0.9375rem] leading-relaxed text-ivory/60">
                  {service.shortDescription}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="professional-brief" className="py-16 lg:py-24">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink">
                <Image
                  src="/images/professional-02.jpg"
                  alt="Behind the scenes on set, makeup kit open beside the talent"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div className="mt-10">
                <p className="label !text-ivory/60">Working with</p>
                <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                  {audience.map((item) => (
                    <li key={item} className="text-sm text-ivory/60">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
              <SectionLabel className="!text-ivory/55">The brief</SectionLabel>
              <h2
                id="professional-brief"
                className="mt-3 font-display text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] font-light tracking-[-0.02em] text-ivory"
              >
                What to send
              </h2>
              <p className="measure mt-5 text-[0.9375rem] leading-relaxed text-ivory/70">
                The WhatsApp message opens pre-filled with these fields. Fill in
                what you know and send it — a partial brief is better than none,
                and the gaps get sorted in the conversation.
              </p>

              <ol className="mt-8 border-t border-ivory/15">
                {briefFields.map((field, index) => (
                  <li
                    key={field}
                    className="flex items-baseline gap-5 border-b border-ivory/15 py-3.5"
                  >
                    <span className="font-display text-sm font-light text-champagne">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.9375rem] text-ivory/80">{field}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-10">
                <WhatsAppButton
                  label="Start a Professional Inquiry"
                  message={whatsappMessages.professionalBrief}
                  event="whatsapp_professional_click"
                  eventParams={{ location: "professional_brief" }}
                  className="!bg-ivory !text-ink hover:!bg-nude"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </div>
  );
}
