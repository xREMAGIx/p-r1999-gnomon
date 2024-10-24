// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import mdx from "@astrojs/mdx";
import remarkDirective from "remark-directive";
import { effectPlugin } from "./src/scripts/effect-plugin.mjs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    alpinejs(),
    mdx({
      remarkPlugins: [effectPlugin, remarkDirective],
    }),
  ],
  devToolbar: {
    enabled: false,
  },
});
