import { useMemo, useState } from "react";
import { ExternalLink, FileText, Github, Loader } from "lucide-react";
import { projectFilters, projects, type Project, type ProjectCategory } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

function ProjectLink({
  href,
  label,
  icon: Icon,
}: {
  href: string | null;
  label: string;
  icon: typeof Github;
}) {
  const disabled = !href;
  return (
    <a
      href={href ?? undefined}
      target={disabled ? undefined : "_blank"}
      rel={disabled ? undefined : "noreferrer noopener"}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : 0}
      title={disabled ? `${label} — link coming soon` : label}
      aria-label={disabled ? `${label}: link coming soon` : label}
      className={cn(
        "inline-flex min-h-9 items-center gap-1.5 rounded-full border border-border px-3 text-xs transition-all duration-300",
        disabled
          ? "pointer-events-none opacity-40"
          : "hover:border-accent/50 hover:bg-accent/10 hover:text-accent",
      )}
    >
      <Icon className="size-3.5" aria-hidden="true" />
      {label}
    </a>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal
      as="article"
      delay={index * 70}
      className="glass-card card-hover flex h-full flex-col p-5 sm:p-6"
    >
      <div className="flex min-w-0 flex-wrap items-start justify-between gap-3">
        <h3 className="min-w-0 text-lg font-semibold text-balance">{project.title}</h3>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/35 bg-accent/10 px-2.5 py-1 font-mono text-[0.68rem] tracking-wide text-accent uppercase">
          <Loader className="size-3" aria-hidden="true" />
          {project.status}
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li key={tech} className="tag-chip font-mono text-[0.72rem]">
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2 border-t border-border pt-5 mt-6">
        <ProjectLink href={project.links.github} label="GitHub" icon={Github} />
        <ProjectLink href={project.links.demo} label="Live Demo" icon={ExternalLink} />
        <ProjectLink href={project.links.caseStudy} label="View Case Study" icon={FileText} />
      </div>
    </Reveal>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("All");
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <Section id="projects" label="Projects">
      <SectionHeading
        eyebrow="Projects"
        title="Security Projects"
        description="Practical, in-progress projects built to develop hands-on skills across cloud, network, and web security."
      />

      <div
        role="group"
        aria-label="Filter projects by category"
        className="mt-10 flex flex-wrap justify-center gap-2"
      >
        {projectFilters.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setFilter(option)}
            aria-pressed={filter === option}
            className={cn(
              "min-h-10 rounded-full border px-4 text-sm transition-all duration-300",
              filter === option
                ? "border-transparent bg-gradient-to-r from-primary to-accent text-primary-foreground"
                : "border-border bg-white/[0.03] text-muted-foreground hover:border-accent/40 hover:text-foreground",
            )}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {visible.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  );
}
