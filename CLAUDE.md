# Mayfly24 Landing Page — Project Context

This file is the authoritative, always-loaded context for working on this repo. Read it in
full before making changes. For the detailed history of _why_ things ended up this way, see
`CHANGELOG.md` (not auto-loaded — read it when you need the backstory on a specific decision,
or before a `git push`). Day-to-day developer commands (install, dev server, scripts) are in
`README.md`; this file covers architecture, conventions, brand context, and standing rules.

**Keep this file and `CHANGELOG.md` current.** Whenever you implement a feature, make a
non-trivial change, or resolve a question/decision with the user:

- Add an entry to `CHANGELOG.md` (newest at the top) describing what changed and why.
- If it changes architecture, conventions, tokens, feature flags, or known gaps, update the
  relevant section of _this_ file too — this file should always describe the **current** state,
  not a point-in-time snapshot.
- **Before every `git push`**, make sure both files are up to date with the commits being
  pushed, and commit those doc updates themselves (so the pushed history is self-documenting).

---

## 1. What this is

A single-page corporate landing site for **Mayfly24**, an education- and community-driven IT
organisation (strong AI focus) based in Hungary, building toward international reach. This is
an informational/marketing site — not a SaaS app, not an admin platform, not a CMS.

### Brand / business context (from the Brand Model Canvas)

Mayfly24 connects two pillars:

- **Education & community** (current, active): practical AI/IT training, AI Club, Business
  Breakfast events, conferences, professional + personal community building.
- **Business & professional collaboration** (evolving, not yet fully operational): building
  professional relationships, shared-project opportunities, transparent project coordination,
  connecting independent professionals, local + international collaboration.

**Mission**: Connect professionals committed to development and help them use AI and emerging
technology consciously, practically and responsibly; build a supportive community and a
transparent environment for collaboration.

**Vision (3-year horizon)**: a sustainable, interconnected professional community with regular
education, strong human relationships, high professional standards, and growing access to
international projects. "Start locally, think internationally." Longer-term, more speculative
possibilities mentioned in the brand materials: talent incubation, international practice
exchange, research, additional physical community spaces, a possible joint company.

**Core values**: Trust, Precision, Professional excellence, Continuous development,
Transparency, Mutual respect, Responsibility, Consistency.

**Brand message** (Hungarian original: _"Mutassuk meg, hogy ezt így is lehet."_): **"Let's show
there's a better way."**

**Target audiences**: (1) technology professionals — developers, freelancers, consultants, AI
practitioners; (2) businesses — entrepreneurs, SMEs, enterprises interested in responsible AI
adoption; (3) education/community — students, schools, institutions, young professionals.

**Areas of professional interest** (positioned as developing expertise, not established
commercial services): AI agents, Model Context Protocol, local/open-source AI, data security &
governance, fine-tuning, modern IT practices.

**Important framing rule, still in force**: distinguish clearly between what's _already
operational_ (the education/community pillar) and what's _still evolving_ (the business
pillar). Never present planned/future initiatives as already-established services. Never invent
company information, team members, clients, testimonials, statistics, partnerships, or contact
details — the brand materials didn't supply them, so the site doesn't display them (see
§6 Known gaps).

### Visual identity

- Palette is intentionally earthy/conservative, not a generic "AI startup" gradient aesthetic.
  Avoid: neon colors, purple/blue AI gradients, robot illustrations, generic AI-generated human
  imagery, excessive glassmorphism, heavy drop shadows, repetitive card grids, oversized
  shadows, bright glowing borders.
- Visual inspiration: geometric mayfly wings, fine wing-vein patterns, abstract polygonal
  structures, flowing mathematical lines, natural light at dusk. The mark/logo embodies this —
  see `src/components/ui/MayflyAnimation/`.
- Typography: geometric sans-serif, headings (Manrope) + body (Inter), system-font fallback.
  **Not currently self-hosted** — see §6 Known gaps.
- `branding/` at the repo root holds the original source assets (logo PNGs, the Brand Model
  Canvas PDF) — reference material, not consumed directly by the app (the app uses optimized
  `.webp` derivatives in `src/assets/logos/`).

---

## 2. Tech stack — mandatory, with hard "do not introduce" list

**Stack**: Vite, React 19 (functional components only), TypeScript (strict mode), Bootstrap 5
(native grid/utilities — not reimplemented in custom CSS), SCSS, ESLint (flat config) +
Prettier, i18next + react-i18next, npm.

**Do not introduce**: Next.js, Tailwind, Material UI/Shadcn/any component framework on top of
Bootstrap, jQuery, Redux or other global state libraries, React Router (this is a single-page
site — all navigation is anchor scrolling), heavy animation libraries (Framer Motion, GSAP,
Animate.css, AOS, React Spring — motion is hand-rolled CSS, see §4), analytics/tracking scripts,
unnecessary backend services.

**Scope restrictions that still apply**: no additional pages, no auth/user accounts, no
dashboards, no databases/CMS, no payments/e-commerce, no booking system, no blog, no chatbots,
no "AI-powered" site functionality. This is deliberately a lightweight, static-hostable landing
page. Don't add features outside what's asked.

**One resolved tension worth knowing about**: the original brief said "do not introduce a full
internationalisation dependency unless necessary" and "do not show a language switcher until
translations exist." The user later explicitly asked for i18next, which is now installed and
fully wired (§4), and for a Hungarian translation, which is what made the switcher start
rendering (two languages now exist). The "don't show a switcher prematurely" rule did its job in
the meantime — it was invisible while only `en` existed — but the "avoid the dependency" caution
is superseded; i18next is correctly part of the stack now.

---

## 3. Directory structure

```
branding/                  Source brand assets (logo PNGs, Brand Model Canvas PDF) — reference only
public/                    favicon*.png, robots.txt
src/
  assets/logos/            Optimized .webp logo derivatives actually used by the app
  components/
    layout/                Navbar, Footer, CopyrightStrip — each its own component, not nested
    sections/              One component per landing-page section (Hero, About, Activities,
                            Community, Collaboration, Values, Vision, Contact)
    ui/                     Shared presentational primitives: BrandButton, SectionHeading,
                            ActivityCard, ValueItem, LanguageSwitcher, MayflyAnimation/
                            (the one component with a co-located .scss — see §4)
  config/site.config.ts     SECTION_IDS (anchor ids), CONTACT_HREF, siteConfig (contact/social/
                            production-domain config, feature flags)
  hooks/useReveal.ts        Shared-IntersectionObserver scroll-reveal hook
  i18n/                     i18next setup, SUPPORTED_LANGUAGES config, locale resource JSON,
                            useSiteContent() hook
  lib/storage.ts            Namespaced localStorage wrapper — register new persisted keys here
                            (see §4), not via ad hoc localStorage calls elsewhere
  styles/                   SCSS — see §5 for the exact file-by-file breakdown
  types/content.types.ts    SiteContent and all nested content interfaces
  App.tsx, main.tsx
```

### Component conventions

- Functional components, named exports (`export function Foo() {}`), one component per file.
  **Exception**: `MayflyAnimation` uses a default export — the user authored that component
  directly and has a preference for default export there; don't "fix" it back to named export.
- All user-facing copy comes from `useSiteContent()` (never hardcoded in a component) — see §4.
- Repeated content renders via array mapping with stable keys (never array index).
- No component-level inline `style={{ ... }}` — add a class to the relevant stylesheet instead
  (see §5). This was a deliberate cleanup pass; don't reintroduce inline styles for convenience.
- Layout components (`Navbar`, `Footer`, `CopyrightStrip`) are intentionally separate,
  independently-rendered components in `App.tsx` — don't nest one inside another "for
  convenience" (this was an explicit instruction once already, re: `CopyrightStrip`).

---

## 4. Content & internationalisation

Copy lives in `src/i18n/locales/<lang>/translation.json`, typed end-to-end via `SiteContent`
(`src/types/content.types.ts`). Components call `useSiteContent()` (`src/i18n/useSiteContent.ts`)
which returns the _entire_ typed resource bundle for the active language — most content is
arrays of objects (card lists, value lists), not flat strings, so per-key `t('key')` calls
weren't the right fit; this hook pattern was a deliberate choice over idiomatic i18next usage.
**Caveat**: the hook gets there via `i18n.getResourceBundle(...) as SiteContent` — a type
assertion, not a structural check, so a locale JSON file that's missing a field or has a typo'd
literal (e.g. a `"status"` value, see below) will **not** be caught by `tsc`. Eyeball a new
locale file against `SiteContent` and the `en` version when adding one.

- `src/i18n/index.ts` initializes `i18next` + `react-i18next` + `i18next-browser-languagedetector`
  (detection order: `localStorage` → `navigator`, fallback `en`), exporting `i18nReady` — a
  promise `main.tsx` awaits before the first render, so content is never read before resources
  are loaded. The detector's `lookupLocalStorage` option is set to
  `getStorageKey(STORAGE_KEYS.language)` (`src/lib/storage.ts`, see below) rather than left at
  its default (`i18nextLng`) — persistence itself is still handled entirely by the
  well-tested detector library (it already calls `cacheUserLanguage()` automatically on every
  `i18n.changeLanguage()`, confirmed by reading its source — nothing custom was built to persist
  the language), this just namespaces _which key_ it writes to.
- `src/i18n/languages.ts` — `SUPPORTED_LANGUAGES` only lists languages with a **complete**
  translation. Today: `en` (English) and `hu` (Hungarian, label `Magyar`).
- `LanguageSwitcher` (`components/ui/`) renders a compact segmented toggle — a `role="group"`
  of `<button>`s (one per `SUPPORTED_LANGUAGES` entry, `aria-pressed` on the active one,
  `aria-label` set to the full language name since the visible label is just the short code,
  e.g. `EN`/`HU`) — **not** a native `<select>`, so it can be styled precisely and read as a
  deliberate control rather than browser chrome. Still generalizes to any number of languages,
  not just two. Static shape/colors live in `global.scss` (`.language-switcher`,
  `.language-switcher__option`); hover/transition/reduced-motion behavior lives in
  `animations.scss` alongside the rest of the site's interactive motion (not co-located with the
  static styles) — that split mirrors how `.navbar .nav-link` is handled. Renders nothing while
  `SUPPORTED_LANGUAGES.length < 2` — now that there are two, it's visible in `Navbar` (desktop +
  mobile); no component change was needed to turn it on when Hungarian was added.

**Adding a new language**: add `src/i18n/locales/<code>/translation.json` (same shape as the
`en` one / `SiteContent`), import it into the `resources` object in `src/i18n/index.ts`, add
`{ code, label }` to `SUPPORTED_LANGUAGES`. No layout/section component needs to change.
Serbian is the one language Mayfly24 communicates in (per the brand materials) that isn't
covered yet — the likely next one to add.

**Hungarian translation notes** (`src/i18n/locales/hu/translation.json`): where the English copy
was itself an adaptation of phrasing from the Brand Model Canvas (the eight value names, the
brand key message/Vision closing statement "Mutassuk meg, hogy ezt így is lehet.", a few
technical focus-area terms the canvas itself kept in English — `data governance`, `fine-tuning`,
`Model Context Protocol`), the Hungarian translation uses that original authentic phrasing
rather than re-translating the English back into Hungarian. `"status"` on each activities pillar
(`"current"` / `"evolving"`) is a literal TypeScript union value consumed by `ActivityCard.tsx`
logic, **not display text** — it must stay exactly `current`/`evolving` in every locale file;
this isn't caught by the type system (see the `as SiteContent` caveat above), so check it by eye
when adding a locale.

**Nav/CTA `href` values** (e.g. `"#about"`) are literal strings in the JSON, matching
`SECTION_IDS` in `site.config.ts` — they're structural, not translated text, so if you ever
rename a `SECTION_IDS` value, update the literal hrefs in every locale file too (a known, small,
accepted duplication — keeps the JSON resources plain data rather than requiring computed hrefs).

### Local storage

`src/lib/storage.ts` is the **only** place that should call `window.localStorage` directly —
route any new persisted setting through it rather than reaching for `localStorage` ad hoc in a
component. It's deliberately small:

- `STORAGE_KEYS` — a registry object (currently just `{ language: 'language' }`); add new
  settings here first, as a key, not as a scattered literal string.
- `getStorageKey(key)` — returns the full, namespaced key (`"mayfly24:" + key`), for wiring a
  registered key into something that needs the literal key name rather than going through the
  getters/setters below (e.g. `i18next-browser-languagedetector`'s `lookupLocalStorage` option).
- `getStoredValue` / `setStoredValue` / `removeStoredValue` — defensive (try/catch; private
  browsing, a full quota, or `localStorage` being disabled all fail silently) typed get/set/remove
  for everything else. No persisted setting should ever be required for the page to function.

Language persistence specifically still flows entirely through
`i18next-browser-languagedetector` (it already listens for language changes and writes to its
configured cache automatically — verified by reading the library's source, not assumed); the
`language` key above only tells it _which_ localStorage key to use, not a reimplementation of
its read/write logic.

---

## 5. Styling (SCSS) — file-by-file

Import order in `main.tsx` matters (each builds on custom properties the previous one defines):
`bootstrap.min.css` → `variables.scss` → `bootstrap-overrides.scss` → `global.scss` →
`animations.scss` → `layering.scss`.

- **`_tokens.scss`** (Sass partial, `@use`'d by the others, never compiled standalone): single
  source of truth for raw brand colors, semantic color map, surface/border/shadow maps, the
  motion map, and shared mixins (`heading-font`, `marker`, `stagger-children`) + the
  `rgb-triplet()` function. **Always add new design values here first**, as a map entry, not as
  a one-off hardcoded value in a component stylesheet.
- **`variables.scss`**: generates every runtime CSS custom property (`--color-*`, `--font-*`,
  `--motion-*`, `--surface-*`, `--shadow-*`) from the token maps via `@each` loops. One
  definition per value; nothing is hand-duplicated.
- **`bootstrap-overrides.scss`**: remaps Bootstrap's own CSS variables onto the brand tokens
  (`--bs-primary`, `--bs-btn-*`, `--bs-navbar-*`, etc.) instead of Bootstrap's default blue
  theme. Button hover/active shades are derived with `color.adjust()`, not hand-picked hex.
- **`global.scss`**: resets, layout utilities (`.container-brand`, `.section`, `.section-surface`),
  shared presentational classes (`.font-heading`, `.hero-headline`, `.vision-statement`,
  `.dot-accent`, `.marker-diamond`, `.status-badge`, `.site-header`, `.copyright-strip`, etc.) —
  these exist specifically so components don't need inline styles.
- **`animations.scss`**: see §7.
- **`layering.scss`**: see §8.
- **`src/components/ui/MayflyAnimation/MayflyAnimation.scss`**: the one co-located
  component-specific stylesheet in the project, intentional exception to centralizing in
  `src/styles/` — it's a self-contained, highly specific widget (gradient defs + 5 named
  keyframes tightly coupled to that one SVG's internal class names). Don't move it into
  `src/styles/` "for consistency"; don't add other components' styles here either.

**Convention going forward**: need a new reusable visual treatment? Add a class to the
appropriate `src/styles/*.scss` file (reusing existing mixins/tokens where it fits). Don't
reach for inline `style={{ }}` props, and don't hardcode a color/shadow/duration that already
has a token.

---

## 6. Design tokens (current actual values)

### Colors

| Token                                                | Value                      | Role                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$color-midnight-forest` / `--color-midnight-forest` | `#182522`                  | Brand swatch — used as **text** color on gold/light surfaces (button labels, `::selection`, skip-link). Not the page background (see next row).                                                                                                                                                                                                                                                                                                                |
| `$color-background` / `--color-background`           | `#0f1c1c`                  | The actual page background. Deliberately a _separate_ variable from Midnight Forest (see `CHANGELOG.md`, 2026-11-26) so it can move independently of the brand-swatch text color.                                                                                                                                                                                                                                                                              |
| `--color-surface`                                    | `#203029`                  | Level 1 — section-level background (`.section-surface`).                                                                                                                                                                                                                                                                                                                                                                                                       |
| `--color-surface-raised`                             | `#2a3e3e`                  | Level 2 — elevated card surface (`.surface-raised`).                                                                                                                                                                                                                                                                                                                                                                                                           |
| `$color-still-water` / `--color-still-water`         | `#344b50`                  | Also aliased as `--surface-featured` (Level 3, defined but unused — see §8).                                                                                                                                                                                                                                                                                                                                                                                   |
| `--color-evening-sky`                                | `#788f9b`                  | Secondary text — **only on base/section backgrounds**, see next row.                                                                                                                                                                                                                                                                                                                                                                                           |
| `--color-text-secondary-elevated`                    | Evening Sky +18% lightness | Secondary text _specifically on_ `.surface-raised`/`.surface-featured` — the un-lightened tone fails WCAG AA there (verified: 3.34:1 / 2.73:1, needs 4.5:1). `.surface-raised`/`.surface-featured` locally redeclare `--color-text-secondary` to this value, so every consumer (card text, `.status-badge`) is fixed automatically — **don't** use the plain `--color-text-secondary` value on a raised/featured surface without going through that mechanism. |
| `--color-mayfly-bronze`                              | `#8b654a`                  | Accent — used sparingly for geometric details.                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `--color-muted-gold` / `--color-accent`              | `#bfa06c`                  | Primary accent + CTA color.                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `--color-twilight-sand`                              | `#e5dcd0`                  | Primary text color.                                                                                                                                                                                                                                                                                                                                                                                                                                            |

### Typography

Headings: Manrope. Body: Inter. System-font fallback chain in place; **brand fonts are not
self-hosted yet** (see §9).

### Motion (`$motion` map → `--motion-*`)

`duration-fast` 150ms · `duration-normal` 250ms · `duration-slow` 400ms · `duration-reveal` 600ms
· `ease-default` `cubic-bezier(0.4,0,0.2,1)` · `ease-out` `cubic-bezier(0.22,1,0.36,1)` ·
`distance-xs/sm/md/lg` 4/8/16/24px · `stagger` 80ms (capped at `stagger-cap` 300ms) ·
`hover-scale` 1.025 · `active-scale` 0.98.

### Shadows (`$shadows` map → `--shadow-*`)

Layered (contact shadow + ambient shadow), never a single harsh drop shadow:
`--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-inset` (a 1px upper-edge highlight),
`--shadow-none`. Lighting direction is consistently "from above" — don't introduce a shadow
that implies a different light source.

---

## 7. Animation system

Philosophy (from the original brief, still the standard to hold new motion to): _"Motion
should communicate precision, not spectacle... When in doubt, use less."_ Not every element
needs an animation — informational, non-interactive content (value list, activity card body
text) stays static after its initial reveal; movement is reserved for things that are either
entering the page or are genuinely interactive.

- **Load-time entrance** (not scroll-triggered — always above the fold): `.site-header` fades/
  slides in; `.hero-reveal` staggers its 4 direct children (label → headline → copy → CTA row)
  via CSS keyframes + `animation-delay`.
- **`MayflyAnimation`** (the hero's SVG mark) has its **own independent** ~2.25s assembly
  animation (plays once on mount, no delay). It is deliberately **not** wrapped in any of the
  reveal/entrance classes below — see `CHANGELOG.md` (2026-11-26) for why combining it with
  `.hero-image-reveal` would have clipped most of its animation behind `visibility: hidden`.
  If you ever touch the Hero's visual column again, keep it that way.
- **Scroll-triggered reveal**: `useReveal()` (`src/hooks/useReveal.ts`) is a ref-returning hook
  backed by **one shared `IntersectionObserver`** (not one per element) — adds `.is-visible`
  the first time ~12% of an element enters the viewport, then stops observing it (animates once
  per page visit). Falls back to showing content immediately if `IntersectionObserver` is
  unavailable.
  - `.reveal` / `.reveal--left` / `.reveal--right` — single-element fade + translate.
    `--left`/`--right` are used sparingly (only the two-column Community/Collaboration side
    panels), not as a default — most reveals use plain `.reveal` (up).
  - `.reveal-group` — a container whose direct children stagger in together (card grids,
    bulleted lists). Stagger only applies at ≥768px (where these groups actually sit
    side-by-side); mobile stacks reveal together, no stagger.
- **Micro-interactions**: button hover (subtle lift + `--shadow-sm`, `.btn:active` press-scale),
  nav-link underline via `::after` + `transform: scaleX()` (never animates width/layout).
- **Accessibility details worth preserving**:
  - Reveal/entrance elements are `visibility: hidden` (not just `opacity: 0`) until shown, so a
    keyboard user tabbing immediately on load can't focus a control before it's visible.
    (Relies on the browser holding a keyframe's non-interpolable `visibility` value until the
    step it's declared on.)
  - `prefers-reduced-motion: reduce` disables all of the above and shows content **immediately**
    — not gated behind `IntersectionObserver` firing at all, per the original brief's explicit
    "display reveal elements immediately" requirement.

---

## 8. Layering / surface hierarchy

Four-level surface hierarchy, lightest-touch-first: **Level 0** base (page background) → **Level
1** section (`.section-surface`, no shadow/border needed) → **Level 2** raised (`.surface-raised`
— card backgrounds, soft shadow + subtle border + inset highlight) → **Level 3** featured
(`.surface-featured` — stronger shadow + more visible border + restrained gradient).

- `.surface-raised` is applied to the three existing card-like boxes: `ActivityCard`,
  Collaboration's "Areas of professional interest" panel, Community's "Initial community
  initiatives" panel. It replaced Bootstrap's `.border` utility (which carries `!important` and
  would otherwise fight a custom border color).
- `.surface-featured` and `.elevation-hover` are **fully defined but intentionally applied
  nowhere**. No existing box on the page is clearly "more important" than the other three
  raised ones, and the original brief explicitly forbids wrapping previously-unboxed content
  just to exercise the elevation system. If a genuinely standout container shows up later
  (e.g. a single highlighted CTA block), reach for `.surface-featured` / `.elevation-hover`
  rather than defining something new.
- `.elevation-sm/md/lg` are standalone shadow-only utilities, also available for reuse.

---

## 9. Known gaps / intentionally unset

These are deliberately left unset because the source brand materials never supplied verified
values — **never invent a value for these**; the site simply omits the corresponding UI until a
real value is supplied:

- **Contact email** — `siteConfig.contact.email` is `null`. Footer only renders a `mailto:`
  link once set. (Also see the feature flag below — the whole Contact section is currently
  hidden regardless.)
- **Social media links** — `siteConfig.social` is empty; Footer only renders profiles once added.
- **Production domain** — `siteConfig.productionUrl` is `null`. Once known, add a canonical
  `<link>` tag and a `sitemap.xml`.
- **Open Graph share image** — `index.html`'s `og:image` currently points at the small square
  favicon. Needs a dedicated 1200×630 social preview image once designed.
- **Brand fonts not self-hosted** — Manrope/Inter are referenced by name with a system-font
  fallback; no licensed `.woff2` files are bundled yet.

### Feature flags

- **`siteConfig.features.contact`** (`src/config/site.config.ts`) — currently `false`. Hides
  the Contact section and every nav link/CTA that points to it (see `CHANGELOG.md`, 2026-11-26,
  for the full list of what it gates). Flip to `true` to restore all of it at once; nothing was
  deleted to implement this.

---

## 10. Accessibility & performance — standing requirements

These were requirements from the original build and remain the bar for any future change:

- Semantic HTML (`header`/`nav`/`main`/`section`/`footer`), exactly one `<h1>` (Hero), logical
  heading hierarchy, skip-to-content link, visible focus states, WCAG 2.2 AA contrast
  (**compute it, don't eyeball it** — see the §6 text-secondary-elevated story and the
  `CHANGELOG.md` 2026-11-24 entry for why this matters; a quick Node script with the real sRGB→
  relative-luminance formula is worth the two minutes).
- Purely decorative SVGs/images: `aria-hidden="true"` (+ empty `alt` on `<img>`s). The
  `MayflyAnimation` SVG has its own `role="img" aria-label="..."` internally — when it's used
  decoratively (as in Hero), put `aria-hidden="true"` on a _wrapping_ element, since
  `aria-hidden` on an ancestor suppresses the whole subtree regardless of the SVG's own
  role/label.
- Mobile-first Bootstrap grid; no custom media queries where a Bootstrap utility already
  covers it; no horizontal overflow at any width from 320px–2560px.
- Images: explicit width/height (or a CSS `aspect-ratio`) to avoid layout shift; lazy-load
  below-the-fold images, never the above-the-fold hero visual.
- No unnecessary dependencies, no `transition: all`, explicit transition properties only,
  animate `transform`/`opacity` (not layout-affecting properties).

---

## 11. Quality gates — run before considering any change done

```bash
npm run typecheck     # tsc -b, strict mode
npm run lint           # eslint .
npm run format:check   # prettier --check . (run `npm run format` first if this fails)
npm run build          # tsc -b && vite build — the real end-to-end check
```

All four must pass clean. This project has no test suite — these four commands plus a manual
`npm run dev` check are the full verification surface. If you changed anything visual and have
browser tooling available, actually look at it; if you don't, say so explicitly rather than
claiming visual confirmation you don't have.

---

## 12. Git workflow

**Do not commit automatically after implementing a change or feature.** (2026-11-26 — explicit
standing instruction, previously the default behavior and the user asked for it to stop.) Make
the change, run the quality gates (§11), leave the working tree as uncommitted changes, and say
so — the user wants to see the diff and review it themselves before anything is committed. Only
commit when the user explicitly asks you to (a specific request, or something unambiguous like
"commit this"). The same applies to `git push`: never push without an explicit, current request
for that push — an earlier approval to commit/push does not carry forward to later changes.

Git was **not** initialized from the start of this project — it was introduced mid-project
(2026-11-26) specifically because the user wanted a "come back to this exact state" safety net
before a risky-feeling change. `202fc69` ("Baseline snapshot before background color change")
captures everything built before that point in one commit. Before the no-auto-commit rule above
was introduced, the convention had been **one logical change per commit**, with a descriptive
message explaining the _why_, not just the _what_ — keep following that same granularity and
message style on whatever the user asks you to commit, so git history and `CHANGELOG.md` keep
telling a consistent story.

**Remote**: `git@github.com:BroKoda/mayfly24.git` (SSH), default branch `main`. Before every
`git push`, update `CLAUDE.md`/`CHANGELOG.md` per the instruction at the top of this file, and
commit those doc updates as part of (or immediately before) the push.
