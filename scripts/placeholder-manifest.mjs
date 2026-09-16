/**
 * The complete image slot list for the site.
 *
 * `scripts/generate-placeholders.mjs` renders a warm neutral placeholder for
 * every entry. To go live, drop a real photograph at the same `file` path with
 * the same aspect ratio — nothing in the code needs to change.
 *
 * Keep the `w`/`h` in sync with `lib/portfolio.ts`, which passes them to
 * next/image so space is reserved before the image loads.
 */
export const slots = [
  // ── Homepage ──────────────────────────────────────────────────────
  { file: "hero.jpg", w: 1800, h: 2400, tone: 8, shot: "Hero — full-bleed beauty portrait, dark and editorial. Subject off-centre right, space on the left for type." },
  { file: "work-01.jpg", w: 1200, h: 1600, tone: 1, shot: "Selected Work — large vertical portrait, soft glam." },
  { file: "work-02.jpg", w: 1000, h: 1250, tone: 3, shot: "Selected Work — secondary portrait, full glam." },
  { file: "work-03.jpg", w: 1000, h: 1250, tone: 5, shot: "Selected Work — secondary portrait, bridal." },
  { file: "artist-portrait.jpg", w: 1200, h: 1500, tone: 2, shot: "The Artist — authentic portrait or behind-the-scenes of Bedoya working." },
  { file: "final-cta.jpg", w: 1800, h: 1200, tone: 9, shot: "Final CTA — wide, darker beauty photograph that type can sit on." },

  // ── Service imagery ───────────────────────────────────────────────
  { file: "service-soft-glam.jpg", w: 1200, h: 1500, tone: 1, shot: "Soft glam — close-up, luminous skin, softly defined eyes." },
  { file: "service-full-glam.jpg", w: 1200, h: 1500, tone: 4, shot: "Full glam — sculpted complexion, defined eyes, lashes." },
  { file: "service-bridal.jpg", w: 1200, h: 1500, tone: 0, shot: "Bridal — portrait with veil, natural window light." },
  { file: "service-quinceanera.jpg", w: 1200, h: 1500, tone: 6, shot: "Quinceañera — polished, age-appropriate glam in a formal gown." },
  { file: "service-lash-lift.jpg", w: 1200, h: 900, tone: 2, shot: "Lash lift — macro of the eye, lifted natural lashes." },
  { file: "service-brow-lamination.jpg", w: 1200, h: 900, tone: 2, shot: "Brow lamination — macro of a brushed-up, laminated brow." },
  { file: "service-personal-shopping.jpg", w: 1400, h: 1050, tone: 3, shot: "Personal shopping — products laid out, or shopping in store." },
  { file: "service-education.jpg", w: 1400, h: 1050, tone: 1, shot: "Education — brushes and products during a one-on-one lesson." },
  { file: "service-consultation.jpg", w: 1400, h: 1050, tone: 5, shot: "Consultation — curated product selection on a neutral surface." },

  // ── Bridal page ───────────────────────────────────────────────────
  { file: "bridal-hero.jpg", w: 2000, h: 1300, tone: 7, shot: "Bridal hero — wide, full-bleed bridal photograph, room for type." },
  { file: "bridal-intro.jpg", w: 1200, h: 1500, tone: 0, shot: "Bridal introduction — bride portrait, soft and luminous." },
  { file: "bridal-experience.jpg", w: 1400, h: 1750, tone: 5, shot: "Bridal experience — getting-ready moment beside the process steps." },
  { file: "bridal-party.jpg", w: 1400, h: 1050, tone: 3, shot: "Bridal party — bridesmaids or the full party getting ready." },

  // ── Professional & creative ───────────────────────────────────────
  { file: "professional-01.jpg", w: 1200, h: 1600, tone: 9, shot: "Professional — editorial beauty, strong lighting, graphic look." },
  { file: "professional-02.jpg", w: 1200, h: 900, tone: 8, shot: "Professional — on-set or backstage, tools and talent." },

  // ── About ─────────────────────────────────────────────────────────
  { file: "about-portrait.jpg", w: 1200, h: 1600, tone: 2, shot: "About — full portrait of Bedoya." },
  { file: "about-bts-01.jpg", w: 1000, h: 1250, tone: 4, shot: "About — behind the scenes, working on a client." },
  { file: "about-bts-02.jpg", w: 1000, h: 1250, tone: 6, shot: "About — kit, brushes, or detail of the workspace." },

  // ── Contact ───────────────────────────────────────────────────────
  { file: "contact.jpg", w: 1200, h: 1500, tone: 0, shot: "Contact — a single calm beauty portrait." },

  // ── Social grid (square) ──────────────────────────────────────────
  ...Array.from({ length: 6 }, (unused, index) => ({
    file: `social-0${index + 1}.jpg`,
    w: 800,
    h: 800,
    tone: index % 10,
    shot: `Follow the Glam — square Instagram-style crop ${index + 1} of 6.`,
  })),

  // ── Portfolio grid ────────────────────────────────────────────────
  { file: "portfolio-01.jpg", w: 1200, h: 1600, tone: 0, shot: "Portfolio — bridal, luminous skin and nude lip." },
  { file: "portfolio-02.jpg", w: 1200, h: 1500, tone: 1, shot: "Portfolio — soft glam close-up, warm neutrals." },
  { file: "portfolio-03.jpg", w: 1200, h: 1200, tone: 4, shot: "Portfolio — full glam, smoked liner." },
  { file: "portfolio-04.jpg", w: 1200, h: 1600, tone: 6, shot: "Portfolio — quinceañera portrait." },
  { file: "portfolio-05.jpg", w: 1200, h: 1500, tone: 9, shot: "Portfolio — editorial, graphic liner, matte skin." },
  { file: "portfolio-06.jpg", w: 1200, h: 900, tone: 2, shot: "Portfolio — eye detail, blended shadow and lashes." },
  { file: "portfolio-07.jpg", w: 1200, h: 1600, tone: 7, shot: "Portfolio — bride in veil, window light." },
  { file: "portfolio-08.jpg", w: 1200, h: 1200, tone: 8, shot: "Portfolio — creative colour study on the lid." },
  { file: "portfolio-09.jpg", w: 1200, h: 1500, tone: 3, shot: "Portfolio — full glam, deep lip." },
  { file: "portfolio-10.jpg", w: 1200, h: 1600, tone: 1, shot: "Portfolio — soft glam half-body, warm light." },
  { file: "portfolio-11.jpg", w: 1200, h: 900, tone: 5, shot: "Portfolio — bridal prep behind the scenes." },
  { file: "portfolio-12.jpg", w: 1200, h: 1500, tone: 9, shot: "Portfolio — editorial, wet-look skin." },
  { file: "portfolio-13.jpg", w: 1200, h: 1600, tone: 6, shot: "Portfolio — quinceañera formal portrait." },
  { file: "portfolio-14.jpg", w: 1200, h: 1200, tone: 8, shot: "Portfolio — creative metallic texture." },
  { file: "portfolio-15.jpg", w: 1200, h: 1500, tone: 4, shot: "Portfolio — full glam evening, cut crease." },
  { file: "portfolio-16.jpg", w: 1200, h: 1600, tone: 0, shot: "Portfolio — bridal at golden hour." },
  { file: "portfolio-17.jpg", w: 1200, h: 900, tone: 2, shot: "Portfolio — lip and jawline detail." },
  { file: "portfolio-18.jpg", w: 1200, h: 1500, tone: 3, shot: "Portfolio — soft glam, sheer skin, brushed brows." },

  // ── Social sharing card ───────────────────────────────────────────
  { file: "og-image.jpg", w: 1200, h: 630, tone: 8, shot: "Open Graph card — brand image shown when a link is shared." },
];
