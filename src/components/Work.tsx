"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { coreProjects, moreProjectsByGroup } from "@/content/projects";
import ProjectCard, { ProjectRow } from "./ProjectCard";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

const moreCount = moreProjectsByGroup.reduce((n, g) => n + g.items.length, 0);

export default function Work() {
  const [expanded, setExpanded] = useState(false);
  const reduced = useReducedMotion();

  return (
    <section id="work" className="section-pad border-t border-line">
      <div className="shell">
        <SectionHeading
          index="02 / SELECTED WORK"
          title="Things I've built."
          lead="The work that matters most, first — production systems at Ameya Health, a retrieval benchmark with Missouri S&T, and two apps on the App Store. Everything else is one click below."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreProjects.map((p, i) => (
            <Reveal key={p.slug} delay={i % 3} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        {/* Everything below the core tier, collapsed by default. */}
        <Reveal delay={1} className="mt-14">
          <div className="rounded-2xl border border-line bg-bg-elevated">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              aria-controls="more-work"
              className="group flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-5 text-left transition hover:bg-surface-hover sm:px-7"
            >
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                  Research &amp; earlier work
                </p>
                <p className="mt-1.5 text-sm text-muted">
                  {moreProjectsByGroup
                    .map((g) => `${g.group} (${g.items.length})`)
                    .join("  ·  ")}
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-accent">
                {expanded ? "Hide" : `Show all ${moreCount}`}
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {expanded ? (
                <motion.div
                  id="more-work"
                  key="more"
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-9 border-t border-line px-6 pb-8 pt-7 sm:px-7">
                    {moreProjectsByGroup.map((group) => (
                      <div key={group.group}>
                        <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                          {group.group}
                        </h3>
                        <div className="mt-3">
                          {group.items.map((p) => (
                            <ProjectRow key={p.slug} project={p} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
