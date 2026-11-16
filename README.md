# The ReminderHood

The website of The ReminderHood: Islamic learning, made simple. **Small bits. Lasting impact.**

Pages: Home · Apps · Learn (Deen in Bits) · About (story and IMAMAE core values).

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
