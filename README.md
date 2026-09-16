# Slayed by Bedoya

The website for Slayed by Bedoya — a professional makeup artist. Built to turn
visitors from Instagram, TikTok, Google, and referrals into WhatsApp
conversations.

Next.js (App Router) · TypeScript · Tailwind CSS v4. No booking system, no
payments, no accounts — every conversion path ends in WhatsApp.

## Getting started

```bash
npm install
cp .env.example .env.local   # then edit it, see below
npm run dev                  # http://localhost:3000
```

## Before launch — three things to replace

### 1. The WhatsApp number, Instagram handle, and location

Everything reads from `lib/site.ts`, which reads from `.env.local`. The number
is never hard-coded anywhere else — every WhatsApp link on the site is
generated from this one value.

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=13105550147   # international format, digits only
NEXT_PUBLIC_INSTAGRAM_HANDLE=slayedbybedoya
NEXT_PUBLIC_LOCATION=New York
NEXT_PUBLIC_SITE_URL=https://slayedbybedoya.com
NEXT_PUBLIC_CONTACT_EMAIL=                 # optional; blank hides the email link
NEXT_PUBLIC_GA_ID=                         # optional; blank disables analytics
```

The current defaults are placeholders. `15555550123` is not a real number.

### 2. The photography

All 50 images in `public/images/` are generated placeholders. **See
[IMAGES.md](IMAGES.md)** for the full shot list with the exact pixel dimensions
and aspect ratio each slot expects, plus what each shot is meant to be.

Drop a real photograph in at the same filename and nothing else changes. Update
the `alt` text while you're there — it's how the work is described to screen
readers and to Google.

Regenerate the placeholders any time with:

```bash
node scripts/generate-placeholders.mjs
```

### 3. The policies

`app/privacy/page.tsx` and `app/terms/page.tsx` are templates. Every bracketed
item — deposit amount, cancellation window, travel area, photo usage — is a
decision only you can make. Nothing is invented.

The same applies to the FAQ: answers in `lib/faq.ts` flagged
`needsConfirmation: true` describe how things generally work without stating a
policy that hasn't been confirmed.

## What's deliberately empty

`lib/testimonials.ts` is an empty array. The "Client Love" section does not
render at all while it's empty, so the site never shows invented praise. Add
real quotes and the section appears by itself:

```ts
export const testimonials: Testimonial[] = [
  { quote: "…", name: "Marisol", service: "Bridal Client" },
];
```

Service `duration` and `startingPrice` in `lib/services.ts` are likewise
undefined. The UI hides whichever is missing rather than showing a guess — fill
them in only with real, confirmed values.

## How it's put together

```
app/          one file per route; every page is statically prerendered
components/
  layout/     Navbar, MobileMenu, Footer, FloatingWhatsApp
  sections/   the homepage sections and the reusable service layouts
  portfolio/  filterable gallery and lightbox
  ui/         Container, PageHeader, Reveal, WhatsAppButton, FaqAccordion
lib/
  site.ts         brand config — the single source for the phone number
  whatsapp.ts     createWhatsAppUrl() plus every pre-filled message
  services.ts     all services, categories, and their WhatsApp messages
  portfolio.ts    portfolio items with dimensions for next/image
  testimonials.ts real quotes only
  faq.ts          FAQ content
  metadata.ts     per-page metadata and local-business JSON-LD
  analytics.ts    GA4 event helper; no-ops when GA isn't configured
scripts/      placeholder image generator and its manifest
```

Adding a service means adding an object to `lib/services.ts` — the services
page, the detail page, the sitemap, and the WhatsApp CTA all follow from it.

### Routes

`/` `/services` `/services/[slug]` `/portfolio` `/bridal` `/education`
`/personal-shopping` `/beauty-consultation` `/professional` `/about` `/faq`
`/contact` `/privacy` `/terms`

Plus `/sitemap.xml` and `/robots.txt`, generated from the same data.

## Analytics

Set `NEXT_PUBLIC_GA_ID` and GA4 loads. The events fired are listed in
`lib/analytics.ts`:

`whatsapp_hero_click` · `whatsapp_service_click` · `whatsapp_bridal_click` ·
`whatsapp_professional_click` · `whatsapp_floating_click` ·
`whatsapp_footer_click` · `whatsapp_nav_click` · `instagram_click` ·
`portfolio_interaction`

Service CTAs pass a `service` and `location` parameter, so you can see which
services actually generate enquiries and where people tap from.

## Notes on the build

- Every route is static. No server runtime is required beyond image
  optimisation.
- Server Components by default; only the navbar, mobile menu, floating button,
  gallery, and social row are client components.
- Fonts are self-hosted through `next/font` (Cormorant Garamond, Inter) — no
  render-blocking request to Google.
- Colour contrast meets WCAG AA throughout; `--color-stone` is reserved for
  display numerals 24px and up, which is documented in `app/globals.css`.
- Scroll reveals are guarded by `@media (scripting: enabled)`, so the site is
  fully readable if JavaScript fails.

## Deploy

Push to Vercel and set the same environment variables in the project settings.

```bash
npm run build && npm start   # to check the production build locally
```
