import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Fades a block in when it scrolls into view. Honours prefers-reduced-motion. */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Component = Tag as "div";
  return (
    <Component
      ref={ref as never}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Component>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      <p className="font-mono text-xs tracking-[0.28em] text-accent uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-balance sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
      <div
        aria-hidden="true"
        className={cn(
          "mt-6 h-px w-24 bg-gradient-to-r from-primary via-accent to-transparent",
          align === "center" && "mx-auto",
        )}
      />
    </Reveal>
  );
}

export function Section({
  id,
  children,
  label,
  className,
}: {
  id: string;
  children: ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      className={cn("section-padding scroll-mt-24", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
};

const buttonBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 active:scale-[0.97] disabled:pointer-events-none disabled:opacity-45";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_10px_30px_-12px_oklch(0.62_0.19_256/0.8)] hover:brightness-110 hover:shadow-[0_16px_40px_-12px_oklch(0.62_0.19_256/0.9)]",
  outline:
    "border border-border bg-white/[0.03] text-foreground hover:border-accent/50 hover:bg-accent/10",
  ghost: "text-muted-foreground hover:text-foreground",
};

export function ActionButton({
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(buttonBase, variants[variant], className)} {...rest}>
      {children}
    </button>
  );
}

export function ActionLink({
  variant = "primary",
  className,
  children,
  ...rest
}: ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn(buttonBase, variants[variant], className)} {...rest}>
      {children}
    </a>
  );
}
