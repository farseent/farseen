# Farseen T — Portfolio v2

Modernized personal portfolio. React + Vite + Tailwind + Framer Motion.

## Setup

```bash
npm install
npm run dev
```

## What changed from v1

- Proper mobile navigation (hamburger menu, active-section highlighting)
- Design system: centralized colors/fonts in `tailwind.config.js`, no repeated
  magic values across components
- Sections sized to their content instead of forced `h-screen`
- Accessibility: `aria-label`s on icon links, visible focus rings, a skip-link,
  semantic `<header>` / `<main>` / `<footer>`
- SEO: full meta tags + Open Graph/Twitter cards in `index.html`
- Rewritten copy that foregrounds your actual differentiators (ICOTL-26 paper,
  GeoSentinel, the in-progress ticket/booking system) instead of generic
  "MERN stack developer" boilerplate
- Projects swapped: dropped MediRemind / basic auth app / e-commerce clone in
  favor of GeoSentinel, the ticket confirmation system, TransitHub, and Gidy
  Profile — these better represent your current skill level
- New Research section calling out the ICOTL-26 publication specifically

## Still needs from you

1. **Images**: drop real screenshots into `public/assets/` — the design
   currently uses monospace metadata tags instead of images so nothing looks
   broken until you add them. Recommended: 1200×750px, WebP format.
2. **Resume**: add `Farseen-Resume.pdf` to `public/assets/`.
3. **Contact form**: sign up for [EmailJS](https://www.emailjs.com/) (free
   tier is enough), then uncomment the `emailjs.send(...)` call in
   `src/components/Contact.jsx` and fill in your service/template/public keys.
4. **OG image**: add `public/assets/og-cover.jpg` (1200×630px) so link
   previews on LinkedIn/Twitter look intentional.
5. **Favicon**: add `public/assets/favicon.png`.
6. Double check `demo` links in `src/components/Projects.jsx` — several are
   currently `null` since I didn't have live URLs for them in context.

## Deployment

Works as-is on Vercel or Netlify — just point either at this repo, build
command `npm run build`, output directory `dist`.

## Performance notes

- Images should be lazy-loaded (`loading="lazy"`) and given explicit
  width/height once you add them, to avoid layout shift.
- Consider `vite-plugin-image-optimizer` if screenshots are large.
- Fonts are loaded via Google Fonts `<link>` in `index.html` with
  `preconnect` hints already in place.
