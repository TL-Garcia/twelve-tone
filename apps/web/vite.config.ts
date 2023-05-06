import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import nested from "postcss-nested";
import StylelintPlugin from "vite-plugin-stylelint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), StylelintPlugin()],
  css: {
    postcss: {
      plugins: [nested],
    },
  },
});
