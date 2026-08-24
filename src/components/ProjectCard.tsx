import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/types";
import Media from "./Media";
import { Chip } from "./ui";

export default function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  const stack = project.stack.slice(0, wide ? 6 : 4);
  const rest = project.stack.length - stack.length;

  return (
    <Link
      href={`/projects/${project.slug}/`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-hover card-shadow ${
        wide ? "sm:flex-row" : ""
      }`}
    >
      <div className={wide ? "sm:w-[42%] lg:w-[38%] sm:shrink-0" : ""}>
        <Media
          item={project.media?.[0] ?? { src: "", alt: `${project.title} preview` }}
          seed={project.slug}
          aspect={wide ? "aspect-[16/10] sm:aspect-auto sm:h-full" : "aspect-[16/10]"}
          className="rounded-none border-0 border-b border-line sm:border-b-0"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            {project.context ? (
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{project.context}</p>
            ) : null}
            <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-ink">{project.title}</h3>
          </div>
          <span className="mt-1 shrink-0 font-mono text-[11px] text-faint">{project.year}</span>
        </div>

        <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted">{project.blurb}</p>

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
