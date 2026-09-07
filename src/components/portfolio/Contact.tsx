import { useState } from "react";
import { AlertCircle, Mail, Send } from "lucide-react";
import { personal, socials } from "@/data/portfolio";
import { ActionButton, Reveal, Section, SectionHeading } from "./primitives";
import { socialIcons } from "./SocialIcons";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

/**
 * No email backend is connected yet.
 * To send messages for real, replace the body of `submitContactMessage`
 * with an EmailJS / Formspree / Lovable Cloud call.
 */
const EMAIL_BACKEND_CONFIGURED = false;

async function submitContactMessage(_payload: {
  name: string;
  email: string;
  message: string;
}): Promise<void> {
  throw new Error("No email service configured");
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 flex items-center gap-1.5 text-xs text-destructive">
          <AlertCircle className="size-3.5" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-input bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-accent/60 focus:outline-none";

export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "unavailable">("idle");

  const validate = () => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!values.message.trim()) next.message = "Please enter a message.";
    else if (values.message.trim().length < 10)
      next.message = "Please write at least 10 characters.";
    return next;
  };

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    if (!EMAIL_BACKEND_CONFIGURED) {
      setStatus("unavailable");
      return;
    }
    setStatus("sending");
    try {
      await submitContactMessage(values);
      setStatus("sent");
      setValues({ name: "", email: "", message: "" });
    } catch {
      setStatus("unavailable");
    }
  };

  return (
    <Section id="contact" label="Contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        description="Interested in cybersecurity, cloud security, networking, or collaboration? Feel free to reach out."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="glass-card card-hover flex flex-col p-6 sm:p-8">
          <h3 className="text-lg font-semibold">Direct contact</h3>
          <a
            href={`mailto:${personal.email}`}
            className="mt-5 flex min-w-0 items-center gap-3 rounded-xl border border-border bg-white/[0.03] p-4 transition-all duration-300 hover:border-accent/50 hover:bg-accent/10"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-accent">
              <Mail className="size-4.5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">Email</span>
              <span className="block truncate text-sm">{personal.email}</span>
            </span>
          </a>

          <ul className="mt-4 grid gap-3">
            {(["linkedin", "github"] as const).map((key) => {
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
                    aria-label={
                      disabled ? `${social.label}: profile link coming soon` : social.label
                    }
                    className={cn(
                      "flex min-w-0 items-center gap-3 rounded-xl border border-border bg-white/[0.03] p-4 transition-all duration-300",
                      disabled
                        ? "pointer-events-none opacity-45"
                        : "hover:border-accent/50 hover:bg-accent/10",
                    )}
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/15 text-accent">
                      <Icon className="size-4.5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs text-muted-foreground">{social.label}</span>
                      <span className="block truncate text-sm">
                        {social.url ?? "Profile link coming soon"}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <p className="mt-auto pt-6 text-xs leading-relaxed text-muted-foreground">
            Based in {personal.location}. Open to {personal.goal} opportunities.
          </p>
        </Reveal>

        <Reveal delay={100} className="glass-card p-6 sm:p-8">
          <form noValidate onSubmit={onSubmit} className="grid gap-5">
            <Field id="name" label="Name" error={errors.name}>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                maxLength={100}
                value={values.name}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                placeholder="Your full name"
                className={inputClass}
              />
            </Field>

            <Field id="email" label="Email" error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                maxLength={255}
                value={values.email}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
                onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                placeholder="you@example.com"
                className={inputClass}
              />
            </Field>

            <Field id="message" label="Message" error={errors.message}>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                maxLength={1000}
                value={values.message}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                placeholder="How can I help?"
                className={cn(inputClass, "resize-y")}
              />
            </Field>

            <div className="flex flex-wrap items-center gap-4">
              <ActionButton type="submit" disabled={status === "sending"}>
                <Send className="size-4" aria-hidden="true" />
                {status === "sending" ? "Sending…" : "Send Message"}
              </ActionButton>
            </div>

            <p aria-live="polite" className="text-sm">
              {status === "sent" ? (
                <span className="text-accent">Thanks — your message was sent.</span>
              ) : status === "unavailable" ? (
                <span className="text-muted-foreground">
                  This form isn&apos;t connected to an email service yet, so nothing was sent. Please
                  email{" "}
                  <a className="text-accent underline" href={`mailto:${personal.email}`}>
                    {personal.email}
                  </a>{" "}
                  directly.
                </span>
              ) : null}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
