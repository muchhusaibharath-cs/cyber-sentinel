import { Cloud, Network, ShieldCheck, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { currentlyLearning, focusAreas, personal } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

const icons: Record<string, LucideIcon> = {
  cloud: Cloud,
  network: Network,
  shield: ShieldCheck,
};

export function About() {
  return (
    <Section id="about" label="About me">
      <SectionHeading
        eyebrow="About"
        title="About Me"
        description={personal.summary}
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="glass-card card-hover p-6 sm:p-8">
          <div className="space-y-4 text-[0.95rem] leading-relaxed text-muted-foreground">
            <p>
              I am a Computer Science undergraduate specializing in Cybersecurity, with a strong
              interest in Cloud Security and Network Security.
            </p>
            <p>
              I am building practical cybersecurity skills through hands-on labs, networking
              exercises, Linux practice, security tools, and cloud security learning.
            </p>
            <p>
              My current learning direction includes penetration testing fundamentals, vulnerability
              assessment, networking, Linux, scripting, AWS security, and defensive security
              concepts.
            </p>
          </div>

          <dl className="mt-8 grid gap-4 border-t border-border pt-6 sm:grid-cols-3">
            {[
              { label: "Degree", value: "B.Tech CSE (Cyber Security)" },
              { label: "University", value: "Marwadi University" },
              { label: "Goal", value: personal.goal },
            ].map((item) => (
              <div key={item.label}>
                <dt className="font-mono text-[0.7rem] tracking-[0.18em] text-accent uppercase">
                  {item.label}
                </dt>
                <dd className="mt-1.5 text-sm text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <div className="grid gap-4">
          {focusAreas.map((area, i) => {
            const Icon = icons[area.icon] ?? ShieldCheck;
            return (
              <Reveal key={area.title} delay={i * 90} className="glass-card card-hover p-5 sm:p-6">
                <div className="flex min-w-0 items-start gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-primary/30 bg-primary/12 text-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold">{area.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {area.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Reveal delay={120} className="glass-card mt-6 p-6 sm:p-7">
        <h3 className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-accent uppercase">
          <Sparkles className="size-4" aria-hidden="true" />
          Currently Learning
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {currentlyLearning.map((item) => (
            <li key={item} className="tag-chip">
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
