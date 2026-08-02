import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Relative base so the built assets resolve correctly whether the site is
  // served at the domain root or under a GitHub Pages project subpath
  // (https://<user>.github.io/<repo>/) — no repo name to configure.
  base: './',
  plugins: [react()],
});
