"use client";

import { motion } from "framer-motion";
import { Section, FadeIn } from "./Section";
import { skillCategories } from "@/data/portfolio";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Technical Skills"
      subtitle="Expertise spanning machine learning, generative AI, and full-stack development."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((cat, catIndex) => (
          <FadeIn key={cat.category} delay={catIndex * 0.08}>
            <div className="rounded-2xl border border-emerald-800/40 bg-emerald-950/30 p-6 backdrop-blur-sm transition-colors hover:border-emerald-700/50">
              <h3 className="mb-4 text-lg font-semibold text-emerald-300">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.05 + skillIndex * 0.03 }}
                    className="rounded-full border border-emerald-700/40 bg-emerald-900/50 px-3 py-1.5 text-xs text-emerald-200/90 transition-colors hover:border-emerald-500/50 hover:bg-emerald-800/50 md:text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
