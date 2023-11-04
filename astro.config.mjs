import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import nodejs from '@astrojs/node';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap()],
  output: "server",
  adapter: node({
    mode: 'middleware',
  }),
});
