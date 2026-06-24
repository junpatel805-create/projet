// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  // Automatically switches Nitro output to Vercel when deployed on Vercel, 
  // keeping the Lovable sandbox and local environments working perfectly.
  nitro: process.env.VERCEL ? true : false,
  tanstackStart: {
    server: { entry: "server" },
  },
  // 🔽 Safely handle the Nitro Vercel target injection via a dynamic async loader hook
  vite: {
    plugins: [
      {
        name: "vercel-nitro-injector",
        async configResolved() {
          if (process.env.VERCEL) {
            const { nitro } = await import("nitro/vite");
            // Injecting the Vercel compilation layer cleanly
            nitro({ preset: "vercel" });
          }
        }
      }
    ]
  }
});