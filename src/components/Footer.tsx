import { profile } from "@/content/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg-sunken">
      <div className="shell flex flex-col items-center justify-between gap-3 py-8 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-[11px] text-faint">
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <p className="font-mono text-[11px] text-faint">
          Built with Next.js &amp; Tailwind ·{" "}
          <a
            href={`${profile.github}/azmal16.github.io`}
            target="_blank"
            rel="noreferrer noopener"
            className="transition hover:text-accent"
          >
            source
          </a>
        </p>
      </div>
    </footer>
  );
}
