"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { site } from "@/data/site";

const channels = [
  {
    label: "Email",
    description: site.email,
    href: `mailto:${site.email}`,
    external: false,
    icon: HiMail,
  },
  {
    label: "LinkedIn",
    description: "Roles, collaborations, and professional updates",
    href: site.linkedin,
    external: true,
    icon: FaLinkedin,
  },
  {
    label: "GitHub",
    description: "Open source, projects, and version history",
    href: site.github,
    external: true,
    icon: FaGithub,
  },
] as const;

const cardClass =
  "surface-card group flex h-full min-h-0 flex-col p-7 transition-transform duration-300 ease-out hover:-translate-y-0.5";

export function Contact() {
  return (
    <section id="contact" className="section-y scroll-mt-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Connect"
          subtitle="The fastest way to reach me is LinkedIn or email. I’m responsive and happy to discuss opportunities."
        />

        <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-3 sm:auto-rows-[minmax(0,1fr)] sm:items-stretch">
          {channels.map((c, i) => {
            const Icon = c.icon;
            const isEmail = c.label === "Email";

            const inner = (
              <>
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-muted-bg/40 text-accent transition-colors duration-200 group-hover:border-accent/25 dark:bg-white/[0.04]">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="mt-5 block font-display text-lg font-semibold tracking-tight text-foreground">
                  {c.label}
                </span>
                <span
                  className={
                    isEmail
                      ? "mt-2 block break-all text-[14px] font-medium leading-snug text-foreground sm:text-[15px]"
                      : "mt-2 block text-[13px] leading-relaxed text-muted sm:text-[14px]"
                  }
                >
                  {c.description}
                </span>
                <div className="min-h-0 flex-1" aria-hidden />
                <div className="mt-4 flex min-h-[1.25rem] shrink-0 items-end">
                  {!isEmail ? (
                    <span className="inline-flex items-center gap-1 text-[12px] font-semibold uppercase tracking-wide text-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      Open <span aria-hidden>→</span>
                    </span>
                  ) : null}
                </div>
              </>
            );

            return (
              <Reveal key={c.label} delay={i * 0.06} className="h-full min-h-0">
                <motion.div
                  className="h-full min-h-0"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {c.external ? (
                    <Link
                      href={c.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClass}
                    >
                      {inner}
                    </Link>
                  ) : (
                    <Link href={c.href} className={cardClass}>
                      {inner}
                    </Link>
                  )}
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
