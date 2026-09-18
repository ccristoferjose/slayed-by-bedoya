import Image from "next/image";
import Link from "next/link";
import { whatsappMessages } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const steps = [
  {
    number: "01",
    title: "Explore",
    body: "You look through bridal work, services, and the overall makeup style to see whether it's the right fit for your wedding.",
  },
  {
    number: "02",
    title: "Contact",
    body: "You reach out on WhatsApp. Everything is handled in one conversation — no forms, no booking portal.",
  },
  {
    number: "03",
    title: "Share Wedding Details",
    body: "Wedding date, location, bridal party size, the services you need, and the makeup style you have in mind.",
  },
  {
    number: "04",
    title: "Availability & Details",
    body: "Availability is confirmed, and pricing, timing, travel, and service requirements are discussed openly.",
  },
  {
    number: "05",
    title: "Wedding Day",
    body: "Final details are coordinated directly with you, with the schedule planned around your photographer.",
  },
];

type BridalExperienceProps = {
  /** Hidden on /bridal, where the visitor is already on the bridal page. */
  showSecondaryCta?: boolean;
};

export function BridalExperience({ showSecondaryCta = true }: BridalExperienceProps) {
  return (
    <section aria-labelledby="bridal-experience" className="bg-ink py-20 text-ivory lg:py-32">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionLabel className="!text-ivory/55">Bridal</SectionLabel>
              <h2
                id="bridal-experience"
                className="mt-4 font-display text-[clamp(2.5rem,5.5vw,4.25rem)] leading-[1.02] font-light tracking-[-0.02em] text-ivory"
              >
                The Bridal Experience
              </h2>
              <p className="measure mt-6 text-[0.9375rem] leading-relaxed text-ivory/70">
                A wedding is a long day with a lot of photographs in it. Bridal
                work is planned further ahead than anything else, and the
                conversation starts well before the date.
              </p>
            </Reveal>

            <Reveal delay={150} className="mt-10 lg:mt-14">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-espresso">
                <Image
                  src="/images/bridal-experience.jpg"
                  alt="Bride having her makeup finished before the ceremony"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ol className="border-t border-ivory/15">
              {steps.map((step, index) => (
                <Reveal
                  key={step.number}
                  as="li"
                  delay={index * 90}
                  className="grid grid-cols-[3rem_1fr] gap-4 border-b border-ivory/15 py-7 sm:grid-cols-[4.5rem_1fr] sm:gap-6 sm:py-8"
                >
                  <span className="font-display text-xl leading-none font-light text-champagne">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-none font-light text-ivory">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[0.9375rem] leading-relaxed text-ivory/65">
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
              <WhatsAppButton
                label="Ask About Your Wedding Date"
                message={whatsappMessages.bridalDate}
                event="whatsapp_bridal_click"
                eventParams={{ location: "bridal_experience" }}
                className="!bg-ivory !text-ink hover:!bg-nude"
              />
              {/* {showSecondaryCta ? (
                <Link
                  href="/bridal"
                  className="link-rule !text-ivory !border-ivory/40 hover:!border-champagne hover:!text-champagne"
                >
                  Explore Bridal Services
                </Link>
              ) : null} */}
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
