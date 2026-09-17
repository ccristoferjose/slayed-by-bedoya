import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { whatsappMessages } from "@/lib/whatsapp";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { HeroVideo } from "./HeroVideo";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink">
      <Image
        src="/images/hero.jpg"
        alt="Editorial beauty portrait by Slayed by Bedoya"
        fill
        // The LCP element — preloaded in <head> rather than discovered in <body>.
        // It also doubles as the video's poster and its permanent fallback.
        preload
        sizes="100vw"
        className="object-cover object-center"
      />

      <HeroVideo />

      {/* Scrim: keeps the wordmark legible at the top and the copy legible at
          the bottom without washing the photograph out in the middle. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/10 to-ink/80"
      />

      <div className="relative mx-auto w-full max-w-[110rem] px-6 pt-32 pb-16 sm:px-8 lg:px-12 lg:pb-24">
        <div className="max-w-3xl">
          <p className="label text-ivory/75">{site.location} Makeup Artist</p>

          <h1 className="mt-6 font-display text-[clamp(3.25rem,11vw,8rem)] leading-[0.92] font-light tracking-[-0.03em] text-ivory">
            Slayed by Bedoya
          </h1>

          <p className="mt-6 font-display text-[clamp(1.5rem,3.2vw,2.25rem)] leading-tight font-light text-ivory/90 italic">
            Professional Makeup Artistry
          </p>

          <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-ivory/75">
            Makeup experiences created for weddings, celebrations, events,
            productions, and everyday confidence.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <WhatsAppButton
              label="Contact on WhatsApp"
              message={whatsappMessages.general}
              event="whatsapp_hero_click"
              className="!bg-ivory !text-ink hover:!bg-nude"
            />
            <Link
              href="/portfolio"
              className="inline-flex min-h-12 items-center justify-center border border-ivory/40 px-8 py-4 text-[0.6875rem] font-medium tracking-[0.18em] text-ivory uppercase transition-colors duration-250 hover:border-ivory hover:bg-ivory/10"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
