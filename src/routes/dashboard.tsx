import { createFileRoute, Link } from "@tanstack/react-router";
import { AppShell } from "@/components/AppShell";
import { jobs, professionals, notifications, proposals } from "@/lib/mock-data";
import {
  Briefcase, FileText, DollarSign, Star, ArrowUpRight, MoreHorizontal,
  Bell, Bookmark, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Servio" }] }),
  component: Dashboard,
});

const stats = [
  { label: "Active jobs", value: "4", change: "+1", icon: Briefcase, tint: "text-primary bg-primary/10" },
  { label: "Open proposals", value: "23", change: "+8", icon: FileText, tint: "text-accent bg-accent/15" },
  { label: "Spent this month", value: "$8,420", change: "+12%", icon: DollarSign, tint: "text-success bg-success/15" },
  { label: "Avg. rating", value: "4.9", change: "+0.1", icon: Star, tint: "text-warning bg-warning/15" },
];

function Dashboard() {
  return (
    <AppShell>
      <div className="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back, Alex</h1>
          <p className="text-sm text-muted-foreground">Here's what's happening with your projects today.</p>
        </div>
        <Button asChild><Link to="/post-job">+ Post a new job</Link></Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            <div className="flex items-start justify-between">
              <div className={`grid h-10 w-10 place-items-center rounded-xl ${s.tint}`}>
                <s.icon className="h-5 w-5" />
              </div>
              <span className="flex items-center gap-1 text-xs font-medium text-success">
                <ArrowUpRight className="h-3 w-3" /> {s.change}
              </span>
            </div>
            <p className="mt-4 text-2xl font-semibold">{s.value}</p>
            <p className="text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Active jobs */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Active jobs</h2>
            <Link to="/discover" className="text-sm text-primary hover:underline">View all</Link>
          </div>
          <div className="mt-4 divide-y divide-border">
            {jobs.slice(0, 4).map((j) => (
              <Link
                key={j.id}
                to="/job/$jobId"
                params={{ jobId: j.id }}
                className="flex items-center gap-4 py-4 transition-colors hover:bg-muted/50 -mx-2 px-2 rounded-lg"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Briefcase className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-medium">{j.title}</p>
                  <p className="text-xs text-muted-foreground">{j.category} · {j.proposals} proposals · {j.postedAt}</p>
                </div>
                <span className={`hidden rounded-full px-2.5 py-0.5 text-xs font-medium md:inline-block ${
                  j.status === "Open" ? "bg-primary/10 text-primary" :
                  j.status === "In Progress" ? "bg-accent/15 text-accent-foreground" :
                  "bg-success/15 text-success"
                }`}>{j.status}</span>
                <span className="text-sm font-medium">{j.budget.split("–")[0]}</span>
                <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Notifications</h2>
            <Link to="/notifications" className="text-sm text-primary hover:underline">All</Link>
          </div>
          <div className="mt-4 space-y-4">
            {notifications.slice(0, 4).map((n) => (
              <div key={n.id} className="flex gap-3">
                <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${n.unread ? "bg-primary" : "bg-muted"}`} />
                <div className="min-w-0">
                  <p className="text-sm font-medium leading-snug">{n.title}</p>
                  <p className="truncate text-xs text-muted-foreground">{n.desc}</p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">{n.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent proposals + saved pros */}
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent proposals</h2>
            <Link to="/job/j1" className="text-sm text-primary hover:underline">View job</Link>
          </div>
          <div className="mt-4 space-y-4">
            {proposals.map((p) => (
              <div key={p.id} className="flex items-start gap-4 rounded-xl border border-border p-4">
                <img src={p.pro.avatar} className="h-10 w-10 rounded-full" alt="" />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="font-medium">{p.pro.name}</p>
                      <p className="text-xs text-muted-foreground">{p.pro.title}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${p.bid.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">{p.duration}</p>
                    </div>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.cover}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Saved pros</h2>
            <Bookmark className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="mt-4 space-y-4">
            {professionals.slice(0, 4).map((p) => (
              <Link key={p.id} to="/pro/$proId" params={{ proId: p.id }} className="flex items-center gap-3">
                <img src={p.avatar} className="h-9 w-9 rounded-full" alt="" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{p.name}</p>
                  <p className="truncate text-xs text-muted-foreground">{p.title}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
