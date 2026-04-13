"use client";

import type { IconType } from "react-icons";
import {
  SiC,
  SiCplusplus,
  SiCss,
  SiDocker,
  SiElasticsearch,
  SiExpress,
  SiFastapi,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { site } from "@/data/site";

const iconByTech: Record<string, IconType> = {
  C: SiC,
  "C++": SiCplusplus,
  HTML: SiHtml5,
  CSS: SiCss,
  SQL: SiMysql,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Nest.js": SiNestjs,
  FastAPI: SiFastapi,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  Elasticsearch: SiElasticsearch,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  Java: SiOpenjdk,
  Docker: SiDocker,
  Git: SiGit,
  "REST APIs": TbApi,
};

export function TechStack() {
  return (
    <section id="tech" className="section-y scroll-mt-24 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tech stack"
          title="Tools I reach for every day"
          subtitle="Organized by layer — from interface to infrastructure."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
          {site.tech.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 26 }}
                className="surface-card h-full p-6 sm:p-7"
              >
                <p className="font-mono text-[11px] font-semibold uppercase tracking-eyebrow text-accent">
                  {group.category}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((name) => {
                    const Icon = iconByTech[name];
                    return (
                      <li
                        key={name}
                        className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted-bg/35 px-3 py-1.5 text-[12px] font-medium text-foreground/95 dark:bg-white/[0.04]"
                      >
                        {Icon ? (
                          <Icon className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden />
                        ) : null}
                        {name}
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
