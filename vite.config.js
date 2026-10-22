import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" keeps asset paths relative, so the build works when hosted from
// a sub-path (e.g. GitHub Pages project sites) as well as a root domain.
export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
  },
  build: {
    target: "es2019",
    assetsInlineLimit: 4096,
  },
});
