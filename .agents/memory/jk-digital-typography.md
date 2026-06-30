---
name: JK Digital typography system
description: SaaS-style Inter-only type scale, spacing rules, and accent word constraint for JK Digital site
---

Font: Inter only (weights 300–900). Poppins fully removed from layout.tsx.

Scale (all via inline styles or globals.css classes — Tailwind v4 utilities unreliable):
- H1: clamp(40px, 5.5vw, 60px), weight 700, letter-spacing -0.04em, line-height 1.05 → .t-h1
- H2: clamp(32px, 4vw, 48px), weight 700, letter-spacing -0.03em, line-height 1.1 → .t-h2
- H3: 22px, weight 600, letter-spacing -0.02em, line-height 1.3 → .t-h3
- Body: 17px, weight 400, line-height 1.7, color rgba(230,220,255,0.55) → .t-body
- Small: 14px, weight 500, line-height 1.6, color rgba(230,220,255,0.45) → .t-small
- Label: 11px, weight 600, uppercase, letter-spacing 0.1em → .t-label

Accent rule: EXACTLY ONE gradient word per heading using .accent / .accent-cyan / .accent-warm classes.
- .accent → purple (#a78bfa → #818cf8)
- .accent-cyan → cyan (#67e8f9 → #38bdf8)
- .accent-warm → warm (#fde68a → #fb923c)

Spacing: 8px base grid. Section padding = 128px (16×8). Card padding = 32px. Gap system: 8/16/24/32/48/64/96px.

**Why:** Tailwind v4 utility cascade fails in this Next.js + PostCSS setup; all real styling lives in globals.css or inline styles. The one-accent-word rule enforces SaaS visual hierarchy — prevents gradient overuse.

**How to apply:** Any new component must use .t-h1/.t-h2/.t-h3/.t-body/.t-small/.t-label classes for type, inline styles for layout, and limit gradient text to a single word per heading.
