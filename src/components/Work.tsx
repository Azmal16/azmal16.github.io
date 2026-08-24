"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { projects, categories } from "@/content/projects";
import ProjectCard from "./ProjectCard";
import { SectionHeading } from "./ui";

export default function Work() {
  const [filter, setFilter] = useState<string>("All");
  const reduced = useReducedMotion();

  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter as never))),
    [filter],
  );

  return (
    <section id="work" className="section-pad border-t border-line">
      <div className="shell">
        <SectionHeading
          index="02 / SELECTED WORK"
          title="Things I've built."
          lead="Production systems, research prototypes and shipped apps. Every one of these has a write-up behind it."
        />

        <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={filter === c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                filter === c
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-line text-muted hover:border-line-strong hover:text-ink"
              }`}
            >
              {c}
              <span className="ml-1.5 font-mono text-[10px] text-faint">
                {c === "All" ? projects.length : projects.filter((p) => p.categories.includes(c as never)).length}
              </span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                key={p.slug}
                layout
                initial={reduced ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
                className={p.featured && filter === "All" ? "sm:col-span-2 lg:col-span-3" : ""}
              >
                <ProjectCard project={p} wide={Boolean(p.featured) && filter === "All"} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
