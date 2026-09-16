import type { ReactNode } from "react";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";

type LegalLayoutProps = {
  label: string;
  title: string;
  updated: string;
  children: ReactNode;
};

/** A plain reading column. Legal text should be legible, not art-directed. */
export function LegalLayout({ label, title, updated, children }: LegalLayoutProps) {
  return (
    <section className="pt-28 pb-20 lg:pt-40 lg:pb-28">
      <Container size="narrow">
        <SectionLabel>{label}</SectionLabel>
        <h1 className="mt-4 font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1] font-light tracking-[-0.03em]">
          {title}
        </h1>
        <p className="label mt-5">Last updated {updated}</p>

        <div className="mt-12 space-y-10 text-[0.9375rem] leading-relaxed text-espresso/85 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-light [&_h2]:text-ink [&_li]:mt-1.5 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>
      </Container>
    </section>
  );
}
