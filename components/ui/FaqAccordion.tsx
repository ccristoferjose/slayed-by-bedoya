import type { FaqItem } from "@/lib/faq";
import { Reveal } from "./Reveal";

type FaqAccordionProps = {
  items: FaqItem[];
};

/**
 * Native <details>/<summary>: keyboard accessible, announced correctly, and
 * fully functional before any JavaScript loads.
 */
export function FaqAccordion({ items }: FaqAccordionProps) {
  return (
    <div className="border-t border-ink/10">
      {items.map((item, index) => (
        <Reveal key={item.question} delay={index * 50}>
          <details className="group border-b border-ink/10">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
              <h3 className="font-display text-xl leading-snug font-light transition-colors group-open:text-burgundy lg:text-2xl">
                {item.question}
              </h3>
              <span
                aria-hidden="true"
                className="mt-1.5 shrink-0 text-taupe transition-transform duration-300 group-open:rotate-45"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <div className="measure pb-7 text-[0.9375rem] leading-relaxed text-espresso/85">
              <p>{item.answer}</p>
            </div>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
