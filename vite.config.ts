import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  // 1. Sets the production asset path prefix to the deployment root
  base: "/", 
  build: {
    outDir: "dist",
    // 2. Specifies the directory under 'dist' where compiled CSS/JS are emitted
    assetsDir: "assets", 
  },
});