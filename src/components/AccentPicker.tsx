"use client";

import { useEffect, useState } from "react";
import { Check, Palette, X } from "lucide-react";

/**
 * TEMPORARY — a floating swatch picker so the accent tint can be compared on
 * the real page instead of in the abstract.
 *
 * Once a tint is chosen: copy that palette's variables out of the
 * "ACCENT PREVIEW" block in globals.css into `:root` and `.light`, then delete
 * that block, delete this file, and remove <AccentPicker /> and the accent line
 * of the theme script from src/app/layout.tsx.
 */

type Option = { key: string; label: string; dark: string; light: string };

const OPTIONS: Option[] = [
  { key: "", label: "Cyan", dark: "#22d3ee", light: "#0891b2" },
  { key: "emerald", label: "Emerald", dark: "#34d399", light: "#059669" },
  { key: "amber", label: "Amber", dark: "#fbbf24", light: "#b45309" },
  { key: "orange", label: "Orange", dark: "#fb923c", light: "#c2410c" },
  { key: "coral", label: "Coral", dark: "#f87171", light: "#dc2626" },
  { key: "violet", label: "Violet", dark: "#a78bfa", light: "#6d28d9" },
];

export default function AccentPicker() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => {
      setActive(root.dataset.accent ?? "");
      setIsLight(root.classList.contains("light"));
    };
    sync();
    // the theme toggle flips a class on <html>; keep the swatches in step
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["class", "data-accent"] });
    return () => observer.disconnect();
  }, []);

  function choose(key: string) {
    const root = document.documentElement;
    if (key) root.dataset.accent = key;
    else delete root.dataset.accent;
    setActive(key);
    try {
      if (key) localStorage.setItem("accent", key);
      else localStorage.removeItem("accent");
    } catch {
      /* private mode — the choice still applies for this session */
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-2 print:hidden">
      {open ? (
        <div className="w-60 rounded-2xl border border-line bg-bg-elevated/95 p-4 shadow-xl backdrop-blur-xl">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">Accent preview</p>
              <p className="mt-1 text-[11px] leading-snug text-muted">
                Temporary — pick one and I&apos;ll bake it in.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close accent picker"
              className="-mr-1 -mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full text-faint transition hover:text-ink"
            >
              <X size={14} />
            </button>
          </div>

          <ul className="mt-4 grid grid-cols-3 gap-2">
            {OPTIONS.map((o) => {
              const swatch = isLight ? o.light : o.dark;
              const selected = active === o.key;
              return (
                <li key={o.key || "default"}>
                  <button
                    type="button"
                    onClick={() => choose(o.key)}
                    aria-pressed={selected}
                    className={`flex w-full flex-col items-center gap-1.5 rounded-xl border px-2 py-2.5 transition ${
                      selected ? "border-accent bg-accent-soft" : "border-line hover:border-line-strong"
                    }`}
                  >
                    <span
                      className="grid h-7 w-7 place-items-center rounded-full"
                      style={{ background: swatch }}
                    >
                      {selected ? <Check size={13} strokeWidth={3} color="#0d0d10" /> : null}
                    </span>
                    <span className="text-[10px] text-muted">{o.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Choose accent colour"
        className="grid h-11 w-11 place-items-center rounded-full border border-line bg-bg-elevated/95 text-muted shadow-lg backdrop-blur-xl transition hover:border-accent hover:text-accent"
      >
        <Palette size={17} />
      </button>
    </div>
  );
}
