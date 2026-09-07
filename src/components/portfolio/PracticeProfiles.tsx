import { ExternalLink } from "lucide-react";
import { practiceProfiles, socials } from "@/data/portfolio";
import { Reveal, Section, SectionHeading } from "./primitives";
import { socialIcons } from "./SocialIcons";
import { cn } from "@/lib/utils";

export function PracticeProfiles() {
  return (
    <Section id="labs" label="Security practice">
      <SectionHeading
        eyebrow="Labs"
        title="Security Practice"
        description="Platforms where I practise hands-on security and programming fundamentals. Profile links are added as they become public."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {practiceProfiles.map((profile, i) => {
          const social = socials[profile.key];
          const Icon = socialIcons[profile.key];
          const hasLink = Boolean(social.url);
          return (
            <Reveal
              key={profile.platform}
              delay={i * 80}
              className="glass-card card-hover flex h-full flex-col p-5 sm:p-6"
            >
              <span className="grid size-11 place-items-center rounded-xl border border-primary/30 bg-primary/12 text-accent">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{profile.platform}</h3>
              {social.username ? (
                <p className="mt-1 font-mono text-xs text-accent">@{social.username}</p>
              ) : null}
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {profile.description}
              </p>

              {profile.stats.length > 0 ? (
                <dl className="mt-4 grid grid-cols-2 gap-3">
                  {profile.stats.map((stat) => (
                    <div key={stat.label}>
                      <dt className="text-[0.7rem] text-muted-foreground">{stat.label}</dt>
                      <dd className="font-display text-lg font-semibold">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              <div className="mt-auto pt-5">
                {hasLink ? (
                  <a
                    href={social.url ?? undefined}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={cn(
                      "inline-flex min-h-10 items-center gap-1.5 rounded-full border border-border px-4 text-xs transition-all duration-300",
                      "hover:border-accent/50 hover:bg-accent/10 hover:text-accent",
                    )}
                  >
                    View profile
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <p className="font-mono text-[0.72rem] text-muted-foreground">
                    Profile link coming soon
                  </p>
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
