---
name: JK Digital design system
description: Complete design system for JK Digital Solutions — light theme, colors, layout patterns, component conventions
---

Font: Inter only (via next/font/google, className applied on body in layout.tsx).
Tailwind v4 utility cascade is unreliable — ALL real styling lives in globals.css classes or inline styles.

## Colors (light theme)
- Background: #FFFFFF (white), #F8FAFC (alternating sections)
- Primary: #2563EB (Royal Blue)
- Accent: #4F46E5 (Indigo), #0891B2 / #06B6D4 (Cyan)
- Text: #0F172A (headings), #475569 / #64748B (body/muted), #94A3B8 (light)
- Border: #E2E8F0
- Footer bg: #0F172A (dark navy for contrast)

## Type scale (globals.css classes)
- .t-h1: clamp(38px, 5.5vw, 62px), weight 800, tracking -0.04em
- .t-h2: clamp(30px, 4vw, 48px), weight 700, tracking -0.03em
- .t-h3: 20px, weight 700
- .t-body: 17px, #64748B
- .t-small: 14px, #94A3B8
- .t-label: 12px, uppercase, #2563EB (eyebrow)
- .accent: blue→indigo gradient text
- .accent-cyan: sky→cyan gradient text

## Layout
- .wrap: max 1160px, 24/40px padding
- .wrap-sm: max 740px
- Section padding: 112px vertical. Alternates sec-white / sec-gray.

## Component conventions
- Cards: bg #fff, 1px #E2E8F0 border, 20px radius, hover translateY(-4px) + deeper shadow
- Buttons: .btn-primary (blue #2563EB), .btn-ghost (white+border), .btn-wa (green #16A34A), .btn-lg
- Inputs: .inp — light border, blue focus ring (rgba(37,99,235,0.08))
- Pills: #EFF6FF bg, #BFDBFE border, #2563EB text, 100px radius
- Floating: .wa-float (green, bottom-right 24px), .call-float (blue, 48px, 92px from bottom)

Accent rule: ONE gradient word per heading using .accent / .accent-cyan.

**Why:** Complete redesign from dark purple gaming theme to premium light corporate look (Apple/Stripe quality). All dark colors were replaced.
