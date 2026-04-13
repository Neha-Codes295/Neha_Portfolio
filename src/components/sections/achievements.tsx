"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { site } from "@/data/site";

export function Achievements() {
  return (
    <section id="achievements" className="section-y scroll-mt-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Achievements"
          title="Proof of depth and consistency"
          subtitle="Competitive programming and community recognition that mirror how I approach hard problems."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {site.achievements.map((a, i) => (
            <Reveal key={`${a.label}-${a.value}`} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="surface-card flex h-full flex-col p-6 sm:p-7"
              >
                <p className="font-mono text-[11px] font-medium uppercase tracking-eyebrow text-muted">
                  {a.label}
                </p>
                {a.href ? (
                  <Link
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex flex-1 items-end justify-between gap-3 font-display text-2xl font-semibold tracking-tight text-foreground transition-colors hover:text-accent sm:text-[1.65rem]"
                  >
                    <span>{a.value}</span>
                    <HiExternalLink className="h-5 w-5 shrink-0 opacity-50" aria-hidden />
                  </Link>
                ) : (
                  <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-[1.65rem]">
                    {a.value}
                  </p>
                )}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
