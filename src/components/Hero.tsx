"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "@/content/profile";
import { ButtonLink } from "./ui";

export default function Hero() {
  const reduced = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % profile.roles.length), 2600);
    return () => clearInterval(id);
  }, [reduced]);

  const fade = (delay: number) => ({
    initial: reduced ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] as const },
  });

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-16">
      {/* backdrop */}
      <div className="grid-bg mask-fade-b absolute inset-0 -z-10" aria-hidden />
      <div
        className="absolute left-1/2 top-[-18%] -z-10 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full opacity-60 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 66%)" }}
        aria-hidden
      />

      <div className="shell w-full py-20">
        <motion.p
          {...fade(0)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-bg-elevated/70 px-3 py-1.5 font-mono text-[11px] tracking-[0.16em] text-muted backdrop-blur"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          {profile.availability.toUpperCase()}
        </motion.p>

        <motion.h1
          {...fade(0.08)}
          className="text-balance text-[clamp(2.75rem,9vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-ink"
        >
          Azmal
          <br />
          <span className="text-gradient">Awasaf</span>
        </motion.h1>

        {/* rotating role */}
        <motion.div {...fade(0.16)} className="mt-6 flex h-9 items-center gap-3">
          <span className="h-px w-10 bg-accent" aria-hidden />
          <span className="sr-only">{profile.roles.join(", ")}</span>
          <div className="relative flex h-9 items-center overflow-hidden" aria-hidden>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={roleIndex}
                initial={reduced ? false : { y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={reduced ? { opacity: 0 } : { y: -24, opacity: 0 }}
                transition={{ duration: 0.42, ease: [0.22, 0.61, 0.36, 1] }}
                className="block font-mono text-sm tracking-[0.18em] text-accent sm:text-base"
              >
                {profile.roles[roleIndex].toUpperCase()}
              </motion.span>
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.p
          {...fade(0.24)}
          className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl"
        >
          {profile.headline}
        </motion.p>

        <motion.div {...fade(0.32)} className="mt-10 flex flex-wrap items-center gap-3">
          <ButtonLink href="#work">
            See the work
            <ArrowDown size={15} className="transition-transform group-hover:translate-y-0.5" />
          </ButtonLink>
          <ButtonLink href={profile.cv} variant="ghost" download>
            Download résumé
          </ButtonLink>

          <div className="flex items-center gap-1 sm:ml-2">
            {[
              { href: profile.github, label: "GitHub", Icon: Github },
              { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer noopener"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full text-muted transition hover:bg-surface-hover hover:text-accent"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.p {...fade(0.4)} className="mt-10 flex items-center gap-2 font-mono text-xs text-faint">
          <MapPin size={13} />
          {profile.location}
        </motion.p>

        {/* fact band */}
        <motion.dl
          {...fade(0.48)}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {profile.facts.map((f) => (
            <div key={f.label} className="bg-bg-elevated px-5 py-5">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">{f.label}</dt>
              <dd className="mt-2 text-sm font-medium leading-snug text-ink">{f.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
