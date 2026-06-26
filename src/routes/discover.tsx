import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { ProCard } from "@/components/ProCard";
import { professionals, categories } from "@/lib/mock-data";
import { Map, SlidersHorizontal, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const mapImage = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 420">
  <rect width="800" height="420" fill="#eff6ff"/>
  <rect x="40" y="40" width="720" height="340" rx="28" fill="#ffffff" stroke="#dbeafe" stroke-width="4"/>
  <path d="M120 120 L220 120 L260 160 L340 160 L380 120 L460 120" fill="none" stroke="#93c5fd" stroke-width="18" stroke-linecap="round"/>
  <path d="M180 220 L260 220 L300 260 L380 260 L420 220 L500 220" fill="none" stroke="#bfdbfe" stroke-width="14" stroke-linecap="round"/>
  <path d="M140 280 L220 280 L260 240 L320 240 L360 280 L440 280" fill="none" stroke="#c7d2fe" stroke-width="10" stroke-linecap="round"/>
  <rect x="120" y="60" width="120" height="40" rx="12" fill="#eef2ff"/>
  <rect x="520" y="80" width="140" height="36" rx="10" fill="#eef2ff"/>
  <circle cx="180" cy="110" r="10" fill="#2563eb"/>
  <circle cx="380" cy="140" r="10" fill="#2563eb"/>
  <circle cx="340" cy="240" r="10" fill="#2563eb"/>
  <circle cx="520" cy="195" r="10" fill="#2563eb"/>
  <text x="100" y="330" fill="#3b82f6" font-family="Inter, sans-serif" font-size="24" font-weight="700">Map preview</text>
</svg>
`)}`;

export const Route = createFileRoute("/discover")({
  head: () => ({ meta: [{ title: "Find professionals — Servio" }] }),
  component: Discover,
});

function Discover() {
  return (
    <AppShell>
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Find professionals</h1>
          <p className="text-sm text-muted-foreground">{professionals.length * 350}+ vetted pros across all categories.</p>
        </div>
        <Button variant="outline" className="gap-2"><Map className="h-4 w-4" /> View on map</Button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        {/* Filters */}
        <aside className="rounded-2xl border border-border bg-card p-5 shadow-soft h-fit lg:sticky lg:top-20">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold">Filters</h2>
            <button className="text-xs text-primary hover:underline">Clear all</button>
          </div>

          <FilterSection title="Category">
            <div className="space-y-2">
              {categories.slice(0, 6).map((c) => (
                <label key={c.name} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="h-4 w-4 rounded border-border accent-primary" />
                  <span>{c.name}</span>
                  <span className="ml-auto text-xs text-muted-foreground">{c.count}</span>
                </label>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Hourly rate">
            <div className="px-1">
              <input type="range" min="10" max="300" defaultValue="120" className="w-full accent-primary" />
              <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                <span>$10</span><span>$300+</span>
              </div>
            </div>
          </FilterSection>

          <FilterSection title="Distance">
            <select className="h-9 w-full rounded-lg border border-input bg-background px-2 text-sm">
              <option>Within 5 miles</option>
              <option>Within 10 miles</option>
              <option>Within 25 miles</option>
              <option>Anywhere</option>
            </select>
          </FilterSection>

          <FilterSection title="Availability">
            {(["Available now", "This week", "Next week"]).map((a) => (
              <label key={a} className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="h-4 w-4 rounded border-border accent-primary" />
                {a}
              </label>
            ))}
          </FilterSection>

          <FilterSection title="Rating">
            <div className="space-y-2">
              {[5, 4, 3].map((r) => (
                <label key={r} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" className="h-4 w-4 rounded border-border accent-primary" />
                  {r}.0 & up
                </label>
              ))}
            </div>
          </FilterSection>

          <FilterSection title="Verified only">
            <label className="flex items-center justify-between text-sm">
              <span>Verified pros</span>
              <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-border accent-primary" />
            </label>
          </FilterSection>
        </aside>

        {/* Results */}
        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-card p-3 shadow-soft">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-9" placeholder="Try 'plumber', 'react developer', 'wedding photographer'" />
            </div>
            <select className="h-9 rounded-lg border border-input bg-background px-3 text-sm">
              <option>Sort: Best match</option>
              <option>Top rated</option>
              <option>Lowest price</option>
              <option>Closest</option>
            </select>
            <Button variant="outline" size="sm" className="gap-2 lg:hidden"><SlidersHorizontal className="h-4 w-4" /> Filters</Button>
          </div>

          {/* Map image */}
          <div className="mb-4 hidden h-40 overflow-hidden rounded-2xl border border-border bg-card shadow-soft md:block">
            <img
              src={mapImage}
              alt="Map preview"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
            {professionals.map((p) => <ProCard key={p.id} pro={p} />)}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border py-4 first:border-t-0 first:pt-0">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
