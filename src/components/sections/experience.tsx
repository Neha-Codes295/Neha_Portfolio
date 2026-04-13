"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { site } from "@/data/site";

export function Experience() {
  return (
    <section id="experience" className="section-y section-muted scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I have shipped impact"
          subtitle="Recent roles focused on full-stack delivery, APIs, and user-facing quality."
        />
        <div className="space-y-6 sm:space-y-8">
          {site.experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 420, damping: 28 }}
                className="surface-card p-7 sm:p-9"
              >
                <div className="flex flex-col gap-3 border-b border-border/50 pb-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                      {job.companyUrl ? (
                        <Link
                          href={job.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-colors hover:text-accent"
                        >
                          {job.company}
                          <span className="ml-1 text-base font-normal text-muted">↗</span>
                        </Link>
                      ) : (
                        job.company
                      )}
                    </h3>
                    <p className="mt-1.5 text-[15px] font-medium text-accent">{job.role}</p>
                  </div>
                  <p className="font-mono text-[11px] font-medium uppercase tracking-eyebrow text-muted">
                    {job.period}
                  </p>
                </div>
                <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-muted">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 pl-0 sm:pl-1">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent/80" aria-hidden />
                      <span className="text-foreground/85">{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
