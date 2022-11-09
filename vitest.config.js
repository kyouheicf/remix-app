/// <reference types="vitest" />
/// <reference types="vite/client" />

const react = require("@vitejs/plugin-react").default;

const { defineConfig } = require("vite");

const tsconfigPaths = require("vite-tsconfig-paths").default;

module.exports = defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: ["./test/setup-test-env.js"],
    include: ["./app/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    watchExclude: [
      ".*\\/node_modules\\/.*",
      ".*\\/build\\/.*",
      ".*\\/postgres-data\\/.*",
    ],
  },
});
