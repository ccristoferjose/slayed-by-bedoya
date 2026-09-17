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
NEXT_PUBLIC_BASE_PATH=                     # blank locally; CI sets it for Pages
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
  image-loader.ts custom next/image loader for the static export
  image-manifest.ts  GENERATED — which widths exist for each image
config/
  image-sizes.json   widths shared by the generator and next.config.ts
scripts/
  generate-placeholders.mjs  builds the stand-in photography
  placeholder-manifest.mjs   the image slot list
  optimize-images.mjs        pre-renders responsive WebP variants
.github/workflows/
  deploy.yml    builds and publishes to GitHub Pages on push to main
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

- Every route is static, exported to plain HTML/CSS/JS. No server runtime at
  all — image sizes are pre-rendered at build time.
- Server Components by default; only the navbar, mobile menu, floating button,
  gallery, and social row are client components.
- Fonts are self-hosted through `next/font` (Cormorant Garamond, Inter) — no
  render-blocking request to Google.
- Images are served as pre-rendered WebP with a full `srcset`; see
  *Images without a server* above.
- Colour contrast meets WCAG AA throughout; `--color-stone` is reserved for
  display numerals 24px and up, which is documented in `app/globals.css`.
- Scroll reveals are guarded by `@media (scripting: enabled)`, so the site is
  fully readable if JavaScript fails.

## Deploying to GitHub Pages

Pushing to `main` builds and publishes automatically via
`.github/workflows/deploy.yml`. The live URL is:

**https://ccristoferjose.github.io/slayed-by-bedoya/**

### One-time setup

1. **Enable Pages with Actions as the source.**
   Repo -> Settings -> Pages -> *Build and deployment* -> Source:
   **GitHub Actions**. (Not "Deploy from a branch".)

2. **Add your real values as repository _Variables_.**
   Repo -> Settings -> Secrets and variables -> Actions -> **Variables** tab:

   | Variable | Example |
   | --- | --- |
   | `NEXT_PUBLIC_WHATSAPP_NUMBER` | `13105550147` |
   | `NEXT_PUBLIC_INSTAGRAM_HANDLE` | `slayedbybedoya` |
   | `NEXT_PUBLIC_LOCATION` | `New York, NY` |
   | `NEXT_PUBLIC_CONTACT_EMAIL` | *(optional, leave unset to hide)* |
   | `NEXT_PUBLIC_GA_ID` | *(optional, `G-XXXXXXXXXX`)* |

   Use **Variables**, not Secrets. Every `NEXT_PUBLIC_*` value is compiled into
   the JavaScript the browser downloads, so none of them are secret — and
   Secrets get masked in build logs, which only makes debugging harder.

   Anything you leave unset falls back to the placeholder defaults in
   `lib/site.ts`. The workflow prints a warning in the Actions summary if the
   site ships with the placeholder WhatsApp number still in it.

3. **Push to `main`.** Or run the workflow by hand from the Actions tab —
   useful after changing a variable, since variables only take effect on a new
   build.

### Why this needs a build step

GitHub Pages serves static files only. `next.config.ts` sets
`output: "export"`, so `next build` writes a complete static site to `out/`
and the workflow uploads that directory. Every route is prerendered to HTML,
so nothing is lost — there is no server-rendered content on this site.

Two consequences worth knowing about:

- **`basePath`.** A Pages *project* site is served from `/slayed-by-bedoya`,
  not the domain root. The workflow sets `NEXT_PUBLIC_BASE_PATH` so Next
  prefixes every link, script, stylesheet, and font. `next/image` is the one
  exception — it does *not* prefix `src` — which is handled centrally in
  `lib/image-loader.ts` rather than in the ~50 image references.
- **`trailingSlash: true`.** Routes export as `about/index.html` rather than
  `about.html`, which GitHub Pages resolves unambiguously. Canonical URLs and
  `sitemap.xml` are generated with matching trailing slashes.

### Images without a server

`next/image`'s on-demand optimizer needs a running server, which Pages doesn't
have. Instead the sizes are pre-rendered at build time:

```
public/images/hero.jpg          <- you commit this (the real photograph)
        | npm run build  ->  scripts/optimize-images.mjs
public/images/_opt/hero-640.webp
public/images/_opt/hero-828.webp
public/images/_opt/hero-1080.webp   ...and so on
```

`lib/image-loader.ts` maps each width `next/image` asks for onto one of those
files, so you keep real `srcset`, lazy loading, and WebP — a phone downloads
the 640px variant, not the full-resolution original.

This runs automatically on `npm run dev` and `npm run build` (via `predev` /
`prebuild`) and is incremental, so only changed images are re-encoded. **Drop
in real photography and commit only the source file** — `public/images/_opt/`
is generated and gitignored.

The widths live in `config/image-sizes.json`, which both the generator and
`next.config.ts` read, so the two cannot drift apart.

### Reproducing the deployed build locally

```bash
NEXT_PUBLIC_BASE_PATH=/slayed-by-bedoya \
NEXT_PUBLIC_SITE_URL=https://ccristoferjose.github.io/slayed-by-bedoya \
npm run build
```

To preview the plain root build instead:

```bash
npm run build && npm run preview     # serves out/ at http://localhost:3000
```

Note that `next start` no longer applies — a static export has no server to
start.

### The hero video

The homepage hero plays a muted, looping background video over the static
`hero.jpg`, which remains the poster, the LCP element, and the fallback.

```
media-src/hero.mp4                  your original (gitignored, never served)
        | node scripts/encode-hero-video.mjs
public/images/hero-desktop.mp4      1580x1010 landscape, >= 768px   (committed)
public/images/hero-mobile.mp4        620x1010 portrait,   < 768px   (committed)
```

The video is requested only after the first paint, and **not at all** when the
visitor prefers reduced motion, has Data Saver on, or has JavaScript disabled.
Those visitors see the photograph, which is what everyone sees first regardless.

Two files because the hero is full-bleed with `object-cover`: on a portrait
phone a landscape clip loses roughly three quarters of its width. The mobile
file is a pre-cropped centre slice, so the subject stays framed and the
download is smaller.

To swap in new footage: drop it at `media-src/hero.mp4` and run

```bash
node scripts/encode-hero-video.mjs                    # uses the default crop
node scripts/encode-hero-video.mjs --crop none        # for clean source footage
node scripts/encode-hero-video.mjs --crop 1580:1010:180:0
```

The default crop trims a watermark and carousel chevrons off the current clip —
pass `--crop none` for footage that doesn't need it. The script requires ffmpeg
(`brew install ffmpeg`); it is an authoring step, not part of the build, and the
encoded files are committed.

Both outputs are muted, audio-free, and `+faststart` so playback begins before
the file has finished downloading.

### Moving to a custom domain later

1. Create `public/CNAME` containing just the domain, e.g. `slayedbybedoya.com`.
2. In `.github/workflows/deploy.yml`, set `NEXT_PUBLIC_BASE_PATH:` to empty and
   `NEXT_PUBLIC_SITE_URL:` to `https://slayedbybedoya.com`.
3. Point DNS at GitHub Pages and set the domain under Settings -> Pages.

Nothing else changes — the base path is read from that one variable.
