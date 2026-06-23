import { createFileRoute, Link } from "@tanstack/react-router";
import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Log in — Servio" }, { name: "description", content: "Log in to your Servio account." }] }),
  component: Login,
});

function Login() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Log in to continue to your dashboard."
      footer={<>Don't have an account? <Link to="/signup" className="text-primary hover:underline">Sign up</Link></>}
    >
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <Button type="button" variant="outline">Continue with Google</Button>
          <Button type="button" variant="outline">Continue with Apple</Button>
        </div>
        <div className="relative py-2 text-center text-xs text-muted-foreground">
          <span className="relative z-10 bg-background px-3">or</span>
          <div className="absolute inset-x-0 top-1/2 h-px bg-border" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" />
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link to="/forgot-password" className="text-xs text-primary hover:underline">Forgot?</Link>
          </div>
          <Input id="password" type="password" placeholder="••••••••" />
        </div>
        <Button asChild type="submit" className="w-full">
          <Link to="/dashboard">Log in</Link>
        </Button>
      </form>
    </AuthLayout>
  );
}
