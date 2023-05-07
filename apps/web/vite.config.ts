/// <reference types="vitest"/>

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import nested from "postcss-nested";
import { resolve } from "path";

const projectRootDir = resolve(__dirname);
const srcDir = resolve(projectRootDir, '/src');

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: `${srcDir}/test/vitest.setup.ts`,
  },
  resolve: {
    alias: {
      "@": srcDir,
    },
  },
  css: {
    postcss: {
      plugins: [nested],
    },
  },
});
