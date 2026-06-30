---
name: JK Digital design system
description: Complete design system for JK Digital Solutions — light theme, colors, type scale, layout patterns, component conventions
---

## Theme
Premium light theme (#FCFCFD hero, #FFFFFF / #F8FAFC section alternation).

## Colors
- Background: #FCFCFD (hero), #FFFFFF / #F8FAFC (sections alternating)
- Primary text: #111827 (dark charcoal — NOT #0F172A, that is stale)
- Body/muted: #6B7280, #9CA3AF
- Primary blue: #1D4ED8 (brand blue — use for ONE accent word per heading)
- Interactive blue: #2563EB (buttons, links)
- Accent: indigo #4F46E5, cyan #0891B2
- Border: #E2E8F0 / #E9EEF4
- Footer bg: #0F172A (dark navy — intentional, kept)

## Typography (globals.css classes)
- .t-h1: clamp(38px,5.5vw,62px), weight 800, tracking -0.04em, color #111827
- .t-h2: clamp(30px,4vw,48px), weight 800, tracking -0.04em, color #111827
- .t-h3: 20px, weight 700, tracking -0.025em, color #111827
- .t-body: 17px, weight 400, lh 1.75, color #6B7280
- .t-small: 14px, weight 400, lh 1.6, color #9CA3AF
- .t-label: 12px, weight 700, uppercase, tracking 0.1em, color #1D4ED8

## Accent rule (critical)
- `.accent` = solid `color: #1D4ED8` — NO gradient, just brand blue
- `.accent-cyan` = solid `color: #0891B2` — NO gradient
- ONE accent word per heading maximum
- Exception: CTA banner (dark blue bg) may use inline golden gradient for "grow" — that's decorative, not a heading

## Tailwind note
Tailwind v4 utility cascade unreliable in this setup — ALL styling via globals.css classes or inline styles only.

## Layout
- .wrap: max 1160px, 24/40px padding
- .wrap-sm: max 740px
- Section padding: 112px vertical

## Component conventions
- Cards: bg #fff, 1px #E2E8F0 border, 20px radius, hover translateY(-4px)
- Buttons: .btn-primary (#2563EB), .btn-ghost (#111827 text), .btn-wa (#16A34A), .btn-lg
- Inputs: .inp, color #111827, blue focus ring
- Pills/badges: #EFF6FF bg, #BFDBFE border, #1D4ED8 text
- Floating CTA: .wa-float (green, bottom-right 24px), .call-float (blue, 92px up)

## Navbar
- Fixed, frosted glass rgba(252,252,253,0.92), blur 18px
- Height: 68px
- Logo: 30px icon, 14px brand text "JK Digital"
- Links: Home | Services | Portfolio | Pricing | About | Contact
- Mobile breakpoint: 900px — shows logo + Free Audit + hamburger only
- Hamburger: bordered (1px #E2E8F0), animated open/close with max-height slide

**Why:** Full redesign from dark purple gaming theme. Typography unified to match logo — Inter 800/700/400, #111827 primary, single solid-blue accent word per heading.
