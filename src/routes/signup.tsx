import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Sign up — Servio" }, { name: "description", content: "Create your free Servio account." }] }),
  component: Signup,
});

function Signup() {
  const [role, setRole] = useState<"client" | "pro">("client");
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join 50,000+ clients and pros on Servio."
      footer={<>Already have an account? <Link to="/login" className="text-primary hover:underline">Log in</Link></>}
    >
      <div className="mb-5 grid grid-cols-2 gap-2 rounded-xl bg-muted p-1">
        {(["client", "pro"] as const).map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRole(r)}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              role === r ? "bg-card text-foreground shadow-soft" : "text-muted-foreground"
            }`}
          >
            I'm a {r === "client" ? "client" : "professional"}
          </button>
        ))}
      </div>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <Label htmlFor="first">First name</Label>
            <Input id="first" placeholder="Jane" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="last">Last name</Label>
            <Input id="last" placeholder="Doe" />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Work email</Label>
          <Input id="email" type="email" placeholder="you@company.com" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="At least 8 characters" />
        </div>
        <Button asChild type="submit" className="w-full">
          <Link to="/verify">Create account</Link>
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          By signing up you agree to our <a className="underline" href="#">Terms</a> and <a className="underline" href="#">Privacy</a>.
        </p>
      </form>
    </AuthLayout>
  );
}
