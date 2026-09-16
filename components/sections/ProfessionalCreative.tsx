import Image from "next/image";
import Link from "next/link";
import { getServicesByCategory } from "@/lib/services";
import { whatsappMessages } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const audience = [
  "Photographers",
  "Designers",
  "Brands",
  "Production teams",
  "Models",
  "Creative directors",
  "Agencies",
];

export function ProfessionalCreative() {
  const items = getServicesByCategory("professional-creative");

  return (
    <section aria-labelledby="professional-creative" className="bg-espresso py-20 text-ivory lg:py-32">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Offset image pair — a deliberately different composition from the
              bridal band so the two dark sections don't rhyme. */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-ink sm:w-[82%]">
                <Image
                  src="/images/professional-01.jpg"
                  alt="Editorial beauty look created for a photo shoot"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="relative -mt-14 ml-auto aspect-[4/3] w-[72%] overflow-hidden bg-ink sm:-mt-24 sm:w-[58%]">
                <Image
                  src="/images/professional-02.jpg"
                  alt="Behind the scenes on set, makeup kit open beside the talent"
                  fill
                  sizes="(min-width: 1024px) 26vw, 60vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal>
              <SectionLabel className="!text-ivory/55">For industry</SectionLabel>
              <h2
                id="professional-creative"
                className="mt-4 font-display text-[clamp(2.5rem,5.5vw,4.25rem)] leading-[1.02] font-light tracking-[-0.02em] text-ivory"
              >
                Professional &amp; Creative
              </h2>
              <p className="measure mt-6 text-[0.9375rem] leading-relaxed text-ivory/70">
                Makeup for shoots, shows, and productions — briefed properly,
                built for the camera, and delivered on a schedule.
              </p>
            </Reveal>

            <Reveal delay={120} className="mt-10">
              <ul className="border-t border-ivory/15">
                {items.map((service) => (
                  <li key={service.slug} className="border-b border-ivory/15 py-4">
                    <span className="font-display text-xl leading-none font-light text-ivory lg:text-2xl">
                      {service.name}
                    </span>
                    <p className="mt-1.5 text-sm leading-relaxed text-ivory/55">
                      {service.shortDescription}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200} className="mt-8">
              <p className="label !text-ivory/60">Working with</p>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                {audience.map((item) => (
                  <li key={item} className="text-sm text-ivory/60">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={260} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <WhatsAppButton
                label="Professional Inquiry via WhatsApp"
                message={whatsappMessages.professional}
                event="whatsapp_professional_click"
                eventParams={{ location: "home_professional" }}
                className="!bg-ivory !text-ink hover:!bg-nude"
              />
              <Link
                href="/professional"
                className="link-rule !text-ivory !border-ivory/40 hover:!border-champagne hover:!text-champagne"
              >
                Details
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
