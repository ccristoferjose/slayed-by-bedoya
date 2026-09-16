import { testimonials } from "@/lib/testimonials";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { TestimonialQuote } from "./TestimonialQuote";

/**
 * Renders nothing until real testimonials exist in `lib/testimonials.ts`.
 * The site never shows invented praise.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section aria-labelledby="client-love" className="py-20 lg:py-32">
      <Container>
        <Reveal>
          <SectionLabel>Testimonials</SectionLabel>
          <h2
            id="client-love"
            className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] font-light tracking-[-0.02em]"
          >
            Client Love
          </h2>
        </Reveal>

        <div className="mt-14 space-y-12 lg:mt-20 lg:space-y-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialQuote
              key={`${testimonial.name}-${index}`}
              testimonial={testimonial}
              delay={index * 100}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
