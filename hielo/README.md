# HIELO — Quantitative Research Partner (HQRP)

A premium, futuristic 3D marketing site for an AI quantitative-research company.
Dark, minimal, glassmorphic, cinematic — built to read like a technology company,
not a trading website.

> **We don't predict markets. We discover repeatable market behaviour.**

---

## Stack

| Concern            | Tool |
| ------------------ | ---- |
| Framework          | Next.js 14 (App Router) + React 18 + TypeScript |
| Styling            | TailwindCSS (design tokens in `tailwind.config.ts`) |
| 3D                 | Three.js · React Three Fiber · Drei |
| Motion             | GSAP · Framer Motion |
| Smooth scroll      | Lenis |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

Requires Node 18.17+.

## Architecture

```
app/                      Next.js App Router
  layout.tsx              fonts (Inter + IBM Plex Mono), SEO metadata, SmoothScroll
  page.tsx                homepage composition (all sections)

components/
  layout/                 Navbar · Footer · Loader (cinematic overlay)
  ui/                     reusable primitives: Button · GlassCard · Reveal · Eyebrow · SectionShell
  sections/               one file per page section (Hero, WhoWeAre, ...)
  three/                  everything WebGL
    Background.tsx        client-only, ssr:false loader for the canvas
    FieldCanvas.tsx       fixed R3F <Canvas> wrapper (dpr cap, reduced-motion aware)
    CameraRig.tsx         scroll-driven cinematic camera
    scenes/               ResearchField · NeuralCore · Connections · AmbientParticles · DataStreams
    shaders/              GLSL strings for the core points

animations/               Framer variants + Lenis SmoothScroll provider
hooks/                    useScrollProgress · useMousePosition · useReducedMotion
lib/                      constants (all site copy) · utils
styles/                   globals.css
types/                    shared domain types
```

## Where things live

- **Change copy** → `lib/constants.ts` (single source of truth for all text).
- **Retune the brand** → colours, fonts and spacing in `tailwind.config.ts`.
- **Add a section** → create it under `components/sections/`, then drop it into
  `app/page.tsx`. Wrap content in `<Reveal>` for the scroll-in animation.
- **Tune the 3D field** → `components/three/scenes/*` and `CameraRig.tsx`.

## Performance & accessibility

- Three.js is code-split (`ssr:false`) so the first paint never waits on WebGL.
- Device pixel ratio is capped at 1.8; the field pauses under reduced motion.
- All procedural geometry — no heavy model downloads.
- `prefers-reduced-motion` disables the smooth scroll, camera loop and canvas
  animations; keyboard focus and semantic structure are preserved.

## Note on the preview dashboard

Section 4 is an **illustrative preview only**. All figures are synthetic.
HIELO is a research firm: it does not sell signals, provide advice, or execute trades.
