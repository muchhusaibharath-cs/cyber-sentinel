import { Award, GraduationCap, MapPin } from "lucide-react";
import { certifications, education, learningJourney } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

function TimelineItem({
  children,
  delay,
  icon: Icon,
}: {
  children: React.ReactNode;
  delay: number;
  icon: typeof Award;
}) {
  return (
    <Reveal as="li" delay={delay} className="relative pl-12 sm:pl-14">
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 grid size-10 place-items-center rounded-xl border border-primary/30 bg-primary/12 text-accent"
      >
        <Icon className="size-4.5" />
      </span>
      <div className="glass-card card-hover p-5 sm:p-6">{children}</div>
    </Reveal>
  );
}

export function CertificationTimeline() {
  return (
    <Section id="certifications" label="Certifications and training">
      <SectionHeading
        eyebrow="Certifications"
        title="Certifications & Training"
        description="Courses and certification paths I am currently pursuing or have planned. None are presented as completed."
      />

      <ol className="relative mt-14 space-y-5 before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary/50 before:via-accent/30 before:to-transparent">
        {certifications.map((cert, i) => (
          <TimelineItem key={cert.name} delay={i * 60} icon={Award}>
            <div className="flex min-w-0 flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-balance">{cert.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
              <div className="flex shrink-0 flex-col items-start gap-1.5 sm:items-end">
                <span
                  className={cn(
                    "rounded-full border px-2.5 py-1 font-mono text-[0.68rem] tracking-wide uppercase",
                    cert.status === "Pursuing"
                      ? "border-accent/35 bg-accent/10 text-accent"
                      : "border-border bg-white/[0.04] text-muted-foreground",
                  )}
                >
                  {cert.status}
                </span>
                {cert.date ? (
                  <span className="font-mono text-[0.7rem] text-muted-foreground">{cert.date}</span>
                ) : null}
              </div>
            </div>
          </TimelineItem>
        ))}
      </ol>
    </Section>
  );
}

export function EducationTimeline() {
  return (
    <Section id="education" label="Education">
      <SectionHeading eyebrow="Education" title="Education" />

      <ol className="relative mt-14 space-y-5 before:absolute before:left-5 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-primary/50 before:via-accent/30 before:to-transparent">
        {education.map((item, i) => (
          <TimelineItem key={item.institution} delay={i * 70} icon={GraduationCap}>
            <div className="flex min-w-0 flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-base font-semibold">{item.institution}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.qualification}</p>
                <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="size-3.5 text-accent" aria-hidden="true" />
                  {item.location}
                </p>
              </div>
              <div className="shrink-0 sm:text-right">
                <p className="font-mono text-xs tracking-wide text-accent">{item.duration}</p>
                <p className="mt-1.5 text-sm font-medium">{item.score}</p>
              </div>
            </div>
          </TimelineItem>
        ))}
      </ol>

      <Reveal delay={120} className="glass-card mt-8 p-6 sm:p-7">
        <h3 className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
          Learning Journey
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {learningJourney.map((item) => (
            <li key={item} className="tag-chip">
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
