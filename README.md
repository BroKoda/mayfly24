# Mayfly24 — Corporate Landing Page

A single-page corporate landing site for Mayfly24, built with Vite, React, TypeScript,
Bootstrap 5 and SCSS.

**See `CLAUDE.md`** for full project context — brand/business background, architecture, design
tokens, content/i18n system, standing accessibility/performance requirements, and known gaps —
and `CHANGELOG.md` for the history of how the project got here. This README only covers running
it locally.

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

All four of `typecheck` / `lint` / `format:check` / `build` should pass clean before any change
is considered done — see `CLAUDE.md` §11.
