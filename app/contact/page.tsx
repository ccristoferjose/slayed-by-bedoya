import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site, instagramUrl } from "@/lib/site";
import { whatsappMessages } from "@/lib/whatsapp";
import { createMailtoUrl } from "@/lib/email";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: `Message Slayed by Bedoya on WhatsApp to check availability for makeup, bridal, lash and brow services, lessons, or professional bookings in ${site.location}.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <section className="pt-28 pb-20 lg:pt-40 lg:pb-32">
      <Container size="wide">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <SectionLabel>Contact</SectionLabel>
            <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] font-light tracking-[-0.03em]">
              Have a question or want to check availability?
            </h1>
            <p className="measure mt-7 text-base leading-relaxed text-espresso/85">
              WhatsApp is the fastest way to reach Slayed by Bedoya. Send the
              service you&apos;re interested in, your date, and any details about the
              event — availability and pricing come back in the same conversation.
            </p>

            <div className="mt-10">
              <WhatsAppButton
                label="Message Slayed by Bedoya on WhatsApp"
                message={whatsappMessages.general}
                event="whatsapp_service_click"
                eventParams={{ location: "contact_page" }}
              />
            </div>

            <dl className="mt-12 border-t border-ink/10">
              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-ink/10 py-5">
                <dt className="label">Instagram</dt>
                <dd>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xl font-light transition-colors hover:text-burgundy"
                  >
                    @{site.instagramHandle}
                  </a>
                </dd>
              </div>

              {site.email ? (
                <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-ink/10 py-5">
                  <dt className="label">Email</dt>
                  <dd>
                    <a
                      href={createMailtoUrl()}
                      className="font-display text-xl font-light transition-colors hover:text-burgundy"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
              ) : null}

              <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-ink/10 py-5">
                <dt className="label">Service area</dt>
                <dd className="font-display text-xl font-light">{site.location}</dd>
              </div>
            </dl>

            <p className="mt-8 text-sm leading-relaxed text-taupe">
              Looking for something specific? Start from{" "}
              <Link href="/services" className="underline underline-offset-4 hover:text-burgundy">
                services
              </Link>{" "}
              or the{" "}
              <Link href="/faq" className="underline underline-offset-4 hover:text-burgundy">
                FAQ
              </Link>
              .
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream">
              <Image
                src="/images/contact.jpg"
                alt="Beauty portrait by Slayed by Bedoya"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
