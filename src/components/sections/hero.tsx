"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowDown, HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { site } from "@/data/site";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const resumeIsLocal = site.resumeUrl.startsWith("/");

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden pt-[3.25rem] sm:pt-16"
    >
      <div className="pointer-events-none absolute inset-0 hero-gradient" />
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-70 dark:opacity-100" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[22rem] w-[22rem] rounded-full bg-accent/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-[18rem] w-[18rem] rounded-full bg-accent-muted/12 blur-[100px] dark:bg-accent/10" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.div variants={item} className="mb-6 flex justify-center">
          <span className="inline-flex items-center rounded-full border border-border/80 bg-surface/60 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-eyebrow text-muted backdrop-blur-sm dark:bg-surface/40">
            Available for opportunities
          </span>
        </motion.div>
        <motion.h1
          variants={item}
          className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-tight text-foreground"
        >
          {site.name}
        </motion.h1>
        <motion.p
          variants={item}
          className="mt-5 text-base font-medium text-muted sm:text-lg md:text-xl"
        >
          {site.title}
        </motion.p>
        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base"
        >
          {site.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <Link href="#projects" className="btn-primary">
            View projects
          </Link>
          <a
            href={site.resumeUrl}
            download={resumeIsLocal ? "Neha_Resume.pdf" : undefined}
            target={resumeIsLocal ? undefined : "_blank"}
            rel={resumeIsLocal ? undefined : "noopener noreferrer"}
            className="btn-secondary"
          >
            Download resume
          </a>
          <Link href="#contact" className="btn-secondary inline-flex gap-2">
            <HiMail className="h-4 w-4 opacity-80" aria-hidden />
            Contact
          </Link>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border/90 bg-surface/60 text-muted backdrop-blur-sm transition-all duration-200 hover:border-accent/35 hover:text-foreground dark:bg-surface/40"
            aria-label="GitHub"
          >
            <FaGithub className="h-[18px] w-[18px]" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border/90 bg-surface/60 text-muted backdrop-blur-sm transition-all duration-200 hover:border-accent/35 hover:text-foreground dark:bg-surface/40"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-[18px] w-[18px]" />
          </a>
        </motion.div>

        <motion.div variants={item} className="mt-20 flex justify-center sm:mt-24">
          <Link
            href="#about"
            className="group flex flex-col items-center gap-2 text-[11px] font-semibold uppercase tracking-eyebrow text-muted transition-colors hover:text-foreground"
            aria-label="Scroll to about"
          >
            <span>Scroll</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="rounded-full border border-border/80 p-1.5 transition-colors group-hover:border-accent/30"
            >
              <HiArrowDown className="h-4 w-4" />
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
