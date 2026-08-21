import { useState, type FormEvent } from "react";
import { Mail, Phone, PenLine, Check } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin, XIcon } from "@/components/BrandIcons";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { contact } from "@/data/portfolio";

type Errors = { name?: string; email?: string; message?: string };

const socials = [
  { label: "Email", href: `mailto:${contact.email}`, Icon: Mail, value: contact.email },
  { label: "Phone", href: `tel:${contact.phone.replace(/\s/g, "")}`, Icon: Phone, value: contact.phone },
  { label: "LinkedIn", href: contact.linkedin, Icon: Linkedin, value: "safouene-ziadi" },
  { label: "GitHub", href: contact.github, Icon: Github, value: "ZiadiSafouene" },
  { label: "Medium", href: contact.medium, Icon: PenLine, value: "@safouene" },
];


export function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (v: typeof values) => {
    const e: Errors = {};
    if (v.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim()))
      e.email = "Please enter a valid email address.";
    if (v.message.trim().length < 10)
      e.message = "Message should be at least 10 characters.";
    return e;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSent(true);
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      `Portfolio enquiry from ${values.name}`,
    )}&body=${encodeURIComponent(values.message + "\n\n" + values.email)}`;
  };

  const field =
    "w-full rounded-md border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-300 focus:border-border-strong focus:outline-none";

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something worth explaining."
          lead="Open to AI engineering and research internships or roles. The fastest way to reach me is email."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <form onSubmit={onSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="eyebrow">
                  Name
                </label>
                <input
                  id="name"
                  className={`mt-3 ${field}`}
                  placeholder="Your name"
                  value={values.name}
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                />
                {errors.name ? (
                  <p className="mt-2 text-xs text-destructive">{errors.name}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className="eyebrow">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`mt-3 ${field}`}
                  placeholder="you@company.com"
                  value={values.email}
                  onChange={(e) => setValues({ ...values, email: e.target.value })}
                />
                {errors.email ? (
                  <p className="mt-2 text-xs text-destructive">{errors.email}</p>
                ) : null}
              </div>
              <div>
                <label htmlFor="message" className="eyebrow">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`mt-3 resize-none ${field}`}
                  placeholder="Tell me about the role or project…"
                  value={values.message}
                  onChange={(e) => setValues({ ...values, message: e.target.value })}
                />
                {errors.message ? (
                  <p className="mt-2 text-xs text-destructive">{errors.message}</p>
                ) : null}
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity duration-300 hover:opacity-85"
                >
                  Send Message
                </button>
                {sent ? (
                  <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                    <Check className="size-4" /> Opening your mail client…
                  </span>
                ) : null}
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="card-elevated rounded-xl p-6">
              <p className="eyebrow">Direct</p>
              <ul className="mt-6 space-y-1">
                {socials.map(({ label, href, Icon, value }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="flex items-center justify-between gap-4 rounded-md px-3 py-3 transition-colors duration-300 hover:bg-surface-2"
                    >
                      <span className="inline-flex items-center gap-3 text-sm">
                        <Icon className="size-4 text-muted-foreground" />
                        {label}
                      </span>
                      <span className="truncate text-xs text-muted-foreground">
                        {value}
                      </span>
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={contact.x}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-4 rounded-md px-3 py-3 transition-colors duration-300 hover:bg-surface-2"
                  >
                    <span className="inline-flex items-center gap-3 text-sm">
                      <XIcon className="size-4 text-muted-foreground" />X
                    </span>
                    <span className="text-xs text-muted-foreground">@safouene</span>
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
