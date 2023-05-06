import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import nested from "postcss-nested";
import { resolve } from "path";

const projectRootDir = resolve(__dirname);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(projectRootDir, "/src"),
    },
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [nested],
    },
  },
});
