# Mayfly24 — Corporate Landing Page

A single-page corporate landing site for Mayfly24, built with Vite, React, TypeScript,
Bootstrap 5 and SCSS. See `SETUP.md` for the full design and engineering brief this
implementation follows.

## Getting started

```bash
npm install
npm run dev
```

The dev server prints a local URL (default `http://localhost:5173`).

## Available scripts

| Script                 | Purpose                                              |
| ---------------------- | ---------------------------------------------------- |
| `npm run dev`          | Start the Vite development server with HMR           |
| `npm run build`        | Type-check and produce a production build in `dist/` |
| `npm run preview`      | Preview the production build locally                 |
| `npm run lint`         | Run ESLint                                           |
| `npm run format`       | Format the codebase with Prettier                    |
| `npm run format:check` | Check formatting without writing changes             |
| `npm run typecheck`    | Run TypeScript project-reference type checking       |

## Project structure

```
src/
  assets/logos/        Brand mark and wordmark (optimised .webp)
  components/layout/   Navbar, Footer
  components/sections/ One component per landing-page section
  components/ui/       Shared presentational primitives (buttons, headings, cards)
  config/site.config.ts  Section anchor ids + contact/social configuration
  i18n/                 i18next setup, supported-languages config, locale resource files
  styles/               SCSS tokens/mixins, Bootstrap variable overrides, global styles
```

### Styling (SCSS)

- `src/styles/_tokens.scss` — the single source of truth: brand color variables, the
  `$palette` / `$semantic-colors` maps, font/layout variables, and shared mixins
  (`heading-font`, `marker`) and the `rgb-triplet()` function. This is a Sass partial (not
  compiled on its own) — it's pulled in with `@use 'tokens'` by the files below.
- `src/styles/variables.scss` — generates the runtime CSS custom properties (`--color-*`,
  `--font-*`, etc.) from the token maps via `@each`, so every color is written once.
- `src/styles/bootstrap-overrides.scss` — remaps Bootstrap's own CSS variables onto the brand
  tokens; button hover/active shades are derived with `color.adjust()` rather than hand-picked
  hex values.
- `src/styles/global.scss` — resets, layout utilities, and shared presentational classes
  (`.font-heading`, `.hero-headline`, `.vision-statement`, `.dot-accent`, `.marker-diamond`,
  etc.) that replaced what used to be inline component styles.

Components use these utility classes instead of inline `style={{ ... }}` objects — if you need
a new shared visual treatment, add a class to `global.scss` (reusing the mixins in `_tokens.scss`
where it fits) rather than reintroducing inline styles.

## Updating content and branding

- **Copy**: edit `src/i18n/locales/en/translation.json`. Every section reads this through the
  `useSiteContent()` hook (`src/i18n/useSiteContent.ts`), typed end-to-end via `SiteContent` in
  `src/types/content.types.ts`, so no component needs to change when copy changes.
- **Section anchors / nav structure**: `src/config/site.config.ts` (`SECTION_IDS`). The `href`
  values inside each locale's `translation.json` (e.g. `"#about"`) must match these ids — they
  are structural, not translated text, so they're duplicated as literals across locale files
  rather than computed, to keep the JSON resources plain data.
- **Contact details and social links**: `src/config/site.config.ts` (`siteConfig.contact`,
  `siteConfig.social`). Components only render a channel when it is non-null — see
  "Known gaps" below.
- **Colours and typography tokens**: `src/styles/_tokens.scss` (also update
  `src/styles/variables.scss` if you add a new token that needs a runtime CSS variable).
- **Bootstrap theme overrides**: `src/styles/bootstrap-overrides.scss`.
- **Logos**: replace the files in `src/assets/logos/`, keeping the same filenames, or update
  the import paths in `Navbar.tsx` / `Footer.tsx` / `Vision.tsx`.

## Internationalisation (i18next)

The site uses [i18next](https://www.i18next.com/) + `react-i18next`, configured in
`src/i18n/index.ts`, with browser-language detection (`i18next-browser-languagedetector`,
preferring a previously-chosen language in `localStorage` over the browser's `navigator`
language) and `en` as the fallback. `main.tsx` waits on `i18nReady` before the first render, so
`useSiteContent()` always has resources available.

`src/components/ui/LanguageSwitcher.tsx` renders a `<select>` of `SUPPORTED_LANGUAGES` and
calls `i18n.changeLanguage()` — but it renders **nothing** while that list has fewer than two
entries, which is the case today (`en` only). This intentionally keeps the language switcher
invisible until a translation is actually complete, per the project brief, while the full
i18next wiring (detection, persistence, hook) is already in place.

### Adding a new language

1. Add `src/i18n/locales/<code>/translation.json`, matching the full shape of
   `src/i18n/locales/en/translation.json` (and therefore `SiteContent`).
2. Import it and add it to the `resources` object in `src/i18n/index.ts`.
3. Add `{ code: '<code>', label: '<Native name>' }` to `SUPPORTED_LANGUAGES` in
   `src/i18n/languages.ts`.

No layout or section component needs to change — adding the second entry to
`SUPPORTED_LANGUAGES` is also what makes `LanguageSwitcher` start rendering.

## Known gaps / required follow-up

These were deliberately left unset because the source brand materials (`SETUP.md`, the Brand
Model Canvas, the supplied logos) do not provide verified values. Nothing is invented or
faked — the site simply omits the corresponding UI until these are supplied:

- **Contact email** — `siteConfig.contact.email` is `null`. The Contact section and footer
  only render a `mailto:` link once a real address is set here.
- **Social media links** — `siteConfig.social` is empty. The footer only renders profile
  links once added here.
- **Production domain** — `siteConfig.productionUrl` is `null`. Once the domain is final, add
  a canonical `<link>` tag and a `sitemap.xml` to `index.html` / `public/`.
- **Open Graph share image** — `index.html` currently points `og:image` at the small square
  favicon. Replace with a dedicated 1200×630 social preview image once one is designed.
- **Brand fonts** — Manrope (headings) and Inter (body) are referenced in
  `src/styles/_tokens.scss` with a system-font fallback, but no font files are bundled.
  Self-host licensed `.woff2` files (e.g. under `src/assets/fonts/`) and add `@font-face`
  rules to use the brand typefaces instead of the fallback.

## Browser verification

This build was verified with `npm run build` (TypeScript + Vite production build), `npm run
lint`, and `npm run format:check`, all passing with no errors. Browser/automation tooling was
not available in the environment this was built in, so the rendered page was checked via the
dev server's served HTML rather than a visual screenshot — run `npm run dev` and open it in a
browser to confirm the visual result before shipping.
