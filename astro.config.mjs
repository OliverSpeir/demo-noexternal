// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: "standalone",
  }),
  vite: {
    ssr: {
      // set to true and you won't need the node_modules in the server folder
      noExternal: undefined,
    },
  },
});
