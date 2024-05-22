import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://m-w1995.github.io',
  base: 'pizzalova',
  integrations: [preact(), tailwind()]
});