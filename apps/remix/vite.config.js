import { vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import { pigment } from '@pigment-css/vite-plugin';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/remix',
  plugins: [remix(), pigment({ theme: {} })],
});
