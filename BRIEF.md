# Brief: rodrigolpborges.com

The concept behind this site. Read it before changing design, copy or structure.

## Goal

Reposition Rodrigo Borges as an **account director for Toronto ad agencies**, with an AI-for-business edge. The site has to convince an agency hiring manager in 30 seconds to book a call.

## Positioning

**An account director who brings AI into the client relationship and turns it into growth.**

Clients are asking their agencies what AI means for their business. Most account teams answer with tools. Rodrigo answers with business cases, roadmaps and results.

The framing points forward. Never draw attention to time away from agencies, and avoid "every seat at the table" or "outsider" angles.

**Brand promise:** I help brands and their agencies turn AI from a threat into a growth plan, then deliver it account by account.

**Tagline in use (Home hero):** Account leadership for the AI era.

Alternatives:
- AI changed the rules of the game. I help clients win it.
- Sharper briefs. Faster answers. Bigger accounts. AI in the room.

## Proof points (only use these; never invent numbers)

- Land-and-expand across three markets of a global utility from one first sale: two closed, with ongoing support contracts, the third in progress.
- Lead generation +30% against a +10% target; new opportunities +62% against +50%.
- Ran a 20-person agency (Doisnovemeia); led a 10-person creative team (Plá).
- Led marketing, operations and global sales at Spin Engenharia (own company), 2019 to 2026: budget, agencies, campaigns, website, content, two trade shows a year, a 7-person sales and marketing team. Prospect meetings went from zero to three or four a week.
- Co-founder and CMO of Nrolled (Toronto hospitality workforce platform); closed a 66K ACV deal with a corporation.
- Eight industries: retail, automotive, government, non-profit, financial services, tech, energy, hospitality.
- Leads with frequent, direct, caring feedback; uses MEDDICC for deal health.
- Certifications: Rotman School of Management EMBA, PMP-PMI, ACP-PMI, Professional Scrum Product Owner™ I.
- Spin Partner Platform: built in 4 weeks, directing Claude Code and Lovable; about 28,000 lines of code, 80 automated tests. A two-sided system (partner portal + control center) for Spin's partner sales.
- Directed an AI agent (Hunter.io search + Notion) to build a 128-lead partner prospect list for Spin's North American utility and cooperative push, each lead labelled by fit.
- Connected Claude to Notion via MCP to turn a public Natural Resources Canada webpage into a live database: 233 rows, $709M CAD tracked across 10 programs.
- Chronicles: 99 personal texts written on Medium 2015 to 2020, given a home on a dedicated site. Claude fetched and organized them via Notion, translated them into seven languages (English, French, Spanish, Arabic, Japanese, Hindi, Chinese), and built Kindle editions published on Amazon. Call the project "Chronicles" in site copy, not "Crônicas".
- Languages: English and Portuguese (bilingual), Spanish (intermediate), French (learning).
- First job 2005: marketing intern at a children's theatre in Brasília while studying Communication at the University of Brasília.
- Led a CAD 4,000,000 hardware and software integration project across 3 companies: sensors in 26 substation power transformers, 4 software management modules delivered.
- Structured new resale partners in India, the Philippines and Indonesia for mission-critical systems; slightly profitable in year one, grew until COVID-19.
- Led a 3-company trade show presence in São Paulo to launch a FLISR (fault location, isolation and service restoration) solution.
- A CAD 1,130,000 sale (2022) to Brazil's largest energy distribution utility: 56 smart meters for circuit breakers, with hardware integration and software development.
- A CAD 350,000 sale (2021) replacing a steel plant's SCADA system in Espírito Santo, Brazil, after 18 months of proposal revisions.
- Opened a new ad agency branch from zero; self-sustaining within 6 months, creative director of both branches a year later.
- Managed financial tracking and audits for a bank-sponsored environmental NGO program in Brazil, across 5 projects.
- Built a service map and supporting research for a space-industry marketplace startup considering invoice financing for its clients.
- Ran the print and TV ad operation for a supermarket chain, modernizing the layout of both: weekly circulars, flyers and inserts, and the daily TV promo spots.

## Audience

| Visitor | Needs to see in 30 seconds |
| --- | --- |
| Group AD, VP or Head of Client Services | Can run and grow a book of business |
| Agency recruiter | Title fit, industries, Toronto, open to contract |
| Agency founder hiring a contractor | Can start fast with little hand-holding |
| Peers and referrers | Something worth sharing (latest post) |

Signals that answer "has he been out too long?": recent dates on posts and reading, AI shown in the work, a current Now page.

## Site map (five pages)

| Page | Job |
| --- | --- |
| Home | Hero brief, proof numbers, latest 3 AI Management posts (auto), selected work, recently read (manual), book a call |
| Work | Industry stories as one-page agency briefs, filterable by industry |
| About | Career as a scroll story; how he leads; languages and credentials |
| Now | What he is building, learning and looking for this month |
| Contact | Calendar link first; email (obfuscated), LinkedIn, newsletter |

No separate Writing or Reading pages. English only, no language toggle.

## Content

- **Newsletter:** AI Management, https://aimgmt.substack.com. Pillars: AI strategy for brands, decisions with AI, trust and governance, leading the change. A 21-article series follows the Rotman "Generative and Agentic AI for Business" curriculum.
- **Industry stories** (`src/stories/*.md`): fields are Client, Problem, Moves, Result, Where AI fits today. 250 to 400 words. **Never show real third-party client names**; use descriptors like "a global utility". Rodrigo's own ventures (Spin Engenharia, Nrolled) are named directly, not anonymized, since they're his companies rather than confidential clients. Energy (6 stories), Hospitality, Tech, Advertising, Non-profit, Space and Retail exist; automotive, government and financial services are still to come.
- **AI stories**: a separate `industry: AI` tag (not a market vertical) for stories about directing AI to build something, agent-led work demos. Optional `video` frontmatter field plays an mp4 (from `public/videos/`) in the card's image slot instead of a static image; omit both `image` and `video` for a text-only card. Optional `linksKey` frontmatter field points to an entry in `site.storyLinks` (in `site.config.ts`) and renders outbound buttons under the fields, e.g. the Chronicles story links out to the site and the Kindle book. Keep the actual URLs in `site.config.ts`, never in the story file.

## Look, feel and voice

- Feels like a well-run agency's case study page, not a developer portfolio.
- **Signature device:** the brief. The Home hero is a one-page brief about Rodrigo; stories render as brief cards with labelled fields.
- **Signature mark:** a highlighter (`--marker`) on results and key lines, sweeping in on scroll.
- Palette: paper `#f4f5f2`, sheet `#ffffff`, ink `#10211c`, muted `#56635d`, rule `#cfd6d0`, green `#1e4a3c`, marker `#e2ee55`.
- Type: Newsreader (serif) for headlines, Schibsted Grotesk for body.
- Imagery: Rodrigo's LinkedIn portrait in the hero, personal photos on About, Midjourney visuals for section and story art. No stock photos.
- Voice: first person, short sentences, specific numbers, no jargon. Confident, never salesy.
- **No em dashes anywhere** in copy.

## Motion

Current: brief rows fill in on load; highlighter sweeps on scroll; images drift (parallax); proof numbers count up; About uses a sticky photo beside scrolling career stages. All motion is off under `prefers-reduced-motion`.

Ideas to explore for a more striking site:
- Hero as a creative review: the brief lands on a desk, then the portrait slides in.
- About as a horizontal scroll, one career chapter per screen, with photos.
- Each industry story gets its own Midjourney visual and a full-screen opener.
- Tools available: native CSS scroll-driven animations (Chrome, Safari, Firefox) and GSAP with ScrollTrigger and SplitText (free).

Rules: one memorable moment per page beats effects everywhere; motion must never delay reading; keep the site fast and readable on a phone.

## Non-negotiables

- No client names.
- Never write the full email address into the page HTML (see Contact page).
- Never invent metrics, clients or dates.
- No em dashes.
- Accessible: keyboard focus visible, good contrast, reduced motion respected.
