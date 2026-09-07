import { Bug, Cloud, Code, Network, Radar, Terminal, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { skillCategories } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";

const icons: Record<string, LucideIcon> = {
  code: Code,
  network: Network,
  bug: Bug,
  cloud: Cloud,
  terminal: Terminal,
  radar: Radar,
  wrench: Wrench,
};

export function Skills() {
  return (
    <Section id="skills" label="Skills" className="relative">
      <SectionHeading
        eyebrow="Skills"
        title="Technical Toolkit"
        description="Tools, platforms, and concepts I actively work with and continue to develop through labs and coursework."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => {
          const Icon = icons[category.icon] ?? Code;
          return (
            <Reveal
              key={category.title}
              delay={i * 70}
              className="glass-card card-hover flex h-full flex-col p-5 sm:p-6"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-white/[0.04] text-accent">
                  <Icon className="size-4.5" aria-hidden="true" />
                </span>
                <h3 className="truncate text-base font-semibold">{category.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="tag-chip font-mono text-[0.75rem]">
                    {skill}
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
