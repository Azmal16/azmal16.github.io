import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="font-mono text-xs tracking-[0.24em] text-accent">404</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          Nothing here <span className="font-display italic font-normal">yet</span>.
        </h1>
        <p className="mt-4 text-muted">That page doesn&apos;t exist — or hasn&apos;t been written.</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition hover:bg-accent-strong"
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
