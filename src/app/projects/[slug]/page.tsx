import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { projects, getProject } from "@/content/projects";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Media from "@/components/Media";
import Reveal from "@/components/Reveal";
import { Chip, LinkPill } from "@/components/ui";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Not found" };
  return {
    title: project.title,
    description: project.blurb,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: { title: project.title, description: project.blurb },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Nav standalone />
      <main id="main" className="pt-16">
        <article className="shell py-16 md:py-24">
          <Link
            href="/#work"
            className="group inline-flex items-center gap-2 font-mono text-xs text-muted transition hover:text-accent"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
            ALL WORK
          </Link>

          <header className="mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              {project.context ? <Chip tone="accent">{project.context}</Chip> : null}
              <Chip>{project.year}</Chip>
              {project.categories.map((c) => (
                <Chip key={c}>{c}</Chip>
              ))}
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold tracking-[-0.02em] text-ink sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-muted md:text-xl">{project.blurb}</p>

            {project.links?.length ? (
              <div className="mt-7 flex flex-wrap gap-2">
                {project.links.map((l) => (
                  <LinkPill key={l.href} link={l} />
                ))}
              </div>
            ) : null}
          </header>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_16rem] lg:gap-16">
            <div className="min-w-0 space-y-6">
              {project.body.map((p, i) => (
                <p key={i} className="text-pretty text-base leading-[1.8] text-muted md:text-[1.0625rem]">
                  {p}
                </p>
              ))}

              {project.highlights?.length ? (
                <div className="!mt-10 rounded-2xl border border-line bg-bg-elevated p-6 sm:p-7">
                  <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">Highlights</h2>
                  <ul className="mt-4 space-y-3">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                        <span className="text-pretty">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>

            <aside className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">Stack</h2>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <li key={s}>
                    <Chip>{s}</Chip>
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          {project.media?.length ? (
            <section className="mt-16">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">Gallery</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {project.media.map((m, i) => (
                  <Reveal key={i} delay={i} className="group">
                    <Media item={m} seed={`${project.slug}-${i}`} />
                  </Reveal>
                ))}
              </div>
            </section>
          ) : null}
        </article>

        <section className="border-t border-line bg-bg-sunken py-16">
          <div className="shell">
            <h2 className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">Keep reading</h2>
            <ul className="mt-6 divide-y divide-[color:var(--border)] border-y border-line">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}/`}
                    className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5 transition"
                  >
                    <span className="text-lg font-medium tracking-tight text-ink transition group-hover:text-accent">
                      {p.title}
                    </span>
                    <span className="min-w-0 flex-1 truncate text-sm text-muted">{p.blurb}</span>
                    <span className="font-mono text-[11px] text-faint">{p.year}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
