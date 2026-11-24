# Rogatnev Nikita Website v4.0

Personal site, live at https://rogatnev.ru

### Summary

- High Resolution: Yes
- Compatible Browsers: Edge, Firefox, Safari, Opera, Chrome
- Technologies: BEM, HTML5, SCSS, Webpack, React (build time only)
- Layout: Responsive

### How it works

- Content lives in `src/data/resume.jsx` and `src/data/certificates.js` — edit these to update the page.
- `npm start` — development server on http://localhost:8080 (React rendered in the browser, hot reload).
- `npm run build` — production build into `public/`: the React app is prerendered into `index.html`,
  styles go to `bundle.css`, fonts to `fonts/`. The only script shipped is a ~1 KB scroll-reveal helper (`bundle.js`).
- `npm run images` — regenerates display-sized WebP copies of the badges/logos in `public/img` (needs `cwebp`).
- `npm test` — ESLint.

### Deploy

Automatic on push to `master`:

1. GitHub calls the Plesk Git webhook (repository Settings → Webhooks).
2. Plesk (reg.ru hosting, Git section of rogatnev.ru, entry `rogatnev-site.git`) pulls `master` into `/rogatnev.ru`;
   the site is served from `/rogatnev.ru/public`.
3. `.github/workflows/deploy.yml` lints, rebuilds and fails if rogatnev.ru does not serve the pushed build.

The server does not build anything, so `public/` must be committed up to date. The `pre-commit` hook in
`.githooks/` (enabled by `npm install`) rebuilds it whenever a commit touches the source.

Manual fallback: Plesk → rogatnev.ru → Git → "Pull now".
