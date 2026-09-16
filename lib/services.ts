import { whatsappMessages } from "./whatsapp";

export type ServiceCategorySlug =
  | "makeup-artistry"
  | "lash-brow"
  | "personal-shopping"
  | "makeup-education"
  | "beauty-consultations"
  | "professional-creative";

export type Service = {
  slug: string;
  name: string;
  category: ServiceCategorySlug;
  shortDescription: string;
  /** Paragraphs rendered on the service detail page. */
  longDescription?: string[];
  idealFor?: string[];
  /**
   * Duration and pricing are deliberately left undefined.
   * Fill them in only with real, confirmed values — the UI hides
   * whichever field is missing rather than showing a guess.
   */
  duration?: string;
  startingPrice?: string;
  includes?: string[];
  whatsappMessage: string;
  ctaLabel: string;
  image?: string;
  imageAlt?: string;
  /** Surfaced on the homepage "Makeup Artistry" section. */
  featured?: boolean;
  /** Generates /services/[slug]. */
  hasDetailPage?: boolean;
};

export type ServiceCategory = {
  slug: ServiceCategorySlug;
  name: string;
  /** Short editorial intro shown at the top of the category. */
  intro: string;
  /** Category-level CTA, used when the services are grouped as one offering. */
  cta?: { label: string; message: string };
  /** Dedicated landing page, when the category has one. */
  href?: string;
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "makeup-artistry",
    name: "Makeup Artistry",
    intro:
      "Makeup built around your features, your event, and the finish you actually want to wear.",
    href: "/services",
  },
  {
    slug: "lash-brow",
    name: "Lash & Brow",
    intro:
      "Low-maintenance treatments that shape the eyes and frame the face between makeup appointments.",
    cta: { label: "Ask About Lash & Brow Services", message: whatsappMessages.lashBrow },
  },
  {
    slug: "personal-shopping",
    name: "Personal Beauty Shopping",
    intro:
      "Guidance for choosing products that suit your complexion, your routine, and your budget — instead of guessing at the counter.",
    cta: { label: "Ask About Personal Shopping", message: whatsappMessages.personalShopping },
    href: "/personal-shopping",
  },
  {
    slug: "makeup-education",
    name: "Makeup Education",
    intro:
      "Private lessons shaped around your current skill level, the products you already own, and what you want to be able to do on your own.",
    cta: { label: "Ask About a Private Lesson", message: whatsappMessages.makeupLesson },
    href: "/education",
  },
  {
    slug: "beauty-consultations",
    name: "Beauty Consultations",
    intro:
      "For clients who want direction — a routine, a product list, a refreshed collection — without booking an appointment in the chair.",
    cta: { label: "Ask About a Consultation", message: whatsappMessages.consultation },
    href: "/beauty-consultation",
  },
  {
    slug: "professional-creative",
    name: "Professional & Creative",
    intro:
      "Makeup for photographers, designers, brands, production teams, models, creative directors, and agencies.",
    cta: { label: "Start a Professional Inquiry", message: whatsappMessages.professionalBrief },
    href: "/professional",
  },
];

export const services: Service[] = [
  // ── Makeup artistry ──────────────────────────────────────────────
  {
    slug: "soft-glam",
    name: "Soft Glam",
    category: "makeup-artistry",
    shortDescription:
      "Polished, soft, dimensional makeup designed to enhance natural features while maintaining a refined finish.",
    longDescription: [
      "Soft glam is the look most clients ask for by description before they know its name — skin that still reads as skin, eyes that are defined but not heavy, and a finish that holds through a long day without turning into a mask.",
      "The work happens in the complexion. Colour is matched to your skin in the light you'll actually be in, texture is kept intact, and dimension is built with cream and powder rather than buried under either. Eyes stay warm and blended, lips stay close to your own tone.",
      "It photographs quietly, which is the point. You look like yourself on a very good day.",
    ],
    idealFor: [
      "Birthdays and dinners",
      "Engagement and family photos",
      "Graduations",
      "Bridal showers and brunches",
      "Work events and headshots",
    ],
    whatsappMessage: whatsappMessages.softGlam,
    ctaLabel: "Ask About Soft Glam",
    image: "/images/service-soft-glam.jpg",
    imageAlt: "Close-up of a soft glam makeup look with luminous skin and softly defined eyes",
    featured: true,
    hasDetailPage: true,
  },
  {
    slug: "full-glam",
    name: "Full Glam",
    category: "makeup-artistry",
    shortDescription:
      "A more defined and elevated makeup experience with stronger complexion work, eyes, contour, and finishing details.",
    longDescription: [
      "Full glam is a longer appointment because there is more to build. Complexion work is more structured, contour and highlight are sculpted rather than suggested, and the eye look carries real weight — cut crease, halo, smoked liner, or whatever the occasion and your features call for.",
      "Lashes, precise lip work, and setting for longevity are part of the service. The finish is designed to hold up under event lighting and to read clearly in photos and video, where softer makeup can disappear.",
      "Bring references. Full glam is the category where a photo saves twenty minutes of conversation.",
    ],
    idealFor: [
      "Weddings as a guest",
      "Galas and formals",
      "Birthday and milestone celebrations",
      "Photo and video shoots",
      "Nights out",
    ],
    whatsappMessage: whatsappMessages.fullGlam,
    ctaLabel: "Ask About Full Glam",
    image: "/images/service-full-glam.jpg",
    imageAlt: "Full glam makeup look with sculpted complexion, defined eyes, and lashes",
    featured: true,
    hasDetailPage: true,
  },
  {
    slug: "bridal",
    name: "Bridal Makeup",
    category: "makeup-artistry",
    shortDescription:
      "Personalized wedding makeup designed around the bride's features, wedding aesthetic, photography, and longevity needs.",
    longDescription: [
      "Bridal is its own category of work. The look has to survive a very long day, hold up to a professional photographer's lighting, read correctly in person and on camera, and still look like the person wearing it.",
      "That means the conversation starts well before the wedding day — your features, the dress, the venue and its light, the time of year, whether the ceremony is outdoors, how much glam you actually feel like yourself in, and what your photographer is planning.",
      "Timing on the day is planned backwards from your photographer's first look. Bridal party services are coordinated in the same schedule so nobody is rushed.",
    ],
    idealFor: [
      "Wedding day makeup",
      "Bridal previews and trials",
      "Bridal party and mothers",
      "Engagement and rehearsal events",
      "Elopements",
    ],
    whatsappMessage: whatsappMessages.bridal,
    ctaLabel: "Ask About Bridal Makeup",
    image: "/images/service-bridal.jpg",
    imageAlt: "Bridal makeup portrait with a soft luminous complexion and a veil",
    featured: true,
    hasDetailPage: true,
  },
  {
    slug: "quinceanera",
    name: "Quinceañera Makeup",
    category: "makeup-artistry",
    shortDescription:
      "Age-appropriate, polished makeup designed for quinceañera celebrations and professional photography.",
    longDescription: [
      "A quinceañera is photographed constantly — portraits, the ceremony, the reception, and every phone in the room. The makeup has to look polished in all of it without ageing her.",
      "The approach keeps skin looking like skin, builds definition through soft colour rather than heavy contour, and puts the drama where it belongs for her age and her dress. Longevity matters just as much here: this is a full day of dancing.",
      "Makeup for madrinas, damas, and mothers can be scheduled in the same block.",
    ],
    idealFor: [
      "Quinceañera day",
      "Formal portrait sessions",
      "Court and family makeup",
      "Photo and video shoots before the event",
    ],
    whatsappMessage: whatsappMessages.quinceanera,
    ctaLabel: "Ask About Quinceañera Makeup",
    image: "/images/service-quinceanera.jpg",
    imageAlt: "Quinceañera makeup portrait with polished, age-appropriate glam",
    featured: true,
    hasDetailPage: true,
  },
  {
    slug: "social-event-makeup",
    name: "Social & Event Makeup",
    category: "makeup-artistry",
    shortDescription:
      "Makeup for the events that fill a calendar — showers, parties, dinners, and celebrations where you want to feel finished.",
    idealFor: ["Parties", "Showers", "Dinners", "Corporate events"],
    whatsappMessage: whatsappMessages.event,
    ctaLabel: "Ask About Event Makeup",
    hasDetailPage: true,
  },
  {
    slug: "special-occasion-makeup",
    name: "Special Occasion Makeup",
    category: "makeup-artistry",
    shortDescription:
      "For the days that only happen once — anniversaries, religious celebrations, milestone birthdays, and family portraits.",
    idealFor: ["Anniversaries", "Baptisms and communions", "Milestone birthdays", "Family portraits"],
    whatsappMessage: whatsappMessages.specialOccasion,
    ctaLabel: "Ask About Special Occasion Makeup",
    hasDetailPage: true,
  },
  {
    slug: "concert-night-out-makeup",
    name: "Concert & Night-Out Makeup",
    category: "makeup-artistry",
    shortDescription:
      "Built to last through heat, crowds, and a long night, and to photograph well in bad lighting.",
    idealFor: ["Concerts and festivals", "Clubs and nights out", "Birthday nights", "Content days"],
    whatsappMessage: whatsappMessages.nightOut,
    ctaLabel: "Ask About Night-Out Makeup",
    hasDetailPage: true,
  },

  // ── Lash & brow ──────────────────────────────────────────────────
  {
    slug: "lash-lift",
    name: "Lash Lift",
    category: "lash-brow",
    shortDescription:
      "Lifts and sets your natural lashes upward, opening the eye without extensions or daily curling.",
    longDescription: [
      "A lash lift reshapes the lashes you already have. They're lifted from the base and set in a curl, which opens the eye and makes lashes read longer from the front — no extensions, no adhesive to maintain, nothing to fill.",
      "It suits clients who want their eyes to look awake with no makeup on, and it sits well underneath both soft and full glam. A tint can be added to deepen the lash line.",
    ],
    idealFor: ["Before a trip or event", "Low-maintenance routines", "Straight or downward-growing lashes"],
    whatsappMessage: whatsappMessages.lashLift,
    ctaLabel: "Ask About a Lash Lift",
    image: "/images/service-lash-lift.jpg",
    imageAlt: "Close-up of an eye after a lash lift, showing lifted natural lashes",
    hasDetailPage: true,
  },
  {
    slug: "brow-lamination",
    name: "Brow Lamination / Brow Lift",
    category: "lash-brow",
    shortDescription:
      "Sets brow hairs into a fuller, brushed-up shape, evening out gaps and giving the brow a defined line.",
    longDescription: [
      "Brow lamination relaxes and redirects the brow hairs so they sit in a deliberate shape rather than however they grow. Sparse areas close up, unruly hairs stay where they're put, and the brow holds its line without daily gel.",
      "It pairs with shaping and a tint when more definition is wanted. The result is a fuller, groomed brow that still looks like hair rather than product.",
    ],
    idealFor: ["Sparse or uneven brows", "Unruly or coarse brow hair", "Before an event or photos"],
    whatsappMessage: whatsappMessages.browLamination,
    ctaLabel: "Ask About Brow Lamination",
    image: "/images/service-brow-lamination.jpg",
    imageAlt: "Close-up of a laminated brow brushed into a full, defined shape",
    hasDetailPage: true,
  },

  // ── Grouped offerings ────────────────────────────────────────────
  {
    slug: "personal-beauty-shopping",
    name: "Personal Beauty Shopping Session",
    category: "personal-shopping",
    shortDescription:
      "One-on-one help choosing makeup that actually suits your complexion, your style, your routine, and your budget.",
    includes: [
      "1-on-1 makeup shopping",
      "Personalized product recommendations",
      "Shade matching",
      "Makeup bag building",
      "Budget-friendly product selection",
      "In-store shopping assistance",
    ],
    whatsappMessage: whatsappMessages.personalShopping,
    ctaLabel: "Ask About Personal Shopping",
    image: "/images/service-personal-shopping.jpg",
    imageAlt: "Makeup products arranged on a warm neutral surface during a shopping session",
  },
  {
    slug: "private-makeup-lesson",
    name: "Private Makeup Lesson",
    category: "makeup-education",
    shortDescription:
      "A lesson built around your face, your products, and the looks you want to be able to do yourself.",
    includes: [
      "1-on-1 self-makeup classes",
      "Personalized makeup lessons",
      "Everyday makeup techniques",
      "Special-event makeup techniques",
      "Product & brush education",
    ],
    whatsappMessage: whatsappMessages.makeupLesson,
    ctaLabel: "Ask About a Private Lesson",
    image: "/images/service-education.jpg",
    imageAlt: "Makeup brushes laid out during a one-on-one makeup lesson",
  },
  {
    slug: "personal-beauty-consultation",
    name: "Personal Beauty Consultation",
    category: "beauty-consultations",
    shortDescription:
      "Direction on what to wear, what to buy, and what to stop buying — without booking a makeup appointment.",
    includes: [
      "Personalized makeup consultations",
      "Customized product recommendations",
      "Makeup routine planning",
      "Makeup collection refresh",
      "Personalized shopping lists",
    ],
    whatsappMessage: whatsappMessages.consultation,
    ctaLabel: "Ask About a Consultation",
    image: "/images/service-consultation.jpg",
    imageAlt: "A curated selection of makeup products reviewed during a beauty consultation",
  },

  // ── Professional & creative ──────────────────────────────────────
  {
    slug: "fashion-shows",
    name: "Fashion Shows",
    category: "professional-creative",
    shortDescription: "Runway beauty executed to a designer's direction, on schedule, across a full lineup.",
    whatsappMessage: whatsappMessages.professionalBrief,
    ctaLabel: "Start a Professional Inquiry",
  },
  {
    slug: "editorial-makeup",
    name: "Editorial Makeup",
    category: "professional-creative",
    shortDescription: "Beauty built for the page — concept-led, camera-tested, and consistent across a story.",
    whatsappMessage: whatsappMessages.professionalBrief,
    ctaLabel: "Start a Professional Inquiry",
  },
  {
    slug: "photoshoots",
    name: "Photoshoots",
    category: "professional-creative",
    shortDescription: "Makeup matched to the lighting setup, the wardrobe, and the intended use of the images.",
    whatsappMessage: whatsappMessages.professionalBrief,
    ctaLabel: "Start a Professional Inquiry",
  },
  {
    slug: "on-set-makeup",
    name: "On-Set Makeup",
    category: "professional-creative",
    shortDescription: "Continuity, touch-ups, and quick changes across a shooting day, with talent kept comfortable.",
    whatsappMessage: whatsappMessages.professionalBrief,
    ctaLabel: "Start a Professional Inquiry",
  },
  {
    slug: "creative-beauty-looks",
    name: "Creative Beauty Looks",
    category: "professional-creative",
    shortDescription: "Graphic liner, colour, texture, and finish work for campaigns, tests, and personal projects.",
    whatsappMessage: whatsappMessages.professionalBrief,
    ctaLabel: "Start a Professional Inquiry",
  },
];

export function getServicesByCategory(category: ServiceCategorySlug): Service[] {
  return services.filter((service) => service.category === category);
}

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getCategory(slug: ServiceCategorySlug): ServiceCategory {
  const category = serviceCategories.find((item) => item.slug === slug);
  if (!category) throw new Error(`Unknown service category: ${slug}`);
  return category;
}

export const featuredServices = services.filter((service) => service.featured);

export const detailPageServices = services.filter((service) => service.hasDetailPage);
