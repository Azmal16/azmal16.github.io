import { GraduationCap, Briefcase, Rocket, Trophy } from "lucide-react";
import { profile } from "@/content/profile";
import { education, certifications } from "@/content/education";
import { awards } from "@/content/awards";
import Media from "./Media";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-line">
      <div className="shell">
        <SectionHeading
          index="01 / ABOUT"
          title="Between the paper and the product."
          lead="Trained as an engineer, currently a researcher, consistently happiest when a model ends up in someone's hands."
        />

        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
          <Reveal className="space-y-5">
            {profile.about.map((p, i) => (
              <p key={i} className="text-pretty text-base leading-[1.75] text-muted md:text-[1.0625rem]">
                {p}
              </p>
            ))}

            <div className="grid gap-4 pt-6 sm:grid-cols-2">
              {education.map((e) => (
                <div key={e.school} className="rounded-xl border border-line bg-bg-elevated p-5">
                  <GraduationCap size={16} className="text-accent" />
                  <h3 className="mt-3 text-sm font-semibold text-ink">{e.school}</h3>
                  <p className="mt-1 text-sm leading-snug text-muted">{e.credential}</p>
                  <p className="mt-2 font-mono text-[11px] text-faint">
                    {e.period} · {e.location}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={2} className="space-y-6">
            <Media
              item={profile.portrait.src ? profile.portrait : { src: "", alt: "Portrait of Azmal Awasaf", caption: "Portrait coming soon" }}
              seed="portrait"
              aspect="aspect-[4/5]"
              className="group"
            />

            <div className="rounded-xl border border-line bg-bg-elevated p-5">
              <h3 className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                <Trophy size={13} className="text-warm" />
                Selected recognition
              </h3>
              <ul className="mt-4 space-y-3.5">
                {awards.map((a) => (
                  <li key={a.title} className="flex gap-3">
                    <span className="mt-0.5 font-mono text-[11px] text-faint">{a.year}</span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium leading-snug text-ink">{a.title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted">{a.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-bg-elevated p-5">
              <h3 className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                <Rocket size={13} className="text-accent" />
                Certifications
              </h3>
              <ul className="mt-4 space-y-2">
                {certifications.map((c) => (
                  <li key={c.title} className="flex items-baseline justify-between gap-3 text-sm">
                    <span className="text-muted">{c.title}</span>
                    <span className="shrink-0 font-mono text-[11px] text-faint">{c.year}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
