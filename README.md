# arkived-web

The landing page for [**Arkived**](https://github.com/Horizon-Tech-doo/arkived) — a fast,
Rust-native client for Microsoft Azure Storage.

Built with Vite + React + TypeScript + Tailwind CSS v4, reusing the
[Horizon Tech](https://horizon-tech.io) design system (OKLCH theme, fluid type scale,
`motion` reveal animations).

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Deploy

`dist/` is a static bundle — deploy to Cloudflare Pages, Netlify, or any static host.
For Cloudflare Pages: build command `npm run build`, output directory `dist`.

Intended domain: **arkived.app**.

## Content

Single marketing page (`src/App.tsx`) with sections: hero + terminal showcase, features,
surfaces (Desktop / CLI / MCP), download (per-platform installers + `cargo install`), FAQ,
and CTA. Download links point at the Arkived GitHub Releases.
