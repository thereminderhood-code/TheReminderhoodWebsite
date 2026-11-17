# The ReminderHood - Brand Website
AbuHammam's website for The ReminderHood, the Islamic education brand that teaches Muslims their deen in small,
digestible bits ("Deen in Bits"). Pages: Home → Apps hub (`/apps`) with one page per app (`/apps/cave-ashari`,
`/apps/ajrhunter`) → Learn (Deen in Bits library) → About (story + IMAMAE core values). Tagline: **Small bits. Lasting impact.** Motto: **Learn · Reflect · Apply**.

- Live: https://thereminderhood.com (also www.; Vercel project `the-reminderhood/thereminderhoodwebsite`, auto-deploys every push to `main`)
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
- Icons: one SVG sprite, `assets/icons.svg`, used as `<svg><use href="/assets/icons.svg#i-name"/></svg>`
- Paths are **root-absolute everywhere** (`/css/…`, `/assets/…`, `/learn`, `/apps/ajrhunter`) because pages live at different folder depths
- Hosting: Vercel (`vercel.json`: `cleanUrls`, so `apps/cave-ashari/index.html` is served at `/apps/cave-ashari`; cache headers for assets and fonts)
- SEO: every `<head>` has title, description, canonical, Open Graph + Twitter card (images in `assets/og/`, 1200×630); inner pages carry BreadcrumbList JSON-LD. `sitemap.xml` + `robots.txt` at the root. Absolute URLs use `https://thereminderhood.com`

## Commands
- `npx serve .` - serve locally (supports clean URLs; `python3 -m http.server` does NOT, so `/learn` would 404)
- Deploy: `git push origin main` → Vercel deploys in ~1 minute (no build or deploy script). The Vercel project already exists: never import the repo again (it would create a duplicate project)
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
  big tight Poppins headings, pill buttons, phone tab bar at the bottom (≤900 px). **Dark is the default**; a light
  "parchment" theme (`#F6F1EA`) is available from the sun/moon button in the header

## Project Structure
| File | Role |
|---|---|
| `index.html` | Home: hero (eyebrow, wordmark, tagline, CTAs, 4 pillars, mosque art), ayah behind the name (Adh-Dhariyat 51:55), 4 learning tracks (link to `learn#<track>`), "A bit for today", app preview, CTA |
| `apps/index.html` | Apps hub: breadcrumb, intro "Tools built to serve the Qur'an", one card per app (Explore → app page, Launch app → live URL in a new tab), "More useful tools" banner, "How we build" |
| `apps/cave-ashari/index.html`, `apps/ajrhunter/index.html` | App pages (`<body data-app="…">`), sections in order: hero (breadcrumb, mark, name, promise, Launch app + How it works, `[HERO_ASSET]` slot), the problem, how it works (4 steps, `#how`), who it's for, demo (`data-media` players with placeholder files), FAQ (`<details>`), closing CTA |
| `sitemap.xml`, `robots.txt` | All six URLs on `https://thereminderhood.com`; add new pages to the sitemap |
| `assets/og/` | Share images: `og-default`, `og-apps`, `og-cave-ashari`, `og-ajrhunter` (.jpg) |
| `assets/apps/<app>/` | (not created yet) hero image/video and demo media; see README "Placeholders" |
| `learn.html` | Deen in Bits, kept deliberately minimal (the owner's learning-science call): intro → the owner's "Coming soon" GIF (`/assets/learn/deen-in-bits.gif`, 1920×1080, until the curriculum is done) → "Hear the reminder" CTA. The method, levels and bit library were removed on purpose; `bits.js` now only feeds the home page's "A bit for today" |
| `about.html` | Story, "What we make", IMAMAE core values (text exactly as in the owner's values graphic), CTA |
| `css/styles.css` | Every style: tokens, base, layout, header, buttons, hero, cards, page-specific, footer, tab bar, motion, responsive |
| `js/bits.js` | Deen in Bits content (data only) |
| `js/main.js` | Header scroll/menu, social links (`SOCIAL` at the top), scroll reveal, bit of the day (same bit for everyone each day + arrows), library render + filters (deep links `learn#faith`), demo-media fallback (`[data-media]` gets `.is-missing` → "Sample coming soon" when a file can't load), footer year |
| `assets/logo.png` | The TR mark, cut from the mock-up (202×190; ask the owner for a vector/high-res export for print) |
| `assets/hero-mosque.svg` | Hand-drawn mosque-at-dusk scene for the hero (original artwork, no stock) |
| `assets/icons.svg` | Icon sprite (`i-home`, `i-grid`, `i-book`, `i-info`, `i-arrow`, …) |
| `assets/icons/` | App marks copied from the Cave Ash'ari (`mark.svg`) and AjrHunter (`favicon.svg`) repos |
| `assets/fonts/hafs.woff2` | KFGQPC Hafs |
| `assets/favicon-32.png`, `apple-touch-icon.png`, `icon-512.png` | Icons (made from the logo) |
| `vercel.json` | cleanUrls + headers |

Header, footer and phone tab bar are repeated in each `.html` file (no build step). When you change one, change all six,
and set `aria-current="page"` on the current page's link in both the header and the tab bar. On an app page the
top-level Apps link and tab get `aria-current="true"` (section) and the app's dropdown link gets `aria-current="page"`.
The header "Apps" item has a CSS-only dropdown (`.has-sub` → `.sub`, opens on hover/focus); in the phone menu it shows as indented sub-links.

## Light / dark theme
- `<html data-theme="dark">` on every page; the header toggle (`.theme-btn`, `initTheme` in `main.js`) switches to `light` and saves `rh-theme` in localStorage. `js/theme.js` is the only non-deferred script: it restores the choice in `<head>` so there's no flash. The OS setting is deliberately ignored (the owner wants dark by default)
- Colours go through tokens: `--bg`, `--text`, `--text-hi`, `--text-strong`, `--text-soft`, `--muted`, `--line`, `--glass`, `--glass-2`, `--pill-bg/-fg`, and `rgba(var(--fg-rgb), a)` / `rgba(var(--panel-rgb), a)` for tints and floating panels. Light values live in CSS section 14. Don't hard-code `#fff` text or white rgba tints in new rules; text on orange stays `#fff`
- The logo's white "T" disappears on light backgrounds, so every logo is a pair: `.logo-on-dark` (`logo.png`) + `.logo-on-light` (`logo-light.png`, dark-ink T). The phone mock-up on the Apps hub is always dark and keeps only `logo.png`
- Pieces drawn for a dark background on purpose stay dark in light mode: app hero "screens", app icons, the Coming Soon GIF, the dark track cards

## App accents
Each app's colours are three variables set by `data-app` on `<body>` (app pages) or on a hub card:
`--app-accent`, `--app-deep`, `--app-ink`. Cave Ash'ari = `#FF6D29` / `#453027` / `#161316`; AjrHunter = gold `#D4A64A` / `#4a3712` / `#14110b`.
Only the hero (`.app-hero` glow, mark, `.calli` watermark, `h1 .tick`) and `.btn--app` read them; everything else keeps the main site's look.
App-page copy must describe the apps as they really are: Cave Ash'ari's spaces are Subtle, Majestic, Cathedral, Hammam (+ Dry);
AjrHunter syncs the surah + ayat the user chooses (it does not detect which verses were recited).
The AjrHunter page credits **Ahmed Al-Gharib** (أحمد الغريب, https://am9li9.com/) for the Qur'anic fonts and asks visitors to remember him, AbuHammam Salih Ibn Yahaya, and the rest of The ReminderHood team members and contributors in their du'a (the owner's wording): keep this.

## Important Rules
- Every Qur'an verse shows its surah name + ayah number; every hadith shows its collection + number (the owner's rule)
- Qur'an text: copy from AjrHunter's `quran.json` (KFGQPC Uthmani + Sahih International); never type Arabic by hand.
  The Hafs font has no U+06DD: for an ayah end inside a passage write a space + Arabic-Indic digits (`٥`), the font draws the medallion
- The IMAMAE value texts on the About page are the owner's wording; don't edit them without asking
- Social links live in `SOCIAL` in `main.js` (YouTube @TheReminderHood, Instagram @thereminderhoods); every "Follow us" / "Stay Updated" button points to `#follow` in the footer
- Never put the owner's email or any secret in the code
- Don't mix Cave Ash'ari or AjrHunter code into this repo; link to the live apps
- No decorative short orange lines (the old eyebrow bar and `.bar` above page titles): the owner removed them as "mediocre"; don't add them back
- Check every page at 1440 px, 390 px and 360 px before pushing (no horizontal scroll, nothing overlapping the hero text)
- After a bug or detour that took real time to solve, add a short entry to **Lessons learned** below

## Git Workflow
- Commit straight to `main` and push; Vercel deploys in ~1 minute
- Commit as `AbuHammam <thereminderhood@gmail.com>`; messages describe the user-visible change (first line) and *why* (body)
- End commit messages with the session's `Co-Authored-By` / `Claude-Session` trailers

## Lessons Learned
- **A JS string broke on quotes:** `"ease is "with" the hardship"` killed all of `bits.js` (`Unexpected token 'with'`). Use ‘curly’ quotes inside content strings and run `node --check js/*.js`.
- **Hero text overflowed on phones:** a CSS grid column grows to its widest child's min-content (the huge `h1`). Fix: `grid-template-columns: minmax(0, 1fr)` on `.hero-copy` + a phone-sized `h1` clamp.
- **The hero art hid the wordmark:** at 62vw the crescent sat on "Hood". Keep the art ≤50vw on desktop and faded (opacity .3) under the text on phones.
- **Phone menu never opened:** the menu button swaps its own icon on click, so the clicked `<svg>` was detached before the document "click outside" handler ran, `header.contains(e.target)` was false, and the menu closed instantly. Use `e.composedPath().includes(header)`.
- **Subfolder pages lost their CSS/icons:** relative paths (`css/styles.css`) resolve against `/apps/cave-ashari/`. All paths are root-absolute now; keep them that way.
- **Sprite symbols silently missing:** `assets/icons.svg` has a `</svg>` inside its top comment, so inserting before the first `</svg>` put new symbols in the comment. Insert before the *last* `</svg>` and check with `grep -c`.
