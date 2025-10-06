# Ochre UX Engineer — Cart UI

Started this on **Monday 6th October 2025 at 10:31 AM** and spent roughly **3 hours** on the front-end build.  
The goal was to recreate the provided Figma cart screen using **Next.js**, **TypeScript**, and **Tailwind CSS**.  

Didn’t try to overbuild it — just wanted something clean, readable, and close to the design.

---

### Links
- **GitHub:** [github.com/Kayode-Olumo/ochre-fe-cart-ui-kayode-olumo](https://github.com/Kayode-Olumo/ochre-fe-cart-ui-kayode-olumo)  
- **Live:** [ochre-fe-cart-ui-kayode-olumo.vercel.app/cart](https://ochre-fe-cart-ui-kayode-olumo.vercel.app/cart)

---

### Overview

The app renders a cart UI where you can remove items and see totals update in real time.  
When everything’s removed, you get an empty state with a short message and CTA.  

It’s responsive (stacked on mobile, two-column layout on desktop) and follows the spacing, typography, and structure from the Figma file quite closely.

---

### Setup

Using **pnpm** for package management.  

```bash
git clone https://github.com/Kayode-Olumo/ochre-fe-cart-ui-kayode-olumo.git
cd ochre-fe-cart-ui-kayode-olumo
pnpm install
pnpm dev
```

Then visit:  
```
http://localhost:3000/cart
```

---

### Structure

```
src/
  app/
    cart/page.tsx
    globals.css
    layout.tsx
  components/
    cart/
      CartItem.tsx
      CartList.tsx
      CartSummary.tsx
      EmptyCart.tsx
      Price.tsx
    common/
      PriceDisplay.tsx
      ThemeProvider.tsx
    ui/
      button.tsx
  data/cart.json
  lib/
    cart.ts
    currency.ts
    types.ts
    utils.ts
```

Core logic lives under `lib/` — small, pure helpers that don’t depend on React state.  

---

### Notes

- Matched the Figma layout as closely as possible without pixel-pushing.  
- Used local state (`useState`) for simplicity since data is static.  
- Converted prices to cents to avoid float rounding errors.  
- Added `aria-label` and alt text for accessibility.  
- Kept classnames readable and didn’t overuse custom utilities.  
- Removed unused shadcn/ui files to keep it lean.  

---

### Testing Approach

Didn’t have time to add tests in this round, but built the app so tests could be dropped in easily.  
Everything’s modular and pure where possible.  

If I had another hour or two:
- Add **unit tests** for cart helpers (subtotal, remove flow).  
- Write **React Testing Library** tests for the cart page.  
- Quick **a11y run** with Axe or Playwright.

---

### Production Thoughts

If this were going live:
- Hook up API or localStorage for persistence.  
- Add undo/redo feedback for remove actions.  
- Introduce server actions for more predictable updates.  
- Run Lighthouse + a11y checks.  
- Add Sentry or similar for tracking runtime issues.  

---

### If I Had More Time

- Write tests properly.  
- Add transitions or small motion details for polish.  
- Introduce theme tokens or a shared component library.  
- Add analytics hooks for UX feedback.  
- Implement skeleton states for loading.  

---

### AI Usage

Used AI sparingly, mostly to **speed up styling and routine setup work** — not to build features for me.  

It helped with:
- Generating quick Tailwind class suggestions to match Figma spacing faster.  
- Setting up the base project and config files (Next.js, Tailwind).  
- Catching minor syntax or import errors.  
- Refactoring small repetitive patterns (e.g. prop naming consistency).  

The structure, logic, accessibility decisions, and general approach were all mine — I just used AI as a quick helper to move faster where it made sense.  

It felt closer to pair programming than code generation.  

---

### Final Notes

Didn’t overthink it. Tried to focus on something that feels real — clear, maintainable, and ready for tests or data integration later.  
All in all, happy with how it turned out for the time spent.

---

**Started:** Monday 6th October 2025 — 10:31 AM  
**Front-end time spent:** ~3 hours  
**Tech:** Next.js 14, TypeScript, Tailwind CSS  
**Live:** [ochre-fe-cart-ui-kayode-olumo.vercel.app/cart](https://ochre-fe-cart-ui-kayode-olumo.vercel.app/cart)
