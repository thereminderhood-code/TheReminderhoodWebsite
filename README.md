# The ReminderHood

The website of The ReminderHood: Islamic learning, made simple. **Small bits. Lasting impact.**

Pages: Home · Apps (hub + Cave Ash'ari + AjrHunter pages) · Learn (Deen in Bits) · About (story and IMAMAE core values).

A static site with no build step: HTML for structure, `css/styles.css` for styling, `js/` for behaviour.

## Run it locally
```
npx serve .
```
Then open http://localhost:3000.

## Deploy to Vercel
- **GitHub (recommended):** on vercel.com choose Add New → Project → Import this repository. Framework preset "Other", no build command, output directory `.`. Every push to `main` then deploys automatically.
- **CLI:** `npx vercel` then `npx vercel --prod`.

## Editing
- Add or change a lesson: `js/bits.js` (every ayah needs its surah and ayah number, every hadith its collection and number).
- Turn on the YouTube / Instagram links: fill `SOCIAL` at the top of `js/main.js`.
- Colours and fonts: the `:root` tokens at the top of `css/styles.css`.

## Placeholders to fill
| Placeholder | Where | What to do |
|---|---|---|
| `https://[SITE_URL]` | every `.html` `<head>`, `sitemap.xml`, `robots.txt` | Replace with the live domain, e.g. `grep -rl '\[SITE_URL\]' . \| xargs sed -i 's#https://\[SITE_URL\]#https://your-domain#g'` |
| `[HERO_ASSET]` | `apps/cave-ashari/index.html`, `apps/ajrhunter/index.html` (HTML comment above `.app-hero-media`) | Put `hero.jpg` or `hero.mp4` in `assets/apps/<app>/` and swap the two decorative children for the `<img class="cover">` / `<video class="cover">` shown in the comment |
| Cave Ash'ari before/after | `assets/apps/cave-ashari/before.mp3`, `after.mp3` | Add the files; the players show "Sample coming soon" until they exist |
| AjrHunter sample | `assets/apps/ajrhunter/sample.mp4`, `sample-poster.jpg` | Add the files |
