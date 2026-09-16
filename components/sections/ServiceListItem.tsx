import Link from "next/link";
import type { Service } from "@/lib/services";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

type ServiceListItemProps = {
  service: Service;
  delay?: number;
  /** Where the click happened, for GA4. */
  location: string;
};

/**
 * A rule-separated editorial row — name, detail, action. Not a card.
 * Duration and price render only when a real value exists on the service.
 */
export function ServiceListItem({ service, delay = 0, location }: ServiceListItemProps) {
  const hasMeta = Boolean(service.duration || service.startingPrice);

  return (
    <Reveal
      as="article"
      delay={delay}
      className="grid grid-cols-1 gap-5 border-b border-ink/10 py-9 lg:grid-cols-12 lg:gap-10 lg:py-12"
    >
      <div className="lg:col-span-4">
        <h3 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.05] font-light tracking-[-0.015em]">
          {service.hasDetailPage ? (
            <Link href={`/services/${service.slug}`} className="transition-colors hover:text-burgundy">
              {service.name}
            </Link>
          ) : (
            service.name
          )}
        </h3>

        {hasMeta ? (
          <dl className="mt-4 space-y-1">
            {service.duration ? (
              <div className="flex gap-2 text-sm text-taupe">
                <dt className="label">Duration</dt>
                <dd>{service.duration}</dd>
              </div>
            ) : null}
            {service.startingPrice ? (
              <div className="flex gap-2 text-sm text-taupe">
                <dt className="label">From</dt>
                <dd>{service.startingPrice}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}
      </div>

      <div className="lg:col-span-5">
        <p className="text-[0.9375rem] leading-relaxed text-espresso/85">
          {service.shortDescription}
        </p>

        {service.idealFor?.length ? (
          <div className="mt-5">
            <p className="label">Ideal for</p>
            <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
              {service.idealFor.map((occasion) => (
                <li key={occasion} className="text-sm text-espresso/70">
                  {occasion}
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {service.includes?.length ? (
          <div className="mt-5">
            <p className="label">Includes</p>
            <ul className="mt-2 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li key={item} className="border-b border-ink/10 py-2 text-sm text-espresso/75">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col items-start gap-4 lg:col-span-3 lg:items-end">
        <WhatsAppButton
          label={service.ctaLabel}
          message={service.whatsappMessage}
          variant="outline"
          event="whatsapp_service_click"
          eventParams={{ service: service.slug, location }}
          className="w-full lg:w-auto"
        />
        {service.hasDetailPage ? (
          <Link href={`/services/${service.slug}`} className="link-rule">
            Details
          </Link>
        ) : null}
      </div>
    </Reveal>
  );
}
