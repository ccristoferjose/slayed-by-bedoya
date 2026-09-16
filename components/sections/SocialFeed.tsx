"use client";

import Image from "next/image";
import { site, instagramUrl } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";

const posts = Array.from({ length: 6 }, (unused, index) => ({
  src: `/images/social-0${index + 1}.jpg`,
  alt: `Recent makeup work shared on the Slayed by Bedoya Instagram, image ${index + 1} of 6`,
}));

/**
 * Deliberately small. The portfolio is the portfolio — this is a doorway to
 * Instagram, not a second gallery.
 */
export function SocialFeed() {
  return (
    <section aria-labelledby="follow-the-glam" className="border-t border-ink/10 py-16 lg:py-20">
      <Container size="wide">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Instagram</SectionLabel>
            <h2
              id="follow-the-glam"
              className="mt-3 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-none font-light tracking-[-0.02em]"
            >
              Follow the Glam
            </h2>
          </div>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("instagram_click", { location: "social_section" })}
            className="link-rule"
          >
            Follow @{site.instagramHandle}
          </a>
        </Reveal>

        {/* Scroll-snaps on phones so it stays one row and never wraps into a
            second gallery competing with the portfolio. */}
        <Reveal
          delay={100}
          className="-mx-6 mt-8 flex snap-x snap-mandatory gap-2 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-6"
        >
          {posts.map((post) => (
            <a
              key={post.src}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("instagram_click", { location: "social_grid" })}
              className="relative aspect-square w-40 shrink-0 snap-start overflow-hidden bg-cream sm:w-auto"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 32vw, 40vw"
                className="object-cover transition-opacity duration-500 hover:opacity-85"
              />
            </a>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
