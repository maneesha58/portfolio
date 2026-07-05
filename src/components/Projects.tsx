"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Section, FadeIn } from "./Section";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="From NLP research to medical imaging, mobile apps, and distributed ML."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.06}>
            <motion.article
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group flex h-full flex-col rounded-2xl border border-emerald-800/40 bg-emerald-950/30 p-6 backdrop-blur-sm transition-shadow hover:border-emerald-600/50 hover:shadow-xl hover:shadow-emerald-900/30 md:p-7"
            >
              <h3 className="text-lg font-semibold leading-snug text-emerald-50 group-hover:text-emerald-300 transition-colors">
                {project.title}
              </h3>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-emerald-900/60 px-2 py-0.5 text-xs text-emerald-300/90"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-emerald-100/75">
                {project.description}
              </p>

              {project.highlights && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs text-amber-200"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-emerald-600/40 bg-emerald-800/30 px-4 py-2 text-sm text-emerald-200 transition-all hover:border-emerald-400 hover:bg-emerald-700/40"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              )}
            </motion.article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
