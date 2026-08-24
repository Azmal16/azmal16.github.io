import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight, Github, FileText, Apple, Play, Mail, Linkedin } from "lucide-react";
import type { Link as LinkType } from "@/lib/types";

export function SectionHeading({
  index,
  title,
  lead,
  id,
}: {
  index: string;
  title: string;
  lead?: string;
  id?: string;
}) {
  return (
    <header className="mb-12 max-w-2xl md:mb-16" id={id}>
      <span className="font-mono text-xs tracking-[0.24em] text-accent">{index}</span>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {lead ? <p className="mt-4 text-pretty text-base leading-relaxed text-muted md:text-lg">{lead}</p> : null}
    </header>
  );
}

export function Chip({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "accent" }) {
  const styles =
    tone === "accent"
      ? "border-accent/30 bg-accent-soft text-accent"
      : "border-line bg-bg-elevated text-muted";
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-[11px] tracking-wide ${styles}`}>
      {children}
    </span>
  );
}

const ICONS = {
  github: Github,
  external: ArrowUpRight,
  paper: FileText,
  appstore: Apple,
  playstore: Play,
  mail: Mail,
  linkedin: Linkedin,
} as const;

export function LinkPill({ link }: { link: LinkType }) {
  const Icon = ICONS[link.icon ?? "external"];
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer noopener"
      className="group/pill inline-flex items-center gap-1.5 rounded-full border border-line bg-bg-elevated px-3 py-1.5 text-xs font-medium text-muted transition hover:border-accent/50 hover:text-accent"
    >
      <Icon size={13} />
      {link.label}
      <ArrowUpRight size={12} className="transition-transform group-hover/pill:translate-x-0.5 group-hover/pill:-translate-y-0.5" />
    </a>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
  download,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
  download?: boolean;
}) {
  const styles =
    variant === "primary"
      ? "bg-accent text-bg hover:bg-accent-strong hover:text-bg"
      : "border border-line-strong text-ink hover:border-accent hover:text-accent";

  const className = `group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${styles}`;

  if (external || download) {
    return (
      <a
        href={href}
        className={className}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
        {...(download ? { download: "" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
