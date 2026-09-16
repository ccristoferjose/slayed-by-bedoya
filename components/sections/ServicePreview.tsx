import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

type ServicePreviewProps = {
  service: Service;
  /** Zero-based position. Drives the numeral and the alternating composition. */
  index: number;
};

/**
 * One featured makeup service as an image-and-text row. The side, the column
 * widths, and the image ratio alternate so a column of these never reads as a
 * stack of identical cards.
 */
export function ServicePreview({ service, index }: ServicePreviewProps) {
  const reversed = index % 2 === 1;
  const numeral = String(index + 1).padStart(2, "0");

  return (
    <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-14">
      <Reveal
        className={`lg:col-span-7 ${reversed ? "lg:order-2 lg:col-start-6" : "lg:col-start-1"}`}
      >
        <div
          className={`relative w-full overflow-hidden bg-cream ${
            reversed ? "aspect-[4/5] lg:aspect-[5/6]" : "aspect-[4/5] lg:aspect-[4/5]"
          }`}
        >
          {service.image ? (
            <Image
              src={service.image}
              alt={service.imageAlt ?? service.name}
              fill
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
          ) : null}
        </div>
      </Reveal>

      <Reveal
        delay={120}
        className={`lg:col-span-5 ${reversed ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"}`}
      >
        <p className="font-display text-2xl leading-none font-light text-stone">{numeral}</p>

        <h3 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] font-light tracking-[-0.02em]">
          {service.name}
        </h3>

        <p className="measure mt-5 text-[0.9375rem] leading-relaxed text-espresso/85">
          {service.shortDescription}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
          <WhatsAppButton
            label={service.ctaLabel}
            message={service.whatsappMessage}
            variant="outline"
            event="whatsapp_service_click"
            eventParams={{ service: service.slug, location: "home_featured" }}
          />
          {service.hasDetailPage ? (
            <Link href={`/services/${service.slug}`} className="link-rule">
              Details
            </Link>
          ) : null}
        </div>
      </Reveal>
    </article>
  );
}
