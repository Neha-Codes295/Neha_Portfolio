import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center outline-none"
    >
      <p className="font-mono text-[11px] font-semibold uppercase tracking-eyebrow text-accent">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
        The page you requested does not exist or may have moved.
      </p>
      <Link
        href="/"
        className="btn-primary mt-10"
      >
        Back home
      </Link>
    </main>
  );
}
