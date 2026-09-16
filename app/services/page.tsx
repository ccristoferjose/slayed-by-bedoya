import type { Metadata } from "next";
import { serviceCategories, getServicesByCategory } from "@/lib/services";
import { whatsappMessages } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { AnchorNav } from "@/components/ui/AnchorNav";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ServiceListItem } from "@/components/sections/ServiceListItem";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Makeup artistry, lash and brow treatments, personal beauty shopping, private makeup lessons, beauty consultations, and professional or creative makeup. Pricing and availability confirmed on WhatsApp.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        label="Services"
        title="What Slayed by Bedoya offers"
        intro="Six categories, from a wedding-day face to a shopping trip that stops you buying the wrong foundation. Pricing depends on the service, the number of people, the location, and the timing — so it's quoted per booking rather than listed. Message on WhatsApp for an exact quote."
      />

      <AnchorNav
        ariaLabel="Service categories"
        items={serviceCategories.map((category) => ({
          href: `#${category.slug}`,
          label: category.name,
        }))}
      />

      {serviceCategories.map((category, categoryIndex) => {
        const items = getServicesByCategory(category.slug);
        const numeral = String(categoryIndex + 1).padStart(2, "0");

        return (
          <section
            key={category.slug}
            id={category.slug}
            aria-labelledby={`${category.slug}-heading`}
            className={`scroll-mt-24 py-16 lg:py-24 ${
              categoryIndex % 2 === 1 ? "bg-cream" : ""
            }`}
          >
            <Container size="wide">
              <Reveal className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-4">
                  <SectionLabel>{numeral}</SectionLabel>
                  <h2
                    id={`${category.slug}-heading`}
                    className="mt-3 font-display text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.02] font-light tracking-[-0.02em]"
                  >
                    {category.name}
                  </h2>
                </div>
                <p className="measure text-[0.9375rem] leading-relaxed text-espresso/85 lg:col-span-6 lg:col-start-5 lg:self-end">
                  {category.intro}
                </p>
              </Reveal>

              <div className="mt-10 border-t border-ink/10 lg:mt-14">
                {items.map((service, index) => (
                  <ServiceListItem
                    key={service.slug}
                    service={service}
                    delay={index * 60}
                    location={`services_${category.slug}`}
                  />
                ))}
              </div>

              {category.cta ? (
                <Reveal className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                  <WhatsAppButton
                    label={category.cta.label}
                    message={category.cta.message}
                    event={
                      category.slug === "professional-creative"
                        ? "whatsapp_professional_click"
                        : "whatsapp_service_click"
                    }
                    eventParams={{ category: category.slug, location: "services_category" }}
                  />
                  <p className="text-sm text-taupe">
                    Prices and availability are confirmed directly in the conversation.
                  </p>
                </Reveal>
              ) : null}
            </Container>
          </section>
        );
      })}

      <FinalCTA
        heading="Not sure which service you need?"
        body="Describe the event, the date, and the kind of makeup you have in mind. You'll get a straight answer on what fits and what it costs."
        message={whatsappMessages.availability}
        secondary={{ label: "View Portfolio", href: "/portfolio" }}
      />
    </>
  );
}
