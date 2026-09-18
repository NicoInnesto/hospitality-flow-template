import { defineConfig } from "astro/config";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://nicoinnesto.github.io",
  base: "/hospitality-flow-template",
  integrations: [react()],
  devToolbar: {
    enabled: false,
  },
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
});
