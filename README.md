# rodrigolpborges.com

Personal site for Rodrigo Borges, account director for the AI era. Built with [Astro](https://astro.build), hosted on Vercel.

## Pages

| Page | File |
| --- | --- |
| Home | `src/pages/index.astro` |
| Work | `src/pages/work.astro` + stories in `src/stories/` |
| About | `src/pages/about.astro` |
| Now | `src/pages/now.astro` |
| Contact | `src/pages/contact.astro` |

## Everyday edits

- **Links, email, LinkedIn, CV, Goodreads ID:** `src/site.config.ts`. An empty value hides whatever depends on it.
- **New industry story:** copy `src/stories/energy.md`, rename it, edit the fields. It appears on Work automatically. `order` sets its position; the first three show on Home.
- **Now page:** edit the date and the three lists at the top of `src/pages/now.astro`.
- **Images:** replace the placeholders in `public/images/` with files of the same name:
  - `portrait.jpg` (Home hero, 4:5, at least 1200 x 1500)
  - `about-early.jpg` (About, 4:5)
  - `story-energy.jpg`, `story-hospitality.jpg`, `story-tech.jpg` (16:10, at least 2400 px wide)
  - `og.jpg` (link preview, 1200 x 630)

## Feeds

At build time the site reads:

- **AI Management** (`aimgmt.substack.com/feed`): the 3 newest posts show on Home.
- **Goodreads** (`currently-reading` shelf): set `goodreadsUserId` in `src/site.config.ts`. Your profile must be public.

If a feed is empty or unreachable, its box on Home stays hidden.

## Motion

- The Home brief fills in row by row on load.
- Highlighted lines sweep in as they scroll into view, images drift slightly (CSS scroll-driven animations).
- Proof numbers count up once.
- All motion switches off for visitors who choose "reduce motion".

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy (Vercel)

1. In Vercel, **Add New Project**, import this GitHub repo. Framework preset: Astro. No other settings needed.
2. **Domains:** add `rodrigolpborges.com` and follow Vercel's DNS instructions at GoDaddy (an A record for the root, a CNAME for `www`). Leave the `chronicles` record as it is.
3. **Daily rebuild:** in Vercel, Project Settings > Git > Deploy Hooks, create a hook for `main`. In GitHub, Settings > Secrets and variables > Actions, add it as `VERCEL_DEPLOY_HOOK`. The workflow in `.github/workflows/daily-rebuild.yml` then rebuilds every morning.
