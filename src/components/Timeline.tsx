import { experience } from "@/content/experience";
import Reveal from "./Reveal";
import { Chip, SectionHeading } from "./ui";

export default function Timeline() {
  return (
    <section id="experience" className="section-pad border-t border-line bg-bg-sunken">
      <div className="shell">
        <SectionHeading
          index="03 / EXPERIENCE"
          title="Where I've done it."
          lead="Three years of shipping machine learning that people outside the team actually use."
        />

        <ol className="relative max-w-3xl border-l border-line pl-8 sm:pl-10">
          {experience.map((role, i) => (
            <Reveal as="li" key={`${role.org}-${role.period}`} delay={i} className="relative pb-14 last:pb-0">
              <span
                className={`absolute -left-[41px] top-1.5 grid h-4 w-4 place-items-center rounded-full border-2 sm:-left-[49px] ${
                  role.current ? "border-accent bg-accent" : "border-line-strong bg-bg"
                }`}
                aria-hidden
              >
                {role.current ? <span className="h-1.5 w-1.5 rounded-full bg-bg" /> : null}
              </span>

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight text-ink sm:text-xl">{role.title}</h3>
                {role.current ? <Chip tone="accent">Current</Chip> : null}
              </div>
              <p className="mt-1 text-sm text-accent">{role.org}</p>
              <p className="mt-0.5 font-mono text-[11px] text-faint">
                {role.period} · {role.location}
              </p>

              <ul className="mt-4 space-y-2.5">
                {role.points.map((p, j) => (
                  <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent/60" aria-hidden />
                    <span className="text-pretty">{p}</span>
                  </li>
                ))}
              </ul>

              {role.stack ? (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {role.stack.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              ) : null}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
