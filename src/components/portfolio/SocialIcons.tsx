import { Github, Linkedin, Boxes, Code2, Terminal } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { socials } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export const socialIcons: Record<keyof typeof socials, LucideIcon> = {
  linkedin: Linkedin,
  github: Github,
  tryhackme: Terminal,
  hackthebox: Boxes,
  leetcode: Code2,
};

export const socialOrder = [
  "linkedin",
  "github",
  "tryhackme",
  "hackthebox",
  "leetcode",
] as const;

export function SocialRow({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {socialOrder.map((key) => {
        const social = socials[key];
        const Icon = socialIcons[key];
        const disabled = !social.url;
        return (
          <li key={key}>
            <a
              href={social.url ?? undefined}
              target={disabled ? undefined : "_blank"}
              rel={disabled ? undefined : "noreferrer noopener"}
              aria-disabled={disabled || undefined}
              tabIndex={disabled ? -1 : 0}
              title={disabled ? `${social.label} — profile link coming soon` : social.label}
              aria-label={
                disabled ? `${social.label}: profile link coming soon` : `${social.label} profile`
              }
              className={cn(
                "grid size-11 place-items-center rounded-xl border border-border bg-white/[0.03] text-muted-foreground transition-all duration-300",
                disabled
                  ? "pointer-events-none opacity-45"
                  : "hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent",
              )}
            >
              <Icon className="size-4.5" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
