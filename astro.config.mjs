import { defineConfig } from 'astro/config';
import { settings } from './src/data/settings';
import sitemap from "@astrojs/sitemap";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: settings.site,
  integrations: [sitemap(), image()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});