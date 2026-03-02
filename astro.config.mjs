import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import keystatic from '@keystatic/astro';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [react(), keystatic()],

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare()
});