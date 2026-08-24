import { apps } from "@/content/apps";
import Media from "./Media";
import Reveal from "./Reveal";
import { Chip, LinkPill, SectionHeading } from "./ui";

export default function Apps() {
  return (
    <section id="apps" className="section-pad border-t border-line bg-bg-sunken">
      <div className="shell">
        <SectionHeading
          index="05 / SHIPPED"
          title="Live on the App Store."
          lead="Two products carrying models I trained, in the hands of people who never think about the model."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {apps.map((app, i) => (
            <Reveal key={app.name} delay={i} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface card-shadow">
                <Media
                  item={app.media?.[0] ?? { src: "", alt: `${app.name} screenshot` }}
                  seed={app.name}
                  aspect="aspect-[16/9]"
                  className="rounded-none border-0 border-b border-line"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold tracking-tight text-ink">{app.name}</h3>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">{app.tagline}</p>
                  <p className="mt-4 flex-1 text-pretty text-sm leading-relaxed text-muted">{app.description}</p>
                  <p className="mt-4 text-xs text-faint">{app.role}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {app.stack.map((s) => (
                      <Chip key={s}>{s}</Chip>
                    ))}
                  </div>
                  {app.links?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {app.links.map((l) => (
                        <LinkPill key={l.href} link={l} />
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
