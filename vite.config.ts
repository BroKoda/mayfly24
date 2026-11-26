import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// GitHub Pages serves this project from a subpath (https://brokoda.github.io/mayfly24/), not
// the domain root, so every built asset reference needs that prefix there. Only the GitHub
// Pages deploy workflow (.github/workflows/deploy-gh-pages.yml) sets DEPLOY_BASE_PATH — local
// dev and any future build for a custom domain at the root both keep the default '/' base.
// https://vite.dev/config/
export default defineConfig({
  base: process.env.DEPLOY_BASE_PATH || '/',
  plugins: [react()],
});
