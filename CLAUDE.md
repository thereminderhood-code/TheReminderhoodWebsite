# The ReminderHood - Brand Website
AbuHammam's website for The ReminderHood, the Islamic education brand that teaches Muslims their deen in small,
digestible bits ("Deen in Bits"). Four pages: Home → Apps (Cave Ash'ari, AjrHunter, coming soon) → Learn (Deen in Bits
library) → About (story + IMAMAE core values). Tagline: **Small bits. Lasting impact.** Motto: **Learn · Reflect · Apply**.

- Live: Vercel (auto-deploys every push to `main` once the repo is imported in Vercel)
- Repo: thereminderhood-code/TheReminderhoodWebsite (public)
- Name is always written **The ReminderHood** (capital H). In the hero wordmark "Hood" is ember. Slug: `reminderhood`.
- Design source: the owner's Canva mock-up "The Reminderhood Website Mock Up" (hero, Apps page, colour palette, logo).
- Links out to his apps (https://cave-ashari.vercel.app, https://ajrhunter.vercel.app) but shares no code with them.

## Tech Stack
- Framework: none. A static site served as-is: no build step, no bundler
- Structure / style / behaviour are kept apart (the owner asked): `.html` = structure, `css/styles.css` = all styling,
  `js/*.js` = all behaviour. No inline `<script>`; inline `style=""` only for one-off spacing or a card's `--blob` colour
- Language: plain JavaScript (ES2020+, one IIFE in `main.js`), HTML, CSS (design tokens in `:root` of `styles.css`)
- Fonts: Google Fonts Poppins (UI/headings) + Cinzel (the "THE REMINDERHOOD" wordmark); `assets/fonts/hafs.woff2`
  (KFGQPC Uthmanic Script Hafs, converted from AjrHunter's `hafs.otf`) for Qur'an text
- Icons: one SVG sprite, `assets/icons.svg`, used as `<svg><use href="assets/icons.svg#i-name"/></svg>`
- Hosting: Vercel (`vercel.json`: `cleanUrls`, so links are `apps`, `learn`, `about`; cache headers for assets and fonts)

## Commands
- `npx serve .` - serve locally (supports clean URLs; `python3 -m http.server` does NOT, so `/learn` would 404)
- Deploy: `git push origin main` → Vercel deploys in ~1 minute (no build or deploy script)
- Screenshot check: Playwright (`playwright-core`) in a scratch folder against the local server at 1440×900 and 390×844.
  In the cloud sandbox Google Fonts are blocked: route `fonts.googleapis.com` to local `@fontsource/poppins` + `@fontsource/cinzel`

## Code Style
- 2-space indent; short helpers (`$`, `$$`, `icon`, `esc`); comments explain *why*
- `main.js`: one `init*()` per feature, each returns early if its elements aren't on the page, so one file serves all pages
- Content data lives in `js/bits.js` (`window.RH_BITS`, `window.RH_TRACKS`), never in `main.js`
- CSS is ordered by the numbered sections in its header comment; add new rules to the matching section
- UI copy: plain, calm, short, and **true** (app descriptions must match what the apps actually do)
- Design language: black `#000000` base, Branding Orange `#E85002`, gradient `#000000 → #C10801 → #F16001 → #D9C3AB`,
  Vivid Azure `#0DBEDE` (the R's tail, used sparingly), white `#F9F9F9`, gray `#646464`, dark gray `#333333`.
  Frosted-glass panels, ember arc + glow from the right, azure hint on the left, pill nav with white active pill,
  big tight Poppins headings, pill buttons, phone tab bar at the bottom (≤900 px). Single dark theme

## Project Structure
| File | Role |
|---|---|
| `index.html` | Home: hero (eyebrow, wordmark, tagline, CTAs, 4 pillars, mosque art), ayah behind the name (Adh-Dhariyat 51:55), 4 learning tracks (link to `learn#<track>`), "A bit for today", app preview, CTA |
| `apps.html` | Our Apps: phone + floating tiles visual, 4 cards (Cave Ash'ari, AjrHunter, 2× Coming soon), "More useful tools" banner, "How we build" |
| `learn.html` | Deen in Bits: Learn/Reflect/Apply method, Simple → Intermediate → Advanced levels, filterable bit library (`#bitLibrary`) |
| `about.html` | Story, "What we make", IMAMAE core values (text exactly as in the owner's values graphic), CTA |
| `css/styles.css` | Every style: tokens, base, layout, header, buttons, hero, cards, page-specific, footer, tab bar, motion, responsive |
| `js/bits.js` | Deen in Bits content (data only) |
| `js/main.js` | Header scroll/menu, social links (`SOCIAL` at the top), scroll reveal, bit of the day (same bit for everyone each day + arrows), library render + filters (deep links `learn#faith`), footer year |
| `assets/logo.png` | The TR mark, cut from the mock-up (202×190; ask the owner for a vector/high-res export for print) |
| `assets/hero-mosque.svg` | Hand-drawn mosque-at-dusk scene for the hero (original artwork, no stock) |
| `assets/icons.svg` | Icon sprite (`i-home`, `i-grid`, `i-book`, `i-info`, `i-arrow`, …) |
| `assets/icons/` | App marks copied from the Cave Ash'ari (`mark.svg`) and AjrHunter (`favicon.svg`) repos |
| `assets/fonts/hafs.woff2` | KFGQPC Hafs |
| `assets/favicon-32.png`, `apple-touch-icon.png`, `icon-512.png` | Icons (made from the logo) |
| `vercel.json` | cleanUrls + headers |

Header, footer and phone tab bar are repeated in each `.html` file (no build step). When you change one, change all four,
and set `aria-current="page"` on the current page's link in both the header and the tab bar.

## Important Rules
- Every Qur'an verse shows its surah name + ayah number; every hadith shows its collection + number (the owner's rule)
- Qur'an text: copy from AjrHunter's `quran.json` (KFGQPC Uthmani + Sahih International); never type Arabic by hand.
  The Hafs font has no U+06DD: for an ayah end inside a passage write a space + Arabic-Indic digits (`٥`), the font draws the medallion
- The IMAMAE value texts on the About page are the owner's wording; don't edit them without asking
- Social links are empty until the owner gives the handles: fill `SOCIAL` in `main.js`; empty ones hide themselves
- Never put the owner's email or any secret in the code
- Don't mix Cave Ash'ari or AjrHunter code into this repo; link to the live apps
- Check every page at 1440 px and 390 px before pushing (no horizontal scroll, nothing overlapping the hero text)
- After a bug or detour that took real time to solve, add a short entry to **Lessons learned** below

## Git Workflow
- Commit straight to `main` and push; Vercel deploys in ~1 minute
- Commit as `AbuHammam <thereminderhood@gmail.com>`; messages describe the user-visible change (first line) and *why* (body)
- End commit messages with the session's `Co-Authored-By` / `Claude-Session` trailers

## Lessons Learned
- **A JS string broke on quotes:** `"ease is "with" the hardship"` killed all of `bits.js` (`Unexpected token 'with'`). Use ‘curly’ quotes inside content strings and run `node --check js/*.js`.
- **Hero text overflowed on phones:** a CSS grid column grows to its widest child's min-content (the huge `h1`). Fix: `grid-template-columns: minmax(0, 1fr)` on `.hero-copy` + a phone-sized `h1` clamp.
- **The hero art hid the wordmark:** at 62vw the crescent sat on "Hood". Keep the art ≤50vw on desktop and faded (opacity .3) under the text on phones.
