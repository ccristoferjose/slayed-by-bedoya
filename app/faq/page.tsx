import type { Metadata } from "next";
import { faqSections } from "@/lib/faq";
import { whatsappMessages } from "@/lib/whatsapp";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { PageHeader } from "@/components/ui/PageHeader";
import { AnchorNav } from "@/components/ui/AnchorNav";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  description:
    "Appointments, availability, travel, skin preparation, bridal timelines, makeup lessons, and professional bookings — answered. Pricing and availability are confirmed on WhatsApp.",
  path: "/faq",
});

/** Rendered so the questions are eligible for search result rich snippets. */
function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqSections.flatMap((section) =>
      section.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    ),
  };
}

export default function FaqPage() {
  return (
    <>
      <PageHeader
        label="FAQ"
        title="Questions, answered"
        intro="The practical details. Anything not covered here — and anything to do with pricing, availability, or holding a date — is settled directly on WhatsApp."
      />

      <AnchorNav
        ariaLabel="FAQ sections"
        items={faqSections.map((section) => ({ href: `#${section.id}`, label: section.title }))}
      />

      {faqSections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          aria-labelledby={`${section.id}-heading`}
          className={`scroll-mt-24 py-14 lg:py-20 ${index % 2 === 1 ? "bg-cream" : ""}`}
        >
          <Container>
            <Reveal>
              <SectionLabel>{String(index + 1).padStart(2, "0")}</SectionLabel>
              <h2
                id={`${section.id}-heading`}
                className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-none font-light tracking-[-0.02em]"
              >
                {section.title}
              </h2>
            </Reveal>

            <div className="mt-8">
              <FaqAccordion items={section.items} />
            </div>
          </Container>
        </section>
      ))}

      <FinalCTA
        heading="Still have a question?"
        body="Ask it directly. Availability, pricing, timing, and travel are all confirmed in the same conversation."
        message={whatsappMessages.general}
        secondary={{ label: "View Services", href: "/services" }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
    </>
  );
}
