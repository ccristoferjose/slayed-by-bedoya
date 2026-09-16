import type { Testimonial } from "@/lib/testimonials";
import { Reveal } from "@/components/ui/Reveal";

type TestimonialQuoteProps = {
  testimonial: Testimonial;
  delay?: number;
};

/** An editorial pull-quote, not a review card. No stars, no avatars, no box. */
export function TestimonialQuote({ testimonial, delay = 0 }: TestimonialQuoteProps) {
  return (
    <Reveal as="figure" delay={delay} className="m-0 border-t border-ink/10 pt-10">
      <blockquote>
        <p className="font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-[1.25] font-light tracking-[-0.01em] text-ink">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>
      <figcaption className="label mt-6 !text-espresso">
        {testimonial.name}
        <span className="mx-2 text-taupe" aria-hidden="true">
          /
        </span>
        <span className="text-taupe">{testimonial.service}</span>
      </figcaption>
    </Reveal>
  );
}
