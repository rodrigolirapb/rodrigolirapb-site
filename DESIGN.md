---
name: Rodrigo Borges, Account Director
description: A one-page agency brief about an account director for the AI era
colors:
  bg: "#ffffff"
  paper: "#eef2ee"
  sheet: "#ffffff"
  ink: "#10211c"
  muted: "#56635d"
  rule: "#d6ddd8"
  green: "#1e4a3c"
  green-ink: "#0d241c"
  marker: "#e2ee55"
typography:
  display:
    fontFamily: "Newsreader Variable, Georgia, serif"
    fontSize: "clamp(2.1rem, 4.5vw, 3.4rem)"
    fontWeight: 450
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Newsreader Variable, Georgia, serif"
    fontSize: "1.85rem"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Newsreader Variable, Georgia, serif"
    fontSize: "1.45rem"
    fontWeight: 500
    lineHeight: 1.08
  body:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
  eyebrow:
    fontFamily: "Schibsted Grotesk Variable, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.12em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "10px"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3rem)"
  section: "clamp(3rem, 7vw, 5.5rem)"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.8em 1.3em"
  button-primary-hover:
    backgroundColor: "{colors.green-ink}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.8em 1.3em"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.green}"
    rounded: "{rounded.pill}"
    padding: "0.8em 1.3em"
  card-brief:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
---

# Design System: Rodrigo Borges, Account Director

## 1. Overview

**Creative North Star: "The Agency Brief, Printed on Better Paper"**

The site is still written as a one-page creative brief, but the brief now lives in a room with color in it: a white page broken into alternating bands (plain white, a pale green-tinted paper, and one bold inverted green band for the close), with the brief sheet, brief cards and book covers all raised off those bands with a soft shadow instead of a hairline border. It still rejects the developer-portfolio look (no monospace, no terminal chrome) and the generic SaaS-marketing look (no gradient-text metrics, no stock photography, no icon-in-a-circle grids). The only saturated colors are the deep agency green and its rare highlighter accent; nothing else competes with them.

**Key Characteristics:**
- White is the page's resting state; a pale green-tinted "paper" band and one solid-green "next step" band are what tell sections apart, not just a rule line.
- A small tracked-out uppercase "eyebrow" label (a short rule + a word, e.g. "— WRITING") sits above every section heading, naming the section before the headline does.
- Cards, the hero sheet and book covers are raised with a soft green-black shadow rather than a 1px border; the border-only flat style is retired.
- Scroll motion is used deliberately: a fade-and-rise reveal on headings and cards, a hover lift on anything tappable, and one true lateral-scroll carousel (recently-read books) with a scroll-driven progress bar. All of it is inert under `prefers-reduced-motion`.

## 2. Colors

Close to monochrome (white, paper, ink, muted) with one committed accent (green) that also gets to be a full section background once, plus one rare highlight (marker).

### Primary
- **Deep Agency Green** (`#1e4a3c`): links, buttons, focus outlines, and the one full-bleed inverted section ("Have an account that needs an AI plan?").

### Neutral
- **Page White** (`#ffffff`): the default page background and card/sheet surface.
- **Tinted Paper** (`#eef2ee`): alternating section bands and the hero sheet's backdrop; a green-leaning off-white, not a cool grey.
- **Deep Green-Black Ink** (`#10211c`): body text, headings, hover shade reference.
- **Muted Sage** (`#56635d`): secondary text, dates, labels.
- **Hairline Rule** (`#d6ddd8`): dividers only now, not card borders.
- **Green Ink** (`#0d241c`): hover shade for green buttons.

### Named Rules
**The One Highlight Rule.** `--marker` (`#e2ee55`) exists only for the `.mark` sweep on proof lines/results and for the eyebrow label inside the green band. It never becomes a background, a button, or a repeated decorative device.

**The One Inversion Rule.** Exactly one section per page may invert to solid `--green` with white text (the closing CTA on Home). Stacking two inverted bands back to back is forbidden; it would turn the accent into wallpaper.

## 3. Typography

**Display Font:** Newsreader Variable (with Georgia, serif fallback)
**Body Font:** Schibsted Grotesk Variable (with system-ui fallback)

**Character:** A literary serif for anything that should feel written and considered, paired with a plain grotesque for anything that should feel efficient and read fast. The scale is a step smaller end to end than the previous version: the brief should read like a sharp memo, not a poster.

### Hierarchy
- **Display** (450, `clamp(2.1rem, 4.5vw, 3.4rem)`, 1.08): the Home hero `h1` only.
- **Headline** (500, 1.85rem, 1.08): section `h2`.
- **Title** (500, 1.45rem, 1.08): card and subsection `h3`.
- **Body** (400, 1rem, 1.55): running text, 66ch measure.
- **Label** (400, 0.8125rem): dates, field labels, quiet metadata.
- **Eyebrow** (600, 0.8125rem, 0.12em tracking, uppercase): the short section-naming label above every `h2`, prefixed by a 1.4em rule mark instead of a literal dash character.

### Named Rules
**The Balanced Headline Rule.** Every `h1`/`h2`/`h3` uses `text-wrap: balance` so headlines never break into an orphaned short last line.
**The Eyebrow-Before-Headline Rule.** A section heading is never introduced bare; the eyebrow names the section's job before the headline makes its claim.

## 4. Elevation

No longer flat. Cards, the hero sheet, book covers and the portrait frame carry a soft, warm-toned shadow (`0 16-24px 28-48px, rgba(16, 33, 28, 0.28-0.35), negative spread`) instead of the old 1px `--rule` border. The shadow color is tinted toward `--ink`, never pure black, so it reads as "lifted off green-tinted paper," not generic Bootstrap elevation.

### Shadow Vocabulary
- **Card rest** (`0 1px 0 var(--rule), 0 16px 32px -24px rgba(16, 33, 28, 0.3)`): brief cards at rest.
- **Lift hover** (`0 16px 28px -16px rgba(16, 33, 28, 0.28)` + `translateY(-4px)`): any `.lift` element on hover/focus (cards, post rows, book covers).
- **Sheet / frame** (`0 24px 48px -28px rgba(16, 33, 28, 0.35)`): the hero sheet and portrait frame, the two largest surfaces on the page.

### Named Rules
**The Lifted-Paper Rule.** Depth always comes from a green-black-tinted shadow, never a grey or pure-black one, and never a visible border doing the same job.

## 5. Components

### Buttons
- **Shape:** fully rounded (999px, pill).
- **Primary:** green background, white text, 0.8em/1.3em padding, 600 weight; hovers to `--green-ink`.
- **Secondary / Ghost:** transparent background, green text, 1.5px inset green outline; inverts to solid green on hover.
- **On a green band:** primary flips to white-on-green-text; hover goes to the marker yellow-green with ink text. Secondary becomes a white outline.

### Cards (brief cards, book covers)
- **Corner style:** 10px radius (8px on the smaller post thumbnail).
- **Background:** `--sheet` white, always, regardless of which band it sits on.
- **Shadow strategy:** see Elevation; no border.
- **Hover:** the `.lift` utility, a 4px rise plus a deeper shadow, `0.25s` with `--ease-out`.

### Section Eyebrow
- A `<p class="eyebrow">` directly above every section `h2`: uppercase, 0.12em tracking, green (or marker yellow-green inside a green band), with a 1.4em horizontal rule before the word.

### Section Bands
- `.band-paper`: the pale green-tinted alternate background.
- `.band-green`: the one inverted section; flips text to white, links to white, buttons to white-on-green, and the eyebrow to marker yellow-green.

### Recently-Read Carousel
- A horizontal `scroll-snap-type: x` row (`.scroll-row`) of book cards, each `scroll-snap-align: start`, no visible native scrollbar.
- A 3px `.scroll-track` line beneath it; where `scroll-timeline` is supported, a `.scroll-track-bar` fills in sync with horizontal scroll position via a named CSS scroll-timeline. Falls back to a static filled line where unsupported.

### Fields (the signature device)
- A `<dl>` of label/value rows (`dt`/`dd`), 7.5–8.5rem label column, hairline rule above each row. Unchanged from the previous system.

### Navigation
- Plain text links, serif-free, current page marked with `aria-current` plus a highlighter underline. Unchanged.

### Highlighter Mark
- `.mark`: unchanged, a left-to-right highlight sweep on scroll, disabled under `prefers-reduced-motion`.

## 6. Do's and Don'ts

### Do:
- **Do** keep the hero as a labelled brief (`dt`/`dd` rows), not a conventional bio paragraph.
- **Do** alternate section backgrounds (white / paper / white / paper / white / green) so color, not just a rule line, marks where one section ends and the next begins.
- **Do** give every section heading an eyebrow label first.
- **Do** keep all animation (`reveal`, `mark-sweep`, `drift`, `track-fill`) gated under `prefers-reduced-motion: no-preference`.
- **Do** keep body copy to a 66ch measure.

### Don't:
- **Don't** introduce a developer-portfolio aesthetic: no monospace type, no terminal chrome, no code-flex.
- **Don't** use generic SaaS-marketing patterns: no gradient-text hero metrics, no stock photography, no icon-in-a-circle feature grids.
- **Don't** stack two `.band-green` sections back to back; the inversion is a once-per-page moment.
- **Don't** use the highlighter color as a background fill or a button's resting color; it is a sweep accent and an eyebrow-on-green color only.
- **Don't** bring back a 1px `--rule` border as a card's only separation device now that cards use shadow elevation; a border and a shadow on the same card is visual noise.
