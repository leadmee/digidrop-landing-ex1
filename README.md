# DigiDrop — landing page

Concept landing page for **DigiDrop**, a fictional SaaS that automatically
delivers digital products (files, license keys, course access) to buyers the
moment a payment clears. Built as a portfolio piece — Russian-language copy,
dark monochrome design, and motion-driven, experimental layout.

> This is a design/portfolio concept, not a real service.

## Highlights

- **Scroll-morphing background** — fixed gradient blobs and parallax isometric
  cubes whose colour shifts with scroll progress. Driven by a plain scroll
  handler so it keeps working in background tabs.
- **Interactive hero folder** — a folder that fans its files out on click, with
  a live "delivered" counter (keyboard-accessible).
- **Pinned horizontal "How it works"** — four steps scrub sideways as you scroll,
  with an inertial rAF lerp; falls back to a vertical stack on mobile / reduced
  motion.
- **Glassmorphism sections** — bento features with a cursor spotlight, seamless
  logo marquees, a month/year pricing toggle with animated prices, an accordion
  FAQ, and a magnetic final CTA.
- Fully responsive, respects `prefers-reduced-motion`, no horizontal overflow.

## Tech stack

- [React 19](https://react.dev) + [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com) (`@tailwindcss/vite`)
- [Framer Motion](https://motion.dev) for animation
- [lucide-react](https://lucide.dev) icons
- Fonts: Unbounded (display) + Inter (body)

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5174)
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Author

Made by [leadmee](https://github.com/leadmee)
