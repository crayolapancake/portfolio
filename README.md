# Portfolio

Personal portfolio site — frontend/mobile dev work showcase, built to support contract work. See [PRD.md](./PRD.md) for scope and requirements.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) + React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com) 4 for styling
- Deployed on [Vercel](https://vercel.com) — push-to-deploy, no separate CI/CD pipeline
- No backend/API — contact form uses `mailto:` or a static form service (see PRD)

## Getting started

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the page auto-updates as you edit files.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
src/
  app/
    layout.tsx    # root layout, fonts, metadata
    page.tsx       # homepage — all sections live here for the MVP
    globals.css     # Tailwind entrypoint + global styles
public/              # static assets (images, icons)
PRD.md               # requirements
```

## Deployment

Connect the repo on [Vercel](https://vercel.com/new) — every push to `main` deploys automatically, no config needed.

## Notes

- `AGENTS.md` / `CLAUDE.md` are maintained automatically by `next dev` and point AI coding assistants at the bundled Next.js docs (this project is on Next 16, which has breaking changes vs. older training data). Safe to ignore, keep committed.
