// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro as nitroPlugin } from "nitro/vite"; // 👈 Clean ES import instead of require

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  // Automatically switches Nitro output to Vercel when deployed on Vercel, 
  // keeping the Lovable sandbox and local environments working perfectly.
  nitro: process.env.VERCEL ? true : false,
  tanstackStart: {
    server: { entry: "server" },
  },
  // 🔽 Inject the vercel preset plugin safely when running on Vercel's build machines
  vite: {
    plugins: [
      ...(process.env.VERCEL 
        ? [
            nitroPlugin({
              preset: "vercel",
            })
          ]
        : [])
    ]
  }
});