import { beyond } from "@/content/beyond";
import Media from "./Media";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

/**
 * Deliberately lighter in weight than the sections above it — this is the
 * secondary half of the page. Photo slots fill in from src/content/beyond.ts.
 */
export default function Beyond() {
  return (
    <section id="beyond" className="section-pad relative isolate overflow-hidden border-t border-line bg-bg-sunken">
      <div className="grid-bg absolute inset-0 -z-10 opacity-70" aria-hidden />
      <div className="shell">
        <SectionHeading
          index="07 / BEYOND WORK"
          title="The rest of it."
          lead="Not the headline — but it is where a lot of the energy for the headline comes from."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {beyond.map((tile, i) => (
            <Reveal key={tile.key} delay={i} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-surface/70 p-6 backdrop-blur-sm transition duration-300 hover:border-warm/40">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-warm">{tile.kicker}</p>
                <h3 className="mt-2.5 font-display text-2xl italic text-ink">{tile.title}</h3>
                <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted">{tile.body}</p>

                <div
                  className={`mt-6 grid gap-2 ${
                    tile.media.length === 1
                      ? "grid-cols-1"
                      : tile.media.length > 2
                        ? "grid-cols-3"
                        : "grid-cols-2"
                  }`}
                >
                  {tile.media.map((m, j) => (
                    <Media
                      key={j}
                      item={m}
                      seed={`${tile.key}-${j}`}
                      aspect={tile.media.length === 1 ? "aspect-[16/10]" : "aspect-square"}
                      className="rounded-lg"
                    />
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={3}>
          <p className="mt-8 text-center font-mono text-[11px] text-faint">
            Photos landing soon — the layout is already waiting for them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
