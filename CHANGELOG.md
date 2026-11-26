# Changelog

Append-only history of what changed, why, and what was decided along the way. Newest entries
go at the top. This is the detailed record; `CLAUDE.md` is the always-loaded summary of
_current_ architecture and conventions — if a change here also changes how something works
going forward, reflect that in `CLAUDE.md` too, not just here.

**Update this file whenever a change, decision, or feature is implemented — and always before
running `git push`**, so the remote history is self-documenting the moment it's shared.

---

## 2026-11-26 — Added Hungarian translation; language switcher now visible

- New `src/i18n/locales/hu/translation.json` — a full Hungarian translation of every string in
  the `en` resource (nav, hero, all section copy, footer). Registered in `src/i18n/index.ts`'s
  `resources` object and added to `SUPPORTED_LANGUAGES` in `src/i18n/languages.ts` as
  `{ code: 'hu', label: 'Magyar' }`.
- Where the English copy was itself adapted from the Brand Model Canvas, the Hungarian
  translation uses that original phrasing rather than re-translating the English back: the
  eight value names (Bizalom, Precizitás, Igényesség, Folyamatos fejlődés, Átláthatóság,
  Kölcsönös tisztelet, Felelősség, Következetesség), the brand key message / Vision closing
  statement ("Mutassuk meg, hogy ezt így is lehet."), and a few technical focus-area terms the
  canvas itself kept in English (`data governance`, `fine-tuning`, `Model Context Protocol`).
- Kept `"status": "current"` / `"status": "evolving"` on the activities pillars untranslated —
  verified by eye (not caught by the type system, see `CLAUDE.md` §4) since these are literal
  values `ActivityCard.tsx` branches on, not display text.
- No component changes were needed to surface this: `LanguageSwitcher` was already wired into
  `Navbar` (desktop + mobile) and was simply rendering nothing while `SUPPORTED_LANGUAGES` had
  only one entry — adding Hungarian is what turned it on, exactly as designed back when i18next
  was first set up.

## 2026-11-26 — Connected remote, pushed to GitHub

- Added remote `origin` → `git@github.com:BroKoda/mayfly24.git` (SSH; verified auth and that
  the remote repo was empty before pushing). Renamed the local default branch `master` → `main`
  to match current GitHub convention before the first push (repo had no other branches/history
  to disturb).
- This is the first push — everything from the baseline snapshot (`202fc69`) onward goes up
  together.

## 2026-11-26 — Consolidate SETUP docs into CLAUDE.md + CHANGELOG.md

- Deleted `SETUP.md`, `SETUP-ANIMATIONS.md`, `SETUP-LAYERING.md` (the three original build
  briefs). Their content — brand/business context, technical constraints, design philosophy —
  is now folded into `CLAUDE.md` (durable reference) and this file (historical record), so nothing
  from them is lost; they were just reorganized for ongoing maintainability.
- Reasoning on _how_ they were merged: not verbatim-concatenated. Facts and constraints that
  are still live guardrails were extracted into `CLAUDE.md`; "suggested" values from the briefs
  that were later superseded by actual implementation (e.g. placeholder shadow/token values)
  were replaced with the real, current values. Nothing substantive was dropped.
- Removed the unused `oxlint` devDependency while auditing the project for this — it was a
  leftover from the original Vite scaffold; ESLint has been the actual lint tool since the very
  first setup pass, `oxlint` was never used (`.oxlintrc.json` and the `oxlint` npm script were
  already removed early on; the package itself just hadn't been uninstalled).

## 2026-11-26 — Extract CopyrightStrip from Footer

- New component `src/components/layout/CopyrightStrip.tsx`, rendered as its own sibling after
  `<Footer />` in `App.tsx` — not nested inside `Footer`, per explicit request.
- Full-width strip using `var(--color-background)` (the page's base color) rather than the
  footer's `--color-surface`, so it reads as a distinct closing band below the slightly lighter
  footer — same visual idea as the sticky nav being its own band above the page content.
- Removed the copyright paragraph + `<hr>` divider from `Footer.tsx`, and deleted the
  now-fully-unused `.divider` SCSS utility class along with it.

## 2026-11-26 — Hide the Contact section (feature flag, nothing deleted)

- Added `siteConfig.features.contact` (defaults to `false`) in `site.config.ts`, plus a
  `CONTACT_HREF` constant (`#contact`) used to identify contact-referencing nav links.
- Single flag now gates: the `<Contact />` section in `App.tsx`; the "Contact" nav link
  (filtered out of both `Navbar` and `Footer`'s rendered list — the underlying content array is
  untouched); the navbar's "Get in touch" CTA (desktop + mobile); Hero's primary CTA ("Build the
  future together"); Community's CTA ("Connect with our community"); Collaboration's CTA
  ("Let's work together"). Hero's secondary CTA ("Discover Mayfly24" → About) is unaffected.
- Nothing was deleted. Flip `features.contact` back to `true` to restore everything at once.
- This was the point `git` was introduced to the project (it had no VCS until this request,
  which needed a "come back to this exact state" safety net). Baseline commit `202fc69` captures
  everything built before this point; see **Git workflow** in `CLAUDE.md`.

## 2026-11-26 — Base background color changed to `#0f1c1c`

- Added a dedicated `$color-background` token (`_tokens.scss`), previously an alias of
  `$color-midnight-forest`. Decoupled on purpose: `$color-midnight-forest` is still used as a
  _text_ color on gold/light surfaces (button labels, `::selection`, skip-link) and shouldn't
  move just because the page background does.
- The sticky nav's translucent overlay (`.site-header`) was updated to derive from the same new
  `$color-background` value, so it doesn't show a visible seam against the new body color when
  scrolling.
- Everything else (accent gold, surfaces, borders, all other text colors, favicons) intentionally
  untouched.

## 2026-11-26 — MayflyAnimation integrated into Hero

- User added `src/components/ui/MayflyAnimation/` (a hand-authored, dependency-free animated SVG
  — gradients + a multi-piece "assembly" animation via `@keyframes` on nested `<g>` elements,
  ~2.25s total, plays once on mount). Fixed a broken import (`./MayflyLogo.scss` → the file is
  actually named `MayflyAnimation.scss`) and formatted the file with Prettier.
- Replaced the static hero `<img>` (a baked PNG/webp export of the mark) with
  `<MayflyAnimation className="hero-wing" />`. Deleted the now-unused
  `mayfly-mark-hero.webp` asset.
- **Deliberately did not** keep the `.hero-image-reveal` class on it (even though literally
  requested) — `.hero-image-reveal` hides an element via `visibility: hidden` for its first
  ~920ms (320ms stagger delay + 600ms fade duration), but CSS animations keep _running_
  underneath `visibility: hidden`, they just aren't painted. The mayfly's own sub-animations
  have no delay and would already be 30–65% through their timeline by the time they became
  visible — i.e. it would pop in mid-formation instead of assembling from the start. Dropped
  the class so the component's own animation plays in full from the moment the page loads
  (which is what was explicitly asked for separately); kept `.hero-wing` for sizing. Removed the
  now-orphaned `.hero-image-reveal` rule from `animations.scss`.
- Decorative treatment preserved: `aria-hidden="true"` moved to the wrapping column div (the
  component's own SVG has `role="img" aria-label="..."`, which would otherwise announce
  redundant content to screen readers right after the H1).

## 2026-11-24 — Initial build (everything through the layering system)

Built in one extended session, each step verified with `typecheck` + `lint` + `format:check` +
`build` before moving on. No git repository existed yet — all of this is captured in the
baseline commit `202fc69` made retroactively once git was introduced (see above).

- **Scaffold**: Vite + React 19 + TypeScript (pinned to stable `5.9.3` — the scaffold's default
  TS 7 native-preview compiler isn't yet compatible with `typescript-eslint`) + Bootstrap 5.3 +
  ESLint (flat config) + Prettier. Full landing page built per the original `SETUP.md` brief:
  all 10 sections, mobile-first Bootstrap layout, brand color tokens overriding Bootstrap
  defaults, accessible skip-link/focus states/single-H1 hierarchy, centralized typed content,
  optimized `.webp` logo assets generated from the supplied `branding/` PNGs. Contact
  email/socials/production domain left `null`/empty (never fabricated) per the brief's explicit
  instruction not to invent unverified information.
- **CSS → SCSS**: converted the plain CSS to a token-driven SCSS architecture
  (`_tokens.scss` partial with color/motion maps + mixins → `variables.scss` generates
  `:root` custom properties via `@each` → `bootstrap-overrides.scss` → `global.scss`). Replaced
  every inline `style={{ ... }}` prop in components with SCSS utility classes. Button
  hover/active shades derived with `color.adjust()` instead of hand-picked hex values.
- **i18next**: added `i18next` + `react-i18next` + `i18next-browser-languagedetector`. Content
  moved from a static `content/en.ts` module into `src/i18n/locales/en/translation.json`,
  consumed via a `useSiteContent()` hook (returns the whole typed resource bundle — most content
  is arrays of objects, not flat strings, so per-key `t()` calls weren't a good fit). A
  `LanguageSwitcher` component exists and is fully wired, but renders nothing while
  `SUPPORTED_LANGUAGES` has fewer than 2 entries — true today (`en` only) — so it stays
  invisible until a second language is genuinely translated, per the original brief's "don't
  show a switcher before translations exist" rule.
- **Animations**: centralized motion tokens (`$motion` map: durations, easing curves,
  distances, stagger). A shared-`IntersectionObserver` hook (`useReveal`) drives scroll-triggered
  reveals (`.reveal`, `.reveal--left/right`, `.reveal-group` with capped stagger, desktop-only).
  Hero gets a separate CSS-keyframe staggered load-time entrance (not scroll-triggered — it's
  always above the fold). Nav-link underline + button hover-lift/press-scale micro-interactions.
  `prefers-reduced-motion` handling includes an accessibility detail: reveal elements are also
  `visibility: hidden` (not just `opacity: 0`) until shown, so a fast keyboard user tabbing on
  load can't focus a control before it's visible; under reduced motion, content is shown
  immediately rather than waiting on `IntersectionObserver` at all.
- **Layering**: surface hierarchy (base < section < raised < featured), extending the same
  token-map pattern. `.surface-raised` applied to the three existing card-like boxes
  (`ActivityCard`, Collaboration's focus-areas panel, Community's initiatives panel) replacing
  Bootstrap's `!important`-flagged `.border` utility. `.surface-featured` and `.elevation-hover`
  were fully defined per the brief but **not applied anywhere** — no existing box is clearly
  "more important" than the other three, and the brief explicitly forbids wrapping
  previously-unboxed content just to exercise the system. Caught and fixed a real accessibility
  regression here: computed actual WCAG contrast ratios (not eyeballed) and found the existing
  secondary-text color only cleared 3.34:1 against the new raised surface (needs 4.5:1) —
  added `$color-text-secondary-elevated` (lightened 18%, verified ≥4.7:1) and scoped it via a
  locally-redeclared `--color-text-secondary` inside `.surface-raised`/`.surface-featured`, so
  every consumer is fixed automatically with no per-component changes.
