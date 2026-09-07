import { useEffect, useState } from "react";
import { Download, Menu, ShieldCheck, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, personal } from "@/data/portfolio";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(1, window.scrollY / height) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-primary to-accent transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-4 px-5 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <a
          href="#home"
          className="flex min-w-0 items-center gap-2.5 font-display text-sm font-bold tracking-[0.16em]"
          aria-label={`${personal.shortName} — home`}
        >
          <span className="grid size-9 shrink-0 place-items-center rounded-xl border border-border bg-white/[0.04] text-accent">
            <ShieldCheck className="size-4.5" aria-hidden="true" />
          </span>
          <span className="truncate">{personal.shortName}</span>
        </a>

        <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "relative rounded-full px-3.5 py-2 text-sm transition-colors duration-300",
                active === item.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {item.label}
              {active === item.id ? (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-primary to-accent"
                />
              ) : null}
            </a>
          ))}
        </nav>

        <a
          href={personal.resumePath}
          download
          className="ml-auto hidden min-h-10 items-center gap-2 rounded-full border border-primary/40 bg-primary/12 px-4 text-sm font-medium text-foreground transition-all duration-300 hover:border-accent/60 hover:bg-accent/15 lg:ml-0 lg:inline-flex"
        >
          <Download className="size-4" aria-hidden="true" />
          Download Resume
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto grid size-11 place-items-center rounded-xl border border-border bg-white/[0.04] text-foreground lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
      >
        <nav aria-label="Mobile navigation" className="mx-auto max-w-6xl px-5 py-4 sm:px-6">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex min-h-12 items-center rounded-lg px-2 text-base transition-colors",
                    active === item.id ? "text-accent" : "text-muted-foreground",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={personal.resumePath}
            download
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent text-sm font-medium text-primary-foreground"
          >
            <Download className="size-4" aria-hidden="true" />
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
