import { ArrowRight, Download, MapPin } from "lucide-react";
import { personal } from "@/data/portfolio";
import { ActionLink, Reveal } from "./primitives";
import { SecurityVisual } from "./SecurityVisual";
import { SocialRow } from "./SocialIcons";

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28"
    >
      <div aria-hidden="true" className="absolute inset-0 grid-backdrop" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 size-[38rem] -translate-x-1/2 rounded-full bg-primary/18 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-40 size-[26rem] rounded-full bg-accent/10 blur-[110px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        <div>
          <Reveal>
            <span className="tag-chip font-mono text-[0.7rem] tracking-[0.22em] uppercase">
              <span className="size-1.5 rounded-full bg-accent pulse-dot" aria-hidden="true" />
              Cybersecurity Student
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl leading-[1.08] font-semibold text-balance sm:text-5xl lg:text-6xl">
              Cybersecurity Student
              <span className="mt-2 block text-gradient">Building a Secure Digital Future</span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Areas of focus">
              {["Cybersecurity", "Cloud Security", "Network Security"].map((item) => (
                <li key={item} className="tag-chip">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {personal.heroDescription}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ActionLink href="#projects">
                View My Work
                <ArrowRight className="size-4" aria-hidden="true" />
              </ActionLink>
              <ActionLink href={personal.resumePath} download variant="outline">
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </ActionLink>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-col gap-4">
              <SocialRow />
              <p className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-accent" aria-hidden="true" />
                {personal.location}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div className="glass-card relative mx-auto aspect-square w-full max-w-md p-4 sm:p-6">
            <div className="float-slow h-full w-full">
              <SecurityVisual />
            </div>
          </div>

          <div className="glass-card mx-auto mt-4 w-full max-w-md p-4 sm:absolute sm:-bottom-6 sm:-left-2 sm:mt-0 sm:w-64 sm:max-w-none">
            <p className="flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.2em] text-accent uppercase">
              <span className="size-1.5 rounded-full bg-accent pulse-dot" aria-hidden="true" />
              Currently learning
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              AWS • Linux • Networking • Penetration Testing
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
