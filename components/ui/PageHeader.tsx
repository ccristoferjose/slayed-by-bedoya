import type { ReactNode } from "react";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

type PageHeaderProps = {
  label: string;
  title: string;
  intro?: string;
  children?: ReactNode;
};

/**
 * The opening block on interior pages. Carries the top padding that clears the
 * fixed navigation, so pages never repeat that measurement.
 */
export function PageHeader({ label, title, intro, children }: PageHeaderProps) {
  return (
    <section className="pt-28 pb-14 lg:pt-40 lg:pb-20">
      <Container size="wide">
        <Reveal className="max-w-3xl">
          <SectionLabel as="p">{label}</SectionLabel>
          <h1 className="mt-4 font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[0.98] font-light tracking-[-0.03em]">
            {title}
          </h1>
          {intro ? (
            <p className="measure mt-7 text-base leading-relaxed text-espresso/85">{intro}</p>
          ) : null}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
