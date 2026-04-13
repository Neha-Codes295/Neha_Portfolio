"use client";

import { Reveal } from "@/components/motion/reveal";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      {eyebrow && (
        <p className="mb-3 font-mono text-[11px] font-medium uppercase tracking-eyebrow text-accent">
          {eyebrow}
        </p>
      )}
      <div className="flex flex-col gap-0 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
        <h2 className="max-w-2xl font-display text-[clamp(1.75rem,4vw,2.5rem)] font-semibold leading-tight tracking-tight text-foreground">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted sm:mt-0 sm:text-right sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
    </Reveal>
  );
}
