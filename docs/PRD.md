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
- Deployed on Vercel

## Requirements

| ID | Requirement | Priority | Notes |
|----|-------------|----------|-------|
| R1 | Contact form | Must | No backend — use `mailto:` link or static form service (e.g. Formspree/Web3Forms) |
| R2 | Must display correctly on mobile screens as well as various browsers | Must | Responsive layout; cross-browser check (Chrome, Safari, Firefox, mobile Safari/Chrome) |
| R3 | Must pass accessibility checks | Must | WCAG 2.1 AA conformance |

## Open Questions
- Which form service (if any) for R1?
- Target browser/device list for R2 testing?
