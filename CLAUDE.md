# Working on this site

Read `BRIEF.md` first: it holds the positioning, proof points, design system and rules. `README.md` covers setup, feeds and deploys.

## Rules

- No em dashes in any copy.
- Never show client names in stories or anywhere else.
- Never invent metrics, clients, dates or quotes. Use only the proof points in `BRIEF.md`; ask Rodrigo for anything new.
- Never write the full email address into page HTML. It is split in `src/site.config.ts` and assembled in the browser on the Contact page.
- Keep all links and handles in `src/site.config.ts`.
- Respect `prefers-reduced-motion` for every new animation.

## Workflow

- Run `npm run dev` and check changes in the browser preview before committing.
- Check the mobile layout (around 390px wide) as well as desktop.
- Run `npm run build` before pushing; it must pass.
- Commit in small steps with clear messages, then push to `main`. Vercel deploys automatically.
- Images Rodrigo provides go in `public/images/`, using the names listed in `README.md` or new descriptive names.
