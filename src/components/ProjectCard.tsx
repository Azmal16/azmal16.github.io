import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import Media from "./Media";
import { Chip } from "./ui";

/** Large card. Every core project renders identically so the grid stays even. */
export default function ProjectCard({ project }: { project: Project }) {
  const stack = project.stack.slice(0, 4);
  const rest = project.stack.length - stack.length;

  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-hover card-shadow"
    >
      <Media
        // captions belong in the project gallery, not stacked on a card
        item={{ ...(project.media?.[0] ?? { src: "", alt: `${project.title} preview` }), caption: undefined }}
        seed={project.slug}
        aspect="aspect-[16/10]"
        className="rounded-none border-0 border-b border-line"
      />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <p className="min-w-0 truncate font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
            {project.context}
          </p>
          <span className="shrink-0 font-mono text-[11px] text-faint">{project.year}</span>
        </div>

        <h3 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-ink">{project.title}</h3>
        <p className="mt-2.5 line-clamp-3 flex-1 text-pretty text-sm leading-relaxed text-muted">
          {project.blurb}
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-1.5">
          {stack.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
          {rest > 0 ? <span className="font-mono text-[11px] text-faint">+{rest}</span> : null}
        </div>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
          Read more
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </Link>
  );
}

/** Dense row used for everything below the core tier. */
export function ProjectRow({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}/`}
      className="group grid gap-x-6 gap-y-1.5 border-b border-line py-4 transition last:border-b-0 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)_auto] md:items-baseline"
    >
      <span className="font-medium leading-snug tracking-tight text-ink transition group-hover:text-accent">
        {project.title}
      </span>
      <span className="text-sm leading-relaxed text-muted md:truncate">{project.blurb}</span>
      <span className="flex items-center gap-3 font-mono text-[11px] text-faint">
        {project.year}
        <ArrowUpRight
          size={13}
          className="text-faint transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
        />
      </span>
    </Link>
  );
}
