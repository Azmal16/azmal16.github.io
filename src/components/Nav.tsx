"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/content/profile";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "research", label: "Research" },
  { id: "skills", label: "Skills" },
  { id: "beyond", label: "Beyond Work" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ standalone = false }: { standalone?: boolean }) {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (standalone) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [standalone]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/85 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between gap-4" aria-label="Primary">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-ink transition hover:text-accent"
        >
          azmal<span className="text-accent">.</span>awasaf
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <Link
                href={standalone ? `/#${s.id}` : `#${s.id}`}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  active === s.id ? "text-accent" : "text-muted hover:text-ink"
                }`}
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.cv}
            download=""
            className="hidden rounded-full border border-line-strong px-4 py-1.5 text-sm font-medium text-ink transition hover:border-accent hover:text-accent sm:inline-flex"
          >
            Résumé
          </a>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition hover:border-accent hover:text-accent lg:hidden"
          >
            {open ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-line bg-bg lg:hidden">
          <ul className="shell grid gap-1 py-4">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <Link
                  href={standalone ? `/#${s.id}` : `#${s.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-muted transition hover:bg-surface-hover hover:text-ink"
                >
                  {s.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={profile.cv}
                download=""
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-accent"
              >
                Download résumé
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
