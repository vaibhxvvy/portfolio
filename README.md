# Vaibhav Surthi — Portfolio V2

A premium digital identity for an AI Engineer and Product Builder.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- Lenis (smooth scroll)
- TinaCMS (content management)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content Management

Visit `/admin` to edit content via TinaCMS. Changes are committed to Git and auto-deployed on Vercel.

## Architecture

```
src/
├── app/           # Next.js App Router pages
├── components/
│   ├── sections/  # Page sections (Hero, Projects, etc.)
│   ├── layout/    # Navigation, Footer, SmoothScroll
│   ├── motion/    # Framer Motion animation primitives
│   └── ui/        # shadcn/ui components
├── content/       # Site configuration & data
└── lib/           # Utilities
content/           # TinaCMS content files
```

## Deploy

Push to `main` branch — auto-deploys to Vercel.
