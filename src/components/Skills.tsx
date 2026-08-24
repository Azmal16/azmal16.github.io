import { skills } from "@/content/skills";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-line">
      <div className="shell">
        <SectionHeading
          index="06 / TOOLKIT"
          title="What I reach for."
          lead="Listed because recruiters search for them — but the grouping is honest about where I actually spend my time."
        />

        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
          {skills.map((group, i) => (
            <Reveal
              key={group.name}
              delay={i}
              className={`bg-bg-elevated p-6 sm:p-7 ${
                i === skills.length - 1 && skills.length % 2 === 1 ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">{group.name}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-line bg-surface px-2.5 py-1.5 text-[13px] text-muted transition hover:border-accent/40 hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
