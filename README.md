# cs-amala

Website for **CS Multispeciality Hospital & Amala Fertility Centre**, Karaikudi.
Concept by OFFORA Tech.

React + Vite, GSAP ScrollTrigger and Lenis for scroll motion, English and Tamil.

## Run locally

```bash
npm install
npm run dev
```

Build and preview the production version:

```bash
npm run build
npm run preview
```

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`). In the repository settings, set
**Settings → Pages → Build and deployment → Source** to **GitHub Actions** once.

The site is served from `https://offoratech.github.io/cs-amala/`. The workflow sets
`VITE_BASE=/cs-amala/`; `vite.config.js` prefixes image paths with it and writes a
`404.html` fallback so deep links such as `/cs-amala/fertility` load.

## Content to confirm before launch

- Out-patient hours (the site says "call to confirm").
- Expansions of the doctors' qualifications (FIAGES, FALS, FAIS, FRM, DRM).
- Which consultant specialists cover each department.
- The patient guides, reviewed by the doctors.
- Permission for the 360° photographs taken from the Google Maps and JustDial listings.
