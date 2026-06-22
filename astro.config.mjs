// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://junagent.github.io',
  base: '/ai-tools-hub',
  integrations: [react()],
  prefetch: true,
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});