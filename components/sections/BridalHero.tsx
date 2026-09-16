import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { whatsappMessages } from "@/lib/whatsapp";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export function BridalHero() {
  return (
    <section className="relative flex min-h-[85svh] flex-col justify-end overflow-hidden bg-ink">
      <Image
        src="/images/bridal-hero.jpg"
        alt="Bride photographed in soft natural light on her wedding morning"
        fill
        preload
        sizes="100vw"
        quality={75}
        className="object-cover object-center"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/15 to-ink/80" />

      <div className="relative mx-auto w-full max-w-[110rem] px-6 pt-32 pb-16 sm:px-8 lg:px-12 lg:pb-24">
        <div className="max-w-3xl">
          <p className="label text-ivory/75">{site.location} Bridal Makeup Artist</p>
          <h1 className="mt-6 font-display text-[clamp(3rem,9vw,6.5rem)] leading-[0.95] font-light tracking-[-0.03em] text-ivory">
            Bridal Makeup
          </h1>
          <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-ivory/75">
            Wedding makeup planned around your features, your dress, your venue&apos;s
            light, and a day that runs from the first look to the last dance.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <WhatsAppButton
              label="Ask About Your Wedding Date"
              message={whatsappMessages.bridalDate}
              event="whatsapp_bridal_click"
              eventParams={{ location: "bridal_hero" }}
              className="!bg-ivory !text-ink hover:!bg-nude"
            />
            <Link
              href="#bridal-portfolio"
              className="inline-flex min-h-12 items-center justify-center border border-ivory/40 px-8 py-4 text-[0.6875rem] font-medium tracking-[0.18em] text-ivory uppercase transition-colors duration-250 hover:border-ivory hover:bg-ivory/10"
            >
              See Bridal Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
