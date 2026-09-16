import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export type EditorialImage = {
  src: string;
  alt: string;
  /** Small caption set beneath the frame. */
  caption?: string;
};

type EditorialImageGridProps = {
  /** Exactly three images: one tall feature, two stacked beside it. */
  images: [EditorialImage, EditorialImage, EditorialImage];
  /** Flips the feature image to the right-hand column. */
  reversed?: boolean;
  className?: string;
};

function Frame({
  image,
  ratio,
  sizes,
  delay,
}: {
  image: EditorialImage;
  ratio: string;
  sizes: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay} as="figure" className="m-0">
      <div className={`relative w-full overflow-hidden bg-cream ${ratio}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
        />
      </div>
      {image.caption ? (
        <figcaption className="label mt-3 text-taupe">{image.caption}</figcaption>
      ) : null}
    </Reveal>
  );
}

/**
 * The asymmetric three-image composition used for Selected Work and on the
 * About page: one tall feature beside two stacked frames, the shorter column
 * dropped to break the baseline.
 */
export function EditorialImageGrid({
  images,
  reversed = false,
  className = "",
}: EditorialImageGridProps) {
  const [feature, first, second] = images;

  return (
    <div className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-5 ${className}`}>
      <div
        className={`sm:col-span-2 lg:col-span-7 ${reversed ? "lg:order-2 lg:col-start-6" : ""}`}
      >
        <Frame
          image={feature}
          ratio="aspect-[3/4]"
          sizes="(min-width: 1024px) 56vw, 100vw"
          delay={0}
        />
      </div>

      <div
        className={`grid grid-cols-1 gap-4 sm:col-span-2 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:gap-5 lg:pt-20 ${
          reversed ? "lg:order-1" : ""
        }`}
      >
        <Frame
          image={first}
          ratio="aspect-[4/5]"
          sizes="(min-width: 1024px) 38vw, (min-width: 640px) 50vw, 100vw"
          delay={120}
        />
        <Frame
          image={second}
          ratio="aspect-[4/5]"
          sizes="(min-width: 1024px) 38vw, (min-width: 640px) 50vw, 100vw"
          delay={240}
        />
      </div>
    </div>
  );
}
