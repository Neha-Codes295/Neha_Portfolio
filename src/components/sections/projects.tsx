"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { site } from "@/data/site";

export function Projects() {
  return (
    <section id="projects" className="section-y section-muted scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          subtitle="Products and platforms where I owned features, integrations, and performance."
        />
        <div className="grid gap-6 sm:gap-8 lg:grid-cols-3">
          {site.projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 24 }}
                className="group surface-card flex h-full flex-col p-7"
              >
                <div className="mb-1 flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    {p.title}
                  </h3>
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent opacity-60 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-muted sm:text-[15px]">
                  {p.description}
                </p>
                <ul className="mt-5 space-y-2 text-[13px] leading-snug text-muted">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="font-mono text-accent/90">·</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/70 bg-muted-bg/40 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-foreground/90 dark:bg-white/[0.04]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex gap-3 border-t border-border/50 pt-6">
                  <Link
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border/80 py-2.5 text-[13px] font-semibold text-foreground transition-colors hover:border-accent/35 hover:bg-accent/[0.06]"
                  >
                    <FaGithub className="h-4 w-4 opacity-80" />
                    Code
                  </Link>
                  <Link
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-foreground py-2.5 text-[13px] font-semibold text-background transition-opacity hover:opacity-90"
                  >
                    <FaExternalLinkAlt className="h-3 w-3 opacity-90" />
                    Live
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
