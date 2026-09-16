export type PortfolioCategory =
  | "soft-glam"
  | "full-glam"
  | "bridal"
  | "quinceanera"
  | "editorial"
  | "creative";

export type PortfolioItem = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: PortfolioCategory;
  /** Optional short caption shown in the lightbox. */
  caption?: string;
};

export const portfolioFilters: { value: PortfolioCategory | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "soft-glam", label: "Soft Glam" },
  { value: "full-glam", label: "Full Glam" },
  { value: "bridal", label: "Bridal" },
  { value: "quinceanera", label: "Quinceañera" },
  { value: "editorial", label: "Editorial" },
  { value: "creative", label: "Creative" },
];

/**
 * Replace each `src` with a real photograph at the same path and aspect ratio.
 * See IMAGES.md for the full shot list. `width`/`height` must match the file so
 * next/image can reserve space and avoid layout shift.
 */
export const portfolio: PortfolioItem[] = [
  { id: "p01", src: "/images/portfolio-01.jpg", width: 1200, height: 1600, category: "bridal", alt: "Bridal portrait with luminous skin, soft bronze eyes, and a nude lip", caption: "Bridal — soft luminous finish" },
  { id: "p02", src: "/images/portfolio-02.jpg", width: 1200, height: 1500, category: "soft-glam", alt: "Soft glam close-up with warm neutral eyes and glossy skin", caption: "Soft glam — warm neutrals" },
  { id: "p03", src: "/images/portfolio-03.jpg", width: 1200, height: 1200, category: "full-glam", alt: "Full glam look with sculpted contour, smoked liner, and lashes", caption: "Full glam — smoked liner" },
  { id: "p04", src: "/images/portfolio-04.jpg", width: 1200, height: 1600, category: "quinceanera", alt: "Quinceañera portrait with polished, age-appropriate makeup", caption: "Quinceañera" },
  { id: "p05", src: "/images/portfolio-05.jpg", width: 1200, height: 1500, category: "editorial", alt: "Editorial beauty portrait with graphic liner and matte skin", caption: "Editorial — graphic liner" },
  { id: "p06", src: "/images/portfolio-06.jpg", width: 1200, height: 900, category: "soft-glam", alt: "Detail shot of softly blended eye makeup and fluttery lashes", caption: "Eye detail" },
  { id: "p07", src: "/images/portfolio-07.jpg", width: 1200, height: 1600, category: "bridal", alt: "Bride in a veil photographed in natural window light", caption: "Bridal — natural light" },
  { id: "p08", src: "/images/portfolio-08.jpg", width: 1200, height: 1200, category: "creative", alt: "Creative beauty look with coloured pigment across the lid and brow", caption: "Creative — colour study" },
  { id: "p09", src: "/images/portfolio-09.jpg", width: 1200, height: 1500, category: "full-glam", alt: "Full glam portrait with a deep lip and defined complexion", caption: "Full glam — deep lip" },
  { id: "p10", src: "/images/portfolio-10.jpg", width: 1200, height: 1600, category: "soft-glam", alt: "Soft glam half-body portrait in warm afternoon light", caption: "Soft glam" },
  { id: "p11", src: "/images/portfolio-11.jpg", width: 1200, height: 900, category: "bridal", alt: "Behind the scenes of bridal preparation with makeup in progress", caption: "Behind the scenes" },
  { id: "p12", src: "/images/portfolio-12.jpg", width: 1200, height: 1500, category: "editorial", alt: "Editorial beauty portrait with sculpted cheekbones and wet-look skin", caption: "Editorial — wet skin" },
  { id: "p13", src: "/images/portfolio-13.jpg", width: 1200, height: 1600, category: "quinceanera", alt: "Quinceañera portrait in a formal gown with soft glam makeup", caption: "Quinceañera — formal portrait" },
  { id: "p14", src: "/images/portfolio-14.jpg", width: 1200, height: 1200, category: "creative", alt: "Creative look with textured metallic pigment on the eyelids", caption: "Creative — metallic texture" },
  { id: "p15", src: "/images/portfolio-15.jpg", width: 1200, height: 1500, category: "full-glam", alt: "Full glam evening look with a cut crease and glossy lip", caption: "Full glam — evening" },
  { id: "p16", src: "/images/portfolio-16.jpg", width: 1200, height: 1600, category: "bridal", alt: "Bridal portrait photographed outdoors at golden hour", caption: "Bridal — golden hour" },
  { id: "p17", src: "/images/portfolio-17.jpg", width: 1200, height: 900, category: "editorial", alt: "Close detail of a lip and jawline in editorial lighting", caption: "Lip detail" },
  { id: "p18", src: "/images/portfolio-18.jpg", width: 1200, height: 1500, category: "soft-glam", alt: "Soft glam portrait with a sheer complexion and brushed-up brows", caption: "Soft glam — sheer skin" },
];

export function filterPortfolio(category: PortfolioCategory | "all"): PortfolioItem[] {
  return category === "all" ? portfolio : portfolio.filter((item) => item.category === category);
}

export const bridalPortfolio = portfolio.filter((item) => item.category === "bridal");
