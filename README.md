# Lewis Cloud Innovations — Website

Production-grade landing site for Lewis Cloud Innovations, built on:

- **Astro 5** — content-focused framework, ships zero JavaScript by default
- **TypeScript 5.7** (strict mode)
- **Tailwind CSS 4** — latest engine, CSS-first config
- **Self-hosted Geist fonts** — no third-party tracking
- **Cloudflare Pages** — global edge CDN with native WAF
- **Biome** — replaces ESLint + Prettier (25× faster)

## Prerequisites

- Node.js 22 LTS or newer
- pnpm 9+ (recommended) or npm 10+
- Git

## Getting started

```bash
# Install dependencies
pnpm install
# or: npm install

# Start the dev server (http://localhost:4321)
pnpm dev

# Type-check + production build
pnpm build

# Preview the production build locally
pnpm preview
```

## Project structure

```
.
├── public/                      # Static assets, served as-is
│   ├── _headers                 # Cloudflare Pages security headers
│   ├── _redirects               # www → apex 301 redirect
│   ├── CNAME                    # Custom domain marker
│   ├── robots.txt
│   ├── LewisCloud-favicon.png
│   ├── LewisCloud-logo.svg
│   ├── LewisCloud-og.png
│   ├── LewisCloud-privacy.html
│   ├── LewisCloud-terms.html
│   ├── fonts/                   # Self-hosted Geist fonts
│   └── .well-known/
│       └── security.txt         # RFC 9116 vulnerability disclosure
├── src/
│   ├── components/              # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── Industries.astro
│   │   ├── Compliance.astro
│   │   ├── Approach.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro     # HTML shell, meta, OG, JSON-LD
│   ├── pages/
│   │   └── index.astro          # The landing page
│   └── styles/
│       └── global.css           # Tailwind + design tokens
├── astro.config.mjs
├── biome.json
├── package.json
└── tsconfig.json
```

## Editing the site

### Update copy

- **Hero** — `src/components/Hero.astro`
- **Services** — `src/components/Services.astro` (six service cards)
- **Industries** — `src/components/Industries.astro`
- **Compliance frameworks** — `src/components/Compliance.astro`
- **Approach pillars** — `src/components/Approach.astro`
- **Contact** — `src/components/Contact.astro` (email + phone constants at top)
- **Footer** — `src/components/Footer.astro`

### Update brand tokens

Edit `src/styles/global.css` — see the `@theme` block at the top for colors,
fonts, and animation tokens.

### Add a new page

1. Create `src/pages/your-page.astro`
2. Use the `BaseLayout`:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---

<BaseLayout title="Your Page" description="...">
  <main id="main">
    <!-- content -->
  </main>
</BaseLayout>
```

It auto-publishes at `/your-page` on next deploy.

## Deployment

This site is deployed via **Cloudflare Pages** with Git integration:

- **Build command:** `pnpm build`
- **Build output directory:** `dist`
- **Node version:** 22
- **Production branch:** `main`

Every push to `main` triggers a production deploy. Pull requests get
preview deployments at unique URLs.

## Security posture

- HSTS preload, CSP, COOP, COEP, Permissions-Policy via `_headers`
- DNSSEC on the apex domain (configure at Cloudflare DNS settings)
- SPF, DKIM, DMARC for email anti-spoofing (configure at Cloudflare DNS)
- TLS 1.3, modern cipher suites (Cloudflare default)
- No third-party JavaScript, no Google Fonts, no tracking
- `security.txt` published per RFC 9116
- Form-action restricted to `self` (no third-party form handlers)

## Performance targets

- Lighthouse: 100 / 100 / 100 / 100 (Performance / A11y / Best Practices / SEO)
- LCP < 1.0s on 4G
- CLS = 0
- Total page weight (initial load) < 100 KB gzipped

## Required font setup

The Geist fonts are self-hosted for performance and privacy. Download
the latest WOFF2 files from https://vercel.com/font and place in
`public/fonts/`:

- `Geist-Regular.woff2`
- `Geist-Medium.woff2`
- `Geist-SemiBold.woff2`
- `Geist-Bold.woff2`
- `GeistMono-Regular.woff2`

The site falls back to system fonts if these are missing, but performance
and aesthetics suffer.

## Contact

Built by Ayodele Lewis · ayodelelewis@outlook.com

