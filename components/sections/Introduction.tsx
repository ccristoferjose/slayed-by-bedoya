import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

export function Introduction() {
  return (
    <section aria-labelledby="the-artist" className="bg-cream py-20 lg:py-32">
      <Container size="wide">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand">
              <Image
                src="/images/artist-portrait.jpg"
                alt="Bedoya working on a client during a makeup appointment"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <SectionLabel>The Artist</SectionLabel>

            <h2
              id="the-artist"
              className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] font-light tracking-[-0.02em]"
            >
              Beauty tailored to the person wearing it.
            </h2>

            <div className="measure mt-7 space-y-5 text-[0.9375rem] leading-relaxed text-espresso/85">
              <p>
                No two faces are shaped the same way, and no two clients want the
                same thing from their makeup. Every look starts with the person in
                the chair — their features, their colouring, how they usually wear
                makeup, and how much glam actually feels like them.
              </p>
              <p>
                From there it&apos;s built around the occasion: the lighting you&apos;ll be
                in, whether there&apos;s a photographer, how long you need it to hold,
                and what you want to feel like when you look in the mirror.
              </p>
            </div>

            <Link href="/about" className="link-rule mt-9 inline-block">
              Meet Bedoya
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
