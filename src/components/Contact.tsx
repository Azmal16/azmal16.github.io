import { Github, Linkedin, Mail, FileDown, GraduationCap } from "lucide-react";
import { profile } from "@/content/profile";
import Reveal from "./Reveal";
import { Chip } from "./ui";

const CHANNELS = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "Academic", value: profile.academicEmail, href: `mailto:${profile.academicEmail}`, Icon: GraduationCap },
  { label: "LinkedIn", value: "in/azmal-awasaf", href: profile.linkedin, Icon: Linkedin },
  { label: "GitHub", value: "Azmal16", href: profile.github, Icon: Github },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative isolate overflow-hidden border-t border-line">
      <div
        className="absolute bottom-[-30%] left-1/2 -z-10 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full opacity-50 blur-[130px]"
        style={{ background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 68%)" }}
        aria-hidden
      />
      <div className="shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs tracking-[0.24em] text-accent">08 / CONTACT</span>
          <h2 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
            Let&apos;s build something
            <br />
            <span className="font-display italic font-normal text-gradient">worth shipping.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted md:text-lg">
            I&apos;m {profile.availability.toLowerCase()} — and always happy to talk about retrieval, on-device ML,
            or anything at the messy edge where research meets a real product.
          </p>

          <div className="mt-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">Looking for</p>
            <ul className="mt-3 flex flex-wrap justify-center gap-2">
              {profile.seeking.map((role) => (
                <li key={role}>
                  <Chip tone="accent">{role}</Chip>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-bg transition hover:bg-accent-strong"
          >
            <Mail size={16} />
            {profile.email}
          </a>

          <div className="mt-4">
            <a
              href={profile.cv}
              download=""
              className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-accent"
            >
              <FileDown size={15} />
              Or grab the résumé (PDF)
            </a>
          </div>
        </Reveal>

        <Reveal delay={2}>
          <dl className="mx-auto mt-16 grid max-w-3xl gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {CHANNELS.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer noopener"
                className="group bg-bg-elevated px-5 py-5 transition hover:bg-surface-hover"
              >
                <dt className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                  <Icon size={12} className="text-accent" />
                  {label}
                </dt>
                <dd className="mt-2 break-words text-[13px] leading-snug text-ink transition group-hover:text-accent">{value}</dd>
              </a>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
