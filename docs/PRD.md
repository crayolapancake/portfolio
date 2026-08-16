# PRD: Personal Portfolio Site

## Overview
Single-page portfolio site to showcases work projects, skills, and experience. MVP scope — no API, no CI/CD pipeline, additional pages may follow later.

## Goals
- Showcase project work with enough detail to demonstrate skill
- Fast to ship, low maintenance

## Non-Goals (MVP)
- No backend/API
- No CI/CD pipeline (Vercel git-deploy is sufficient)
- No CMS — content is hardcoded/static for now

## Tech Stack
- Next.js (App Router) + React + TypeScript
- Tailwind CSS
- Vitest + React Testing Library, 95% coverage threshold enforced
- Deployed on Vercel

## Requirements

| ID | Requirement | Priority | Notes |
|----|-------------|----------|-------|
| R1 | Contact form | Must | No backend — validated form builds a pre-filled `mailto:` link. Known limitation: relies on the visitor having a mail client configured; a form service (e.g. Web3Forms) is a possible upgrade if this proves unreliable |
| R2 | Must display correctly on mobile screens as well as various browsers | Must | Responsive layout; cross-browser check (Chrome, Safari, Firefox, mobile Safari/Chrome) |
| R3 | Must pass accessibility checks | Must | WCAG 2.1 AA conformance |

## Open Questions
- Target browser/device list for R2 testing?
