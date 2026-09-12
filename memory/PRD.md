# PRD — Gaussians GRC Consulting Website

## Original Problem Statement
Build a GRC consulting company website. Company Name: Gaussians.

User direction: multi-page site (Home, Services, About, Insights/Blog, Contact); sections for Services, About, Why Us, Testimonials, Contact form; contact form STATIC (no backend); design expert decides premium corporate look. Full content architecture supplied (hero + trust metrics, 6-tile capabilities bento, Gaussians Advantage matrix, frameworks marquee, 4 delivery models, leadership profiles, Gaussians Forward lab, testimonials, Gurgaon HQ contact hub). Award-worthy execution: kinetic masked line-by-line hero reveal, framer-motion scroll reveals, lenis smooth scrolling, editorial marquee, subtle parallax.

## Architecture
- Frontend: React 19 + react-router-dom 7 + Tailwind + framer-motion + lenis (smooth scroll) + sonner toasts. Dark obsidian glassmorphism theme (#090D16 base, emerald #10B981 + cyber cyan #06B6D4 accents). Fonts: Outfit (display), Newsreader (editorial serif), DM Sans (body), JetBrains Mono.
- Backend: FastAPI template kept minimal (health endpoint only) — no backend features required (static form per user choice).
- Content centralized in /app/frontend/src/data/content.js.

## User Personas
- CISO / VP Engineering at a scale-up evaluating audit readiness partners
- Compliance lead comparing advisory vs execution-led firms
- Founder researching AI governance (ISO 42001) requirements

## Core Requirements (static)
1. Home: kinetic hero + status pill + animated trust metrics, frameworks marquee, 6-tile capabilities bento, advantage pillars + comparison matrix, testimonials, CTA
2. Services: filterable service cards with deliverables, 4 delivery model tabs, framework matrix
3. About: 4-chapter manifesto, leadership cards (Megha Bakshi, Mallikarjuna Reddy), Gaussians Forward quadrants
4. Insights: featured brief + filterable article feed + newsletter (static)
5. Contact: static consultation form (framework pills, engagement model, success state + toast), HQ hub card, <24hr incident SLA banner

## Implemented (2026-07-12)
- All 5 pages built and verified end-to-end (screenshots + interactions)
- Lenis momentum scrolling, masked line-by-line hero reveal, animated counters, node-network SVG hero graphic with parallax
- data-testid on all interactive elements
- Static contact form + newsletter with sonner confirmation toasts
- Brand alignment with official logos (2026-07-12): real logo assets processed (transparent PNGs: /public/logo-color.png purple-G + white wordmark, /public/logo-white.png), navbar + footer use real logo, entire accent system recolored from emerald to logo purple #7570D4 (tailwind `brand` palette), brand favicon (purple G) + Gaussians page title/meta
- Light theme redesign (2026-07-12, per user "clean and white like Apple and BMW, very classy"): full visual overhaul to white/light aesthetic — white canvases, hairline slate-200 borders, soft diffused shadows, slate-900 pill CTAs, brand purple as single accent, dark slate-900 CTA panel + footer for contrast, ambient hero background video (Pexels HD mp4) with slow Ken Burns image fallback, framed architecture imagery with parallax (hero, About image band), new leadership portraits; all content/sections/pages preserved

## Backlog
- P1: Wire contact form to backend/email (Resend) when user wants real submissions
- P1: Insights article detail pages (/insights/:slug)
- P2: Case studies page, real leadership photos/LinkedIn URLs, calendar booking widget (Calendly/Cal.com)
- P2: SEO meta/OpenGraph per page, sitemap
