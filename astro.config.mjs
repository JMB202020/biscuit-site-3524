import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/3524',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()],
  },
});
