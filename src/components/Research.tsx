import { FileText } from "lucide-react";
import { research } from "@/content/research";
import Reveal from "./Reveal";
import { Chip, LinkPill, SectionHeading } from "./ui";

export default function Research() {
  const [lead, ...rest] = research;

  return (
    <section id="research" className="section-pad border-t border-line">
      <div className="shell">
        <SectionHeading
          index="04 / RESEARCH"
          title="Questions I'm still chasing."
          lead="Retrieval, autoregressive models and the gap between a benchmark number and something you can trust."
        />

        <Reveal className="relative overflow-hidden rounded-2xl border border-accent/25 bg-bg-elevated p-7 accent-glow sm:p-10">
          <div
            className="absolute right-0 top-0 h-64 w-64 -translate-y-1/3 translate-x-1/3 rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(circle, var(--accent-glow), transparent 68%)" }}
            aria-hidden
          />
          <div className="relative">
            <div className="flex flex-wrap items-center gap-2">
              <Chip tone="accent">{lead.venue ?? "Research"}</Chip>
              <Chip>{lead.status}</Chip>
            </div>
            <h3 className="mt-5 text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {lead.title}
            </h3>
            <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-muted">{lead.summary}</p>

            {lead.points ? (
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {lead.points.map((p, i) => (
                  <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <FileText size={14} className="mt-0.5 shrink-0 text-accent" />
                    <span className="text-pretty">{p}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {lead.stack ? (
              <div className="mt-6 flex flex-wrap gap-1.5">
                {lead.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            ) : null}

            {lead.links?.length ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {lead.links.map((l) => (
                  <LinkPill key={l.href} link={l} />
                ))}
              </div>
            ) : null}
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {rest.map((item, i) => (
            <Reveal key={item.title} delay={i + 1} className="h-full">
              <article className="flex h-full flex-col rounded-2xl border border-line bg-bg-elevated p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">{item.status}</p>
                <h3 className="mt-3 text-base font-semibold leading-snug tracking-tight text-ink">{item.title}</h3>
                <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted">{item.summary}</p>
                {item.points ? (
                  <ul className="mt-4 space-y-2">
                    {item.points.map((p, j) => (
                      <li key={j} className="flex gap-2 text-xs leading-relaxed text-muted">
                        <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent/60" aria-hidden />
                        <span className="text-pretty">{p}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {item.stack ? (
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {item.stack.slice(0, 4).map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
