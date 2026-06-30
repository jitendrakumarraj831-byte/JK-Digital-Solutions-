---
name: Tailwind v4 cascade bug
description: Inline styles and unlayered CSS classes (.wrap) are required for reliable layout in this Next.js 16 + Tailwind v4 project — Tailwind utility classes don't apply reliably.
---

## Rule
In this project (Next.js 16 + Turbopack + Tailwind v4), Tailwind utility classes for layout (`px-6`, `mx-auto`, `max-w-6xl`) do NOT apply reliably in the Replit dev environment, even after moving the CSS reset into `@layer base`.

## Fix Applied
- Added `.wrap` and `.wrap-sm` CSS classes in `globals.css` as **unlayered** CSS (highest cascade priority):
  - `.wrap`: max-width 1152px, centered, padding 24/40/64px responsive
  - `.wrap-sm`: max-width 768px, centered, padding 24/40px
- All sections use `className="wrap"` for their container div
- All other layout/spacing uses `style={{ ... }}` inline React styles
- Only decorative Tailwind classes (hover effects, animations) are used via className

**Why:** Tailwind v4 `@layer utilities` styles appear not to generate or apply in this Replit dev environment with Turbopack. Unlayered CSS and inline styles bypass this entirely.

**How to apply:** For any new component, use `<div className="wrap">` for the section container and `style={{ ... }}` for all spacing, colors, typography. Avoid relying on Tailwind layout utilities like `px-*`, `mx-*`, `max-w-*`.

## Additional Rule: "use client" Required for Hover Handlers
In Next.js 16 App Router, any component using `onMouseEnter`/`onMouseLeave` inline handlers **must** have `"use client"` at the top. Server components cannot pass event handler functions as props. This applies to all components in `src/components/*.tsx` that use hover effects via inline JS handlers.

**Fix:** Add `"use client";` as first line to any component file that uses `onMouseEnter`, `onMouseLeave`, `onClick`, `onChange`, `useState`, or `useEffect`.
