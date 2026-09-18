import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { whatsappMessages } from "@/lib/whatsapp";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { EditorialImageGrid } from "@/components/sections/EditorialImageGrid";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description: `Meet Bedoya — a professional makeup artist in ${site.location} specialising in bridal, quinceañera, soft glam, full glam, and editorial makeup.`,
  path: "/about",
  image: "/images/about-portrait.jpg",
});

const specialties = [
  { name: "Bridal", body: "Wedding-day makeup planned around the dress, the venue's light, and the photographer's schedule." },
  { name: "Quinceañera", body: "Polished, age-appropriate makeup built to survive a full day of photographs and dancing." },
  { name: "Soft & full glam", body: "Two ends of the same craft — skin that reads as skin, or a fully sculpted, camera-ready face." },
  { name: "Editorial & creative", body: "Concept-led beauty for shoots, shows, and productions, executed to a brief." },
  { name: "Lash & brow", body: "Lash lifts and brow lamination that shape the eyes between makeup appointments." },
  { name: "Education", body: "Private lessons, shopping sessions, and consultations for clients doing their own makeup." },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-28 pb-14 lg:pt-40 lg:pb-20">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-cream">
                <Image
                  src="/images/about-portrait.jpg"
                  alt="Portrait of Bedoya, professional makeup artist"
                  fill
                  preload
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
              <SectionLabel>The artist</SectionLabel>
              <h1 className="mt-4 font-display text-[clamp(2.75rem,6.5vw,5rem)] leading-[0.98] font-light tracking-[-0.03em]">
                Bedoya
              </h1>

              <div className="measure mt-8 space-y-5 text-base leading-relaxed text-espresso/85">
                <p>
                  I&apos;m a makeup artist based in Westchester, New York, serving Westchester 
                  and surrounding areas. Most of what I do is bridal, quinceañeras, and special events, 
                  alongside editorial and production work and teaching clients how to do their own makeup with confidence.

                </p>
                <p>
                  I don&apos;t have a signature look that I put on everyone. What I have is a way of working: 
                  understanding the face in front of me, what the day demands, and how the person wants 
                  to feel — then building the makeup around that.

                </p>
                <p>
                  A lot of the job is listening. &ldquo;Natural&rdquo; means something
                  different to every client, and so does &ldquo;glam.&rdquo; Getting that
                  right before I pick up a brush matters more than any technique.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="approach" className="bg-cream py-20 lg:py-28">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <SectionLabel>Approach</SectionLabel>
              <h2
                id="approach"
                className="mt-3 font-display text-[clamp(2.25rem,4.5vw,3.25rem)] leading-[1.05] font-light tracking-[-0.02em]"
              >
                How I work
              </h2>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-6 lg:col-start-6">
              <div className="measure space-y-5 text-base leading-relaxed text-espresso/85">
                <p>
                  Skin first. Colour matched in the light you&apos;ll actually be in,
                  texture left intact, coverage built only where it&apos;s needed. A
                  complexion that looks like skin holds up in every photograph;
                  one that looks like product doesn&apos;t.
                </p>
                <p>
                  Then structure — where your features already want definition,
                  rather than where a tutorial says contour goes. Faces are not
                  the same shape and they don&apos;t take the same placement.
                </p>
                <p>
                  Longevity is planned, not hoped for. How long you&apos;ll be wearing
                  it, whether you&apos;ll be outside, whether you cry at weddings — all
                  of that changes the products before anything goes on.
                </p>
                <p>
                  And references help. Bring photos. Words about makeup are
                  unreliable; pictures aren&apos;t.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="specialties" className="py-20 lg:py-28">
        <Container size="wide">
          <Reveal>
            <SectionLabel>Specialties</SectionLabel>
            <h2
              id="specialties"
              className="mt-3 font-display text-[clamp(2.25rem,4.5vw,3.25rem)] leading-none font-light tracking-[-0.02em]"
            >
              What I do most
            </h2>
          </Reveal>

          <dl className="mt-10 grid grid-cols-1 gap-x-16 border-t border-ink/10 lg:mt-14 lg:grid-cols-2">
            {specialties.map((item, index) => (
              <Reveal key={item.name} delay={index * 60} className="border-b border-ink/10 py-6">
                <dt className="font-display text-2xl font-light">{item.name}</dt>
                <dd className="measure mt-2 text-[0.9375rem] leading-relaxed text-espresso/75">
                  {item.body}
                </dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <section aria-labelledby="behind-the-scenes" className="pb-20 lg:pb-28">
        <Container size="wide">
          <Reveal>
            <SectionLabel as="h2">
              <span id="behind-the-scenes">Behind the scenes</span>
            </SectionLabel>
          </Reveal>

          <EditorialImageGrid
            className="mt-8"
            reversed
            images={[
              { src: "/images/about-bts-01.jpg", alt: "Bedoya applying makeup to a client during an appointment" },
              { src: "/images/about-bts-02.jpg", alt: "Makeup kit and brushes laid out before an appointment" },
              { src: "/images/work-01.jpg", alt: "Finished soft glam look photographed in natural light" },
            ]}
          />

          <Reveal className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <WhatsAppButton
              label="Contact Bedoya on WhatsApp"
              message={whatsappMessages.general}
              event="whatsapp_service_click"
              eventParams={{ location: "about_page" }}
            />
            <Link href="/portfolio" className="link-rule">
              View Portfolio
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
