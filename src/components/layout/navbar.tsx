"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { site } from "@/data/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#tech", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,border-color] duration-500 ease-out ${
        scrolled
          ? "border-b border-border/70 bg-background/75 shadow-[0_8px_30px_-8px_rgba(0,0,0,0.08)] backdrop-blur-xl dark:border-border/50 dark:bg-background/70 dark:shadow-[0_12px_40px_-10px_rgba(0,0,0,0.65)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-[3.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link
          href="#hero"
          className="font-display text-[15px] font-semibold tracking-tight text-foreground sm:text-base"
        >
          {site.name}
          <span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-0.5 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="rounded-full px-3.5 py-2 text-[13px] font-medium tracking-tight text-muted transition-colors duration-200 hover:bg-foreground/[0.04] hover:text-foreground dark:hover:bg-white/[0.05]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-full p-2.5 text-foreground transition-colors hover:bg-foreground/[0.06] md:hidden dark:hover:bg-white/[0.06]"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <HiX className="h-5 w-5" /> : <HiMenuAlt3 className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-border/70 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col px-4 py-2 pb-4">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block rounded-xl px-3 py-3 text-[15px] font-medium text-foreground transition-colors hover:bg-foreground/[0.04] dark:hover:bg-white/[0.05]"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
