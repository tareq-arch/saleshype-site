[DEPLOYMENT_GUIDE.md](https://github.com/user-attachments/files/27718511/DEPLOYMENT_GUIDE.md)
# Sales Hype — Deployment Guide

Everything you need to take the site from zip file to live on saleshype.co.uk.
Total time: about 20 minutes.

---

## What you have

A complete, production-ready Next.js website in a zip file:
`saleshype-site.zip`

Inside it:
- The full landing page with all sections (hero, proof, problem, pricing, etc.)
- Real Caviar de Beluga outbound data on the proof section
- Your portfolio of 4 businesses
- Founder note attributed to you
- HubSpot Solutions Partner positioning throughout
- £1,800/month pricing stated openly
- Calendly CTA linked to your real booking URL
- 7-question FAQ
- Full SEO setup (meta tags, structured data, sitemap)
- AI crawler permissions (GPTBot, ClaudeBot, PerplexityBot, etc.)

---

## Step 1 — Unzip the project

1. Download `saleshype-site.zip`
2. Double-click to unzip it
3. You should now have a folder called `saleshype-site`

Keep this folder somewhere you can find it (Desktop is fine).

---

## Step 2 — Create the GitHub repository

You said you already have a GitHub account. Good.

1. Go to **https://github.com/new**
2. Repository name: `saleshype-site`
3. Description: `Sales Hype landing page` (optional)
4. Choose **Public** (Vercel works with private too, but public is simpler)
5. **DO NOT** check "Add a README" or any other initialise option — leave them all unchecked
6. Click **Create repository**

You'll now see a page with instructions. **Ignore them.** We're going to use the browser upload method, which is easier.

---

## Step 3 — Upload the files to GitHub

On your new empty repository page:

1. Click the link that says **"uploading an existing file"** (it's in the middle of the page)
2. A new page opens with a big drag-and-drop area
3. Open your `saleshype-site` folder on your computer
4. **Select ALL files inside** the folder (Cmd+A on Mac, Ctrl+A on Windows) — make sure to include hidden files like `.gitignore`
5. Drag them into the GitHub upload area
6. Wait for the upload to complete (about 30 seconds)
7. Scroll down — under "Commit changes" type: `Initial commit`
8. Click **Commit changes**

Your code is now on GitHub.

### Important: include .gitignore

When you drag files in, make sure the `.gitignore` file is included. On Mac, hidden files might not be visible by default. To show them: press `Cmd + Shift + .` in Finder. The `.gitignore` file should appear and you can drag it across with the rest.

---

## Step 4 — Connect Vercel to GitHub

You said you have a Vercel account. Good.

1. Go to **https://vercel.com/new**
2. If asked, sign in with GitHub
3. You'll see a list of your GitHub repositories
4. Find `saleshype-site` and click **Import**
5. **Project Name:** `saleshype-site` (auto-filled)
6. **Framework Preset:** Next.js (auto-detected)
7. Leave everything else at defaults
8. Click **Deploy**

Wait about 60 seconds. Vercel will:
- Install dependencies
- Build the site
- Deploy it to a live URL

When done, you'll see a celebration screen with a URL like:
`https://saleshype-site-xxx.vercel.app`

**Click that URL.** Your site is live.

---

## Step 5 — Connect saleshype.co.uk

Now we point your real domain at the Vercel deployment.

### In Vercel:

1. Open your project dashboard
2. Click the **Settings** tab at the top
3. Click **Domains** in the left menu
4. In the box, type: `saleshype.co.uk`
5. Click **Add**
6. Vercel will show you DNS records you need to add

You'll likely see something like:
- Type: `A` Record, Name: `@`, Value: `76.76.21.21`
- Type: `CNAME`, Name: `www`, Value: `cname.vercel-dns.com`

Vercel also gives you a check box for "Redirect www to non-www" or similar — leave it at default for now.

### In your domain registrar (wherever you bought saleshype.co.uk):

You haven't told me where you bought the domain — once you do, I'll give you specific click-by-click instructions. But the general idea is:

1. Log into your registrar (Namecheap, GoDaddy, 123-reg, Cloudflare, etc.)
2. Find your domain's DNS settings
3. Delete any existing A or CNAME records pointing at the root domain
4. Add the records Vercel gave you
5. Save

DNS propagation takes anywhere from 5 minutes to 24 hours. Usually it's quick.

When done, **saleshype.co.uk** will load your live site.

---

## Step 6 — Verify everything works

Once live, check:

- [ ] Site loads at saleshype.co.uk
- [ ] All sections appear correctly
- [ ] Calendly link opens your booking page
- [ ] Mobile version looks right (test on your phone)
- [ ] Email link works (mailto:hello@saleshype.co.uk)

If something looks off, send me a screenshot and I'll fix it.

---

## Making changes later

Once the site is live, updating it is easy:

**Option A — Through GitHub (browser only):**
1. Go to your GitHub repository
2. Click any file → click the pencil icon → edit → commit
3. Vercel auto-deploys in 30 seconds

**Option B — Tell me what to change:**
Just tell me in a chat. I'll give you the exact new file content, you paste it into GitHub, done.

---

## What to ask me next

When you're ready, tell me:

1. **What domain registrar you used for saleshype.co.uk** — I'll give you registrar-specific DNS instructions
2. **Whether you want a hello@saleshype.co.uk email set up** — separate from the site, but quick to do
3. **Any tweaks to the copy or design** once you see it live

That's it. You're 20 minutes from a live site.
