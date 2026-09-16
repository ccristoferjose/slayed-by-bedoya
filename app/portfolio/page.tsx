import type { Metadata } from "next";
import { whatsappMessages } from "@/lib/whatsapp";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PortfolioGallery } from "@/components/portfolio/PortfolioGallery";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio",
  description: `Soft glam, full glam, bridal, quinceañera, editorial, and creative makeup by Slayed by Bedoya in ${site.location}.`,
  path: "/portfolio",
  image: "/images/portfolio-01.jpg",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        label="Portfolio"
        title="The work"
        intro="Soft glam, full glam, bridal, quinceañera, editorial, and creative looks. Filter by category, or open any image to see it larger."
      />

      <PortfolioGallery />

      <section aria-labelledby="portfolio-cta" className="border-t border-ink/10 py-20 lg:py-28">
        <Container>
          <Reveal className="max-w-2xl">
            <h2
              id="portfolio-cta"
              className="font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] font-light tracking-[-0.02em]"
            >
              Like this style?
            </h2>
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-espresso/85">
              Send the date you have in mind and a reference or two from above.
              Availability and pricing come back in the same conversation.
            </p>
            <div className="mt-9">
              <WhatsAppButton
                label="Ask About Availability on WhatsApp"
                message={whatsappMessages.portfolio}
                event="whatsapp_service_click"
                eventParams={{ location: "portfolio_footer" }}
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
