# BoldRoutes | Luxury Real Estate Agency

[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)

**BoldRoutes** is a premium luxury real estate agency website built with Astro, Vue 3, Tailwind CSS, and Static CMS.

## Features

- Luxury property listings and featured homes
- Buy, sell, rent, and investment services
- Market insights blog and neighborhood guides
- Contact forms with topic routing (Mailgun, Postmark, Slack)
- Newsletter integration (Mailchimp)
- Fully responsive, accessible, and SEO-optimized
- Light and dark mode support

## Quick Start

### 1. Environment Setup

Rename `env.txt` to `.env` and configure your settings:

```
BLOG_SLUG=news
WEBSITE_LANGUAGE=en
CURRENCY=USD
NODE_VERSION=20
NEWSLETTER_PROVIDER=mailchimp

MAILCHIMP_API_KEY=XXX
MAILCHIMP_SERVER_PREFIX=us21
MAILCHIMP_LIST_ID=XXX

SLACK_CHANNEL_ID=XXX
SLACK_TOKEN=XXX

FROM_EMAIL_ADDRESS=your-email@example.com
TO_EMAIL_ADDRESS=your-email@example.com

MAILGUN_API_KEY=XXX
MAILGUN_DOMAIN=your-domain.com
MAILGUN_API_URL=https://api.eu.mailgun.net

POSTMARK_SERVER_TOKEN=XXX
```

### 2. Configure Static CMS

Navigate to `src/pages/admin.astro` and provide your Git repository details. See [Static CMS backends](https://www.staticcms.org/docs/backends-overview).

### 3. Set Site URL

Update `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://boldroutes.com',
  output: "hybrid",
  adapter: vercel(), // or netlify()
});
```

### 4. Install & Run

```bash
npm install
npm run dev
```

For local CMS backend:

```bash
npm run cms-proxy-server
```

Admin panel: http://localhost:4321/admin/

## Commands

| Command                    | Action                                          |
| -------------------------- | ----------------------------------------------- |
| `npm install`              | Installs dependencies                           |
| `npm run dev`              | Starts local dev server at `localhost:4321`     |
| `npm run cms-proxy-server` | Starts Static CMS proxy for local backend       |
| `npm run build`            | Build production site to `./dist/`              |
| `npm run preview`          | Preview build locally                           |

## Tech Stack

Astro, MDX, Vue 3, Tailwind CSS, Static CMS

## SEO Keywords

Luxury Real Estate, Property Listings, Real Estate Agency, Homes for Sale, Luxury Villas, Modern Apartments, Commercial Properties, Investment Properties, BoldRoutes Real Estate
