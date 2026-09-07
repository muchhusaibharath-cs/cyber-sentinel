import { personal } from "@/data/portfolio";
import { SocialRow } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div className="min-w-0">
          <p className="font-display text-sm font-bold tracking-[0.16em]">{personal.name}</p>
          <p className="mt-1.5 text-sm text-muted-foreground">{personal.tagline}</p>
        </div>
        <SocialRow className="lg:justify-end" />
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground sm:px-6 lg:px-8">
          © 2026 Muchhu Sai Bharath. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
