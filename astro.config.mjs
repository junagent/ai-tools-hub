// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://junagent.github.io',
  base: '/ai-tools-hub',
  integrations: [react(), mdx(), sitemap()],
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