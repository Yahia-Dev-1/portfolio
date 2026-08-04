import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isVercel = Boolean(process.env.VERCEL);

export default defineConfig({
  base: isVercel ? "/" : "/portfolio/",
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    outDir: isVercel ? "dist" : "docs",
  },
  resolve: {
    dedupe: ["gsap"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});