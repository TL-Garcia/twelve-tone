/// <reference types="vitest"/>

import { defineConfig } from "vite";
import solid from 'vite-plugin-solid';
import nested from "postcss-nested";
import { resolve } from "path";

const projectRootDir = resolve(__dirname);
const srcDir = resolve(projectRootDir, '/src');

export default defineConfig({
  plugins: [solid()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: `${srcDir}/test/vitest.setup.ts`,
    transformMode: { web: [/\.[jt]sx?$/] },
    deps: {
      inline: [/solid-js/],
    }
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
