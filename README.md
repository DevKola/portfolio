# Portfolio

Personal portfolio for Kolade Ayinde — full-stack developer. Built with React 19, TypeScript, Vite and Tailwind CSS v4.

## Pages

| Route | Description |
| --- | --- |
| `/` | Hero, About Me, contact call-to-action |
| `/portfolio` | Alternating project index |
| `/portfolio/:slug` | Project detail with background, previews and prev/next navigation |
| `/contact` | Contact form (opens the visitor's mail client) |
| `*` | Not-found page |

## Design system

Tokens live in `src/index.css` and are exposed as Tailwind utilities:

- **Colour** — `accent` `#5FB4A2`, `navy` `#203A4C`, `ink` `#33323D`, `danger` `#F43030`
- **Semantic** — `surface`, `surface-raised`, `content`, `content-muted`, `line`, `field` (these resolve per theme)
- **Type** — `text-h1` (50/50), `text-h2` (40/42), `text-h3` (32/36), `text-body1` (16/30), `text-body2` (15/30)
- **Fonts** — Ibarra Real Nova (headings), Public Sans (body)

Light and dark themes are class-based (`dark` on `<html>`), persisted to `localStorage`, and default to the OS preference. The pre-paint script in `index.html` prevents a theme flash.

Reusable primitives: `Button` / `ButtonLink`, `TextField`, `TextArea`, `Container`.

## Editing content

All copy and projects are in `src/data/portfolio.ts`.

- **Project links** — add `links.live` and/or `links.source` to a project; the detail page shows "Visit Website" once a link exists.
- **Social links** — update `profile.socials` (currently placeholder profile URLs).
- **Contact email** — update `profile.email`. The form has no backend; it opens the visitor's mail client with the message pre-filled.
- **Portrait** — the About section renders a monogram placeholder (`src/components/Portrait.tsx`). Swap in a photo when available.
- **Project visuals** — cards and hero images are CSS mockups in `src/components/ProjectMockup.tsx`; replace with screenshots when you have them.

## Scripts

```bash
npm run dev      # start the dev server
npm run build    # type-check and build for production
npm run lint     # ESLint
npm run preview  # preview the production build
```

## Deploying

The build output in `dist/` is static. Because routing uses the History API, configure the host to rewrite unknown paths to `index.html` (Netlify `_redirects`, Vercel rewrites, or GitHub Pages 404 fallback).
