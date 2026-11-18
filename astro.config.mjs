import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import AutoImport from 'astro-auto-import';
import { defineConfig, sharpImageService } from 'astro/config';

export default defineConfig({
  site: 'https://ghlbangladesh.com',
  trailingSlash: 'never',
  redirects: {
    '/about': '/community',
    '/teams': '/community',
    '/donation': '/community',
    '/reviews': '/community',
    '/programs': '/events',
    '/blog': '/resources',
  },
  image: { service: sharpImageService() },
  vite: { plugins: [tailwindcss()] },
  integrations: [
    react(), sitemap(),
    AutoImport({ imports: ['@/shortcodes/Button', '@/shortcodes/Accordion', '@/shortcodes/Notice', '@/shortcodes/Video', '@/shortcodes/Youtube', '@/shortcodes/Tabs', '@/shortcodes/Tab'] }),
    mdx(),
  ],
  markdown: { shikiConfig: { theme: 'one-dark-pro', wrap: true } },
});
