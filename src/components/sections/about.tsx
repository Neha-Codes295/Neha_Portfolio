"use client";

import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { site } from "@/data/site";

export function About() {
  return (
    <section id="about" className="section-y scroll-mt-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Engineering with clarity and scale"
          subtitle="A concise snapshot of my background, strengths, and how I like to build."
        />
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-start lg:gap-12">
          <Reveal>
            <div className="surface-card p-7 sm:p-9">
              <p className="font-mono text-[11px] font-medium uppercase tracking-eyebrow text-accent">
                Education
              </p>
              <Link
                href={site.about.schoolUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block font-display text-xl font-semibold tracking-tight text-foreground transition-colors hover:text-accent sm:text-2xl"
              >
                {site.about.school}
                <span className="ml-1 text-base text-muted">↗</span>
              </Link>
              <p className="mt-3 text-[15px] font-medium leading-snug text-foreground">
                {site.about.degree}
              </p>
              <p className="mt-2 text-sm text-muted">{site.about.duration}</p>
              <p className="mt-3 border-t border-border/60 pt-4 text-sm leading-relaxed text-muted">
                CGPA {site.about.cgpa} · Expected graduation {site.about.expectedGraduation}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="space-y-5 text-[15px] leading-relaxed text-muted sm:text-base">
              {site.about.bullets.map((b) => (
                <li key={b} className="flex gap-4">
                  <span
                    className="mt-2 h-px w-8 shrink-0 bg-gradient-to-r from-accent to-transparent"
                    aria-hidden
                  />
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
