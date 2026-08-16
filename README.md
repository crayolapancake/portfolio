# Portfolio

Personal portfolio site — frontend/mobile dev work showcase, built to support contract work. See [docs/PRD.md](./docs/PRD.md) for scope and requirements.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router) + React 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com) 4 for styling
- Deployed on [Vercel](https://vercel.com) — push-to-deploy, no separate CI/CD pipeline
- No backend/API — contact form opens a pre-filled `mailto:` link (see PRD)
- [Vitest](https://vitest.dev) + [React Testing Library](https://testing-library.com/react) for tests

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
| `npm test` | Run the test suite once, with coverage enforced |
| `npm run test:watch` | Run tests in watch mode (no coverage) |

## Project structure

```
src/
  app/
    layout.tsx        # root layout, fonts, metadata
    page.tsx           # homepage — all sections live here for the MVP
    page.test.tsx        # colocated tests, one per component/page
    globals.css           # Tailwind entrypoint + global styles
  components/              # Header, ContactForm, Experience, SectionHeading
  lib/                        # shared style/utility constants
public/                        # static assets (images, icons)
docs/
  PRD.md                         # requirements
  GUIDELINES.md                    # coding conventions
vitest.config.mts                   # test runner + coverage threshold config
```

## Testing

Vitest + React Testing Library, with a 95% coverage threshold (lines/branches/functions/statements) enforced in [vitest.config.mts](./vitest.config.mts). `npm test` fails the run if coverage drops below that. `src/app/layout.tsx` is excluded — it's just Next.js font/metadata wiring with no logic to test.

## Deployment

Connect the repo on [Vercel](https://vercel.com/new) — every push to `main` deploys automatically, no config needed.

## Notes

- `AGENTS.md` / `CLAUDE.md` are maintained automatically by `next dev` and point AI coding assistants at the bundled Next.js docs (this project is on Next 16, which has breaking changes vs. older training data). Safe to ignore, keep committed.
