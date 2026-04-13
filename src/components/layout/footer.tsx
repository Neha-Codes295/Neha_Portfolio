import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted-bg/40 py-14 dark:bg-muted-bg/20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        <p className="font-display text-sm font-semibold tracking-tight text-foreground">
          Made with{" "}
          <span
            className="inline-block align-middle text-lg leading-none text-red-500 dark:text-red-400"
            role="img"
            aria-label="heart"
          >
            ❤️
          </span>
        </p>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          © 2026 · {site.name}
        </p>
      </div>
    </footer>
  );
}
