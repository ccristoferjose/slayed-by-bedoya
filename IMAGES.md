# Image slots

Every photograph on the site is a file in `public/images/`. Each one currently
holds a generated warm-neutral placeholder.

## Going live

1. Export the real photograph at the **same aspect ratio** as the slot below.
   Match or exceed the listed pixel dimensions — `next/image` scales down, never up.
2. Save it over the placeholder using **the exact same filename**.
3. Update the `alt` text in `lib/portfolio.ts` (portfolio images) or in the
   section component (everything else) so it describes the actual photo.
4. If a portfolio photo has a different ratio, update its `width`/`height` in
   `lib/portfolio.ts` to match the file, or the grid will reserve the wrong space.

Nothing else needs to change. No paths are hard-coded anywhere else.

**Commit only the source file.** `npm run build` (and `npm run dev`) runs
`scripts/optimize-images.mjs`, which pre-renders responsive WebP variants into
`public/images/_opt/` for the static GitHub Pages export. That directory is
generated and gitignored — never edit or commit it. See *Images without a
server* in the README.

## Regenerating placeholders

```bash
node scripts/generate-placeholders.mjs
```

Slots are defined in `scripts/placeholder-manifest.mjs`.

## Alt text

Alt text is not decorative here — it is how the work is described to screen
readers and to search engines. Write what the makeup actually looks like
("soft glam with a luminous complexion and warm bronze eyes"), not
"makeup photo 4".

## The hero video

`hero.jpg` is still required — it is the video's poster and its fallback. The
video itself is encoded separately from `media-src/hero.mp4`; see *The hero
video* in the README.

## The slots

| File | Pixels | Ratio | Intended shot |
| --- | --- | --- | --- |
| `public/images/hero.jpg` | 1800 × 2400 | 0.75:1 | Hero — full-bleed beauty portrait, dark and editorial. Subject off-centre right, space on the left for type. |
| `public/images/work-01.jpg` | 1200 × 1600 | 0.75:1 | Selected Work — large vertical portrait, soft glam. |
| `public/images/work-02.jpg` | 1000 × 1250 | 0.80:1 | Selected Work — secondary portrait, full glam. |
| `public/images/work-03.jpg` | 1000 × 1250 | 0.80:1 | Selected Work — secondary portrait, bridal. |
| `public/images/artist-portrait.jpg` | 1200 × 1500 | 0.80:1 | The Artist — authentic portrait or behind-the-scenes of Bedoya working. |
| `public/images/final-cta.jpg` | 1800 × 1200 | 1.50:1 | Final CTA — wide, darker beauty photograph that type can sit on. |
| `public/images/service-soft-glam.jpg` | 1200 × 1500 | 0.80:1 | Soft glam — close-up, luminous skin, softly defined eyes. |
| `public/images/service-full-glam.jpg` | 1200 × 1500 | 0.80:1 | Full glam — sculpted complexion, defined eyes, lashes. |
| `public/images/service-bridal.jpg` | 1200 × 1500 | 0.80:1 | Bridal — portrait with veil, natural window light. |
| `public/images/service-quinceanera.jpg` | 1200 × 1500 | 0.80:1 | Quinceañera — polished, age-appropriate glam in a formal gown. |
| `public/images/service-lash-lift.jpg` | 1200 × 900 | 1.33:1 | Lash lift — macro of the eye, lifted natural lashes. |
| `public/images/service-brow-lamination.jpg` | 1200 × 900 | 1.33:1 | Brow lamination — macro of a brushed-up, laminated brow. |
| `public/images/service-personal-shopping.jpg` | 1400 × 1050 | 1.33:1 | Personal shopping — products laid out, or shopping in store. |
| `public/images/service-education.jpg` | 1400 × 1050 | 1.33:1 | Education — brushes and products during a one-on-one lesson. |
| `public/images/service-consultation.jpg` | 1400 × 1050 | 1.33:1 | Consultation — curated product selection on a neutral surface. |
| `public/images/bridal-hero.jpg` | 2000 × 1300 | 1.54:1 | Bridal hero — wide, full-bleed bridal photograph, room for type. |
| `public/images/bridal-intro.jpg` | 1200 × 1500 | 0.80:1 | Bridal introduction — bride portrait, soft and luminous. |
| `public/images/bridal-experience.jpg` | 1400 × 1750 | 0.80:1 | Bridal experience — getting-ready moment beside the process steps. |
| `public/images/bridal-party.jpg` | 1400 × 1050 | 1.33:1 | Bridal party — bridesmaids or the full party getting ready. |
| `public/images/professional-01.jpg` | 1200 × 1600 | 0.75:1 | Professional — editorial beauty, strong lighting, graphic look. |
| `public/images/professional-02.jpg` | 1200 × 900 | 1.33:1 | Professional — on-set or backstage, tools and talent. |
| `public/images/about-portrait.jpg` | 1200 × 1600 | 0.75:1 | About — full portrait of Bedoya. |
| `public/images/about-bts-01.jpg` | 1000 × 1250 | 0.80:1 | About — behind the scenes, working on a client. |
| `public/images/about-bts-02.jpg` | 1000 × 1250 | 0.80:1 | About — kit, brushes, or detail of the workspace. |
| `public/images/contact.jpg` | 1200 × 1500 | 0.80:1 | Contact — a single calm beauty portrait. |
| `public/images/social-01.jpg` | 800 × 800 | 1.00:1 | Follow the Glam — square Instagram-style crop 1 of 6. |
| `public/images/social-02.jpg` | 800 × 800 | 1.00:1 | Follow the Glam — square Instagram-style crop 2 of 6. |
| `public/images/social-03.jpg` | 800 × 800 | 1.00:1 | Follow the Glam — square Instagram-style crop 3 of 6. |
| `public/images/social-04.jpg` | 800 × 800 | 1.00:1 | Follow the Glam — square Instagram-style crop 4 of 6. |
| `public/images/social-05.jpg` | 800 × 800 | 1.00:1 | Follow the Glam — square Instagram-style crop 5 of 6. |
| `public/images/social-06.jpg` | 800 × 800 | 1.00:1 | Follow the Glam — square Instagram-style crop 6 of 6. |
| `public/images/portfolio-01.jpg` | 1200 × 1600 | 0.75:1 | Portfolio — bridal, luminous skin and nude lip. |
| `public/images/portfolio-02.jpg` | 1200 × 1500 | 0.80:1 | Portfolio — soft glam close-up, warm neutrals. |
| `public/images/portfolio-03.jpg` | 1200 × 1200 | 1.00:1 | Portfolio — full glam, smoked liner. |
| `public/images/portfolio-04.jpg` | 1200 × 1600 | 0.75:1 | Portfolio — quinceañera portrait. |
| `public/images/portfolio-05.jpg` | 1200 × 1500 | 0.80:1 | Portfolio — editorial, graphic liner, matte skin. |
| `public/images/portfolio-06.jpg` | 1200 × 900 | 1.33:1 | Portfolio — eye detail, blended shadow and lashes. |
| `public/images/portfolio-07.jpg` | 1200 × 1600 | 0.75:1 | Portfolio — bride in veil, window light. |
| `public/images/portfolio-08.jpg` | 1200 × 1200 | 1.00:1 | Portfolio — creative colour study on the lid. |
| `public/images/portfolio-09.jpg` | 1200 × 1500 | 0.80:1 | Portfolio — full glam, deep lip. |
| `public/images/portfolio-10.jpg` | 1200 × 1600 | 0.75:1 | Portfolio — soft glam half-body, warm light. |
| `public/images/portfolio-11.jpg` | 1200 × 900 | 1.33:1 | Portfolio — bridal prep behind the scenes. |
| `public/images/portfolio-12.jpg` | 1200 × 1500 | 0.80:1 | Portfolio — editorial, wet-look skin. |
| `public/images/portfolio-13.jpg` | 1200 × 1600 | 0.75:1 | Portfolio — quinceañera formal portrait. |
| `public/images/portfolio-14.jpg` | 1200 × 1200 | 1.00:1 | Portfolio — creative metallic texture. |
| `public/images/portfolio-15.jpg` | 1200 × 1500 | 0.80:1 | Portfolio — full glam evening, cut crease. |
| `public/images/portfolio-16.jpg` | 1200 × 1600 | 0.75:1 | Portfolio — bridal at golden hour. |
| `public/images/portfolio-17.jpg` | 1200 × 900 | 1.33:1 | Portfolio — lip and jawline detail. |
| `public/images/portfolio-18.jpg` | 1200 × 1500 | 0.80:1 | Portfolio — soft glam, sheer skin, brushed brows. |
| `public/images/og-image.jpg` | 1200 × 630 | 1.90:1 | Open Graph card — brand image shown when a link is shared. |

**Total: 50 images.**
