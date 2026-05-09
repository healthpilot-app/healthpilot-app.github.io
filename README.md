# healthpilot-app.github.io

Marketing landing page for **HealthPilot — AI Health Coach**.

Built with Vite + React + TypeScript, Tailwind CSS, and Framer Motion. Deployed to GitHub Pages via GitHub Actions on every push to `main`.

## Local development

```bash
npm install
npm run dev      # vite dev server at http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages. Make sure Pages is set to **GitHub Actions** under repo Settings → Pages (no `gh-pages` branch needed).

## Project structure

```
src/
  App.tsx                 # Top-level layout
  components/
    Header.tsx            # Sticky nav with brand mark
    Hero.tsx              # Animated hero with phone stack
    BrandMark.tsx         # Animated SVG logo (Framer Motion)
    PhoneFrame.tsx        # Reusable iPhone mock
    TrustStrip.tsx        # Trust signals row
    Features.tsx          # 6-card feature grid + SectionHeader
    ScreenShowcase.tsx    # Tabbed screen tour
    HowItWorks.tsx        # 4-step setup
    Privacy.tsx           # Privacy claims block
    CTA.tsx               # Final call-to-action
    Footer.tsx            # Footer with disclaimers
  styles/globals.css      # Tailwind + global utilities

public/
  privacy.html            # Standalone Privacy Policy (preserved at /privacy.html)
  legacy.html             # Old landing for reference (/legacy.html)
  brand/                  # Brand mark, icon, logos
  screens/                # In-app screenshots
```

## Brand tokens

- Primary purple gradient: `#6D28D9 → #8B5CF6 → #A78BFA`
- Surface: `#08060F` (ink-950) with violet bloom
- Type: Inter (Google Fonts)

See `tailwind.config.ts` for the full token set.
