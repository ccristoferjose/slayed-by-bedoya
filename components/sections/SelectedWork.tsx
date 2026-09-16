import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { EditorialImageGrid } from "./EditorialImageGrid";

const categories = ["Soft Glam", "Full Glam", "Bridal", "Quinceañera", "Editorial"];

export function SelectedWork() {
  return (
    <section aria-labelledby="selected-work" className="py-20 lg:py-32">
      <Container size="wide">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Portfolio</SectionLabel>
            <h2
              id="selected-work"
              className="mt-4 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1] font-light tracking-[-0.02em]"
            >
              Selected Work
            </h2>
          </div>

          <ul className="flex flex-wrap gap-x-5 gap-y-2 sm:max-w-xs sm:justify-end">
            {categories.map((category) => (
              <li key={category} className="label text-taupe">
                {category}
              </li>
            ))}
          </ul>
        </Reveal>

        <EditorialImageGrid
          className="mt-12 lg:mt-16"
          images={[
            {
              src: "/images/work-01.jpg",
              alt: "Soft glam portrait with luminous skin and warm bronze eyes",
              caption: "Soft Glam",
            },
            {
              src: "/images/work-02.jpg",
              alt: "Full glam look with sculpted contour and a defined eye",
              caption: "Full Glam",
            },
            {
              src: "/images/work-03.jpg",
              alt: "Bridal portrait photographed in soft natural light",
              caption: "Bridal",
            },
          ]}
        />

        <Reveal className="mt-12 flex justify-start lg:mt-16 lg:justify-end">
          <Link href="/portfolio" className="link-rule">
            Explore Portfolio
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
