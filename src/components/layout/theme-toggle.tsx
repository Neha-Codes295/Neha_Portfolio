"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiMoon, HiSun } from "react-icons/hi";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span className="inline-flex h-9 w-9 shrink-0 rounded-full border border-border/80 bg-surface/60" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/80 bg-surface/60 text-foreground backdrop-blur-sm transition-all duration-200 hover:border-accent/35 hover:bg-accent/[0.07] dark:bg-surface/40"
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <HiSun className="h-[17px] w-[17px]" />
      ) : (
        <HiMoon className="h-[17px] w-[17px]" />
      )}
    </button>
  );
}
