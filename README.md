# Sales Hype — Website

Production landing page for Sales Hype. Built with Next.js 14, Tailwind CSS, and TypeScript. Deployed on Vercel.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Fonts:** Fraunces (display), Inter Tight (body), JetBrains Mono (mono)
- **SEO:** Full JSON-LD structured data (Organization, Service, FAQPage)
- **AI crawlers:** Explicitly allowed in robots.txt (GPTBot, ClaudeBot, PerplexityBot, etc.)

## Local development

```bash
npm install
npm run dev
```

Site runs at http://localhost:3000

## Deploy to Vercel

1. Push this repository to GitHub
2. Import the repository at https://vercel.com/new
3. Vercel auto-detects Next.js — no configuration needed
4. Deployment completes in ~60 seconds

### Custom domain

Once deployed, add `saleshype.co.uk` in Vercel project settings under "Domains". Vercel will provide DNS records to add at your domain registrar.

## Updating the site

Any push to the `main` branch auto-deploys to production. Pull requests get preview URLs automatically.

## File structure

```
app/
  layout.tsx       # Root layout, SEO metadata, JSON-LD schemas
  page.tsx         # Main landing page
  globals.css      # Global styles, font imports, animations
public/
  favicon.svg      # Browser favicon
  robots.txt       # Crawler permissions (incl. AI crawlers)
  sitemap.xml      # Search engine sitemap
```
