import Image from "next/image";
import Link from "next/link";
import { getService } from "@/lib/services";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function PersonalShopping() {
  const service = getService("personal-beauty-shopping")!;

  return (
    <section aria-labelledby="personal-shopping" className="bg-cream py-20 lg:py-32">
      <Container size="wide">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-sand">
              {service.image ? (
                <Image
                  src={service.image}
                  alt={service.imageAlt ?? service.name}
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                />
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5 lg:col-start-8">
            <SectionLabel>Shopping</SectionLabel>
            <h2
              id="personal-shopping"
              className="mt-4 font-display text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.02] font-light tracking-[-0.02em]"
            >
              Personal Beauty Shopping
            </h2>
            <p className="measure mt-5 text-[0.9375rem] leading-relaxed text-espresso/85">
              Personalized guidance for choosing makeup that fits your complexion,
              your style, your routine, and your budget — instead of buying on a
              guess and finding out it&apos;s wrong at home.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {service.includes?.map((item) => (
                <li
                  key={item}
                  className="border-b border-ink/10 py-2.5 text-sm text-espresso/80"
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <WhatsAppButton
                label="Ask About Personal Shopping"
                message={service.whatsappMessage}
                variant="outline"
                event="whatsapp_service_click"
                eventParams={{ service: service.slug, location: "home_personal_shopping" }}
              />
              <Link href="/personal-shopping" className="link-rule">
                Details
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
