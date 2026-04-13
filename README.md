# Neha — Portfolio

Neha's portfolio site: **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Sections include hero, about, experience, tech stack, projects, achievements, and contact, with light/dark theme and SEO (metadata, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`).

**Live:** [neha-portfolio.vercel.app](https://neha-portfolio.vercel.app) (update after you deploy).

---

## Tech stack

| Area        | Details                                      |
| ----------- | -------------------------------------------- |
| Framework   | Next.js 14 (App Router)                      |
| Language    | TypeScript                                   |
| Styling     | Tailwind CSS                                 |
| Motion      | Framer Motion v11                            |
| Theme       | `next-themes` (system / light / dark)        |
| Fonts       | Inter + Outfit (Google Fonts, `next/font`)   |

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script          | Purpose                                      |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Development server                           |
| `npm run build` | Production build (`NODE_ENV=production`)     |
| `npm run start` | Run production server locally                |
| `npm run lint`  | ESLint                                       |
| `npm run clean` | Remove `.next` (useful if the cache misbehaves) |

---

## Environment variables

Create `.env.local` in the project root when you need local overrides (this file is gitignored).

| Variable                   | Required | Description |
| -------------------------- | -------- | ----------- |
| `NEXT_PUBLIC_SITE_URL`     | Yes*     | Canonical site URL (no trailing slash). Used for metadata, sitemap, and JSON-LD. |
| `NEXT_PUBLIC_RESUME_URL`   | No       | Full URL to a PDF. If unset, the site uses `/Neha_Resume.pdf` from `public/`. |
| `NEXT_PUBLIC_GITHUB_URL`   | No       | Profile URL; defaults to the GitHub username in code if unset. |

\*Strongly recommended in production (e.g. on Vercel).

---

## Deploy (Vercel)

1. Import this repository; use the **repository root** as the project root (no extra “Root Directory” unless this repo lives inside another folder).
2. Add **`NEXT_PUBLIC_SITE_URL`** in **Project → Settings → Environment Variables** (your real `.vercel.app` or custom domain).
3. Ensure **`public/Neha_Resume.pdf`** is committed, or set **`NEXT_PUBLIC_RESUME_URL`** to a hosted PDF.
4. Deploy; Vercel will run `npm run build` by default.

---

## Project layout

```
src/
  app/           # App Router: layout, page, globals, sitemap, robots, not-found
  components/    # Layout, sections, motion, providers, SEO
  data/          # Central content (`site.ts`)
public/          # Static assets (e.g. resume PDF)
```

---

## License

© Neha. All rights reserved.
