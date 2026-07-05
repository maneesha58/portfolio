"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Section, FadeIn } from "./Section";
import { achievements } from "@/data/portfolio";

export function Achievements() {
  return (
    <Section
      id="achievements"
      title="Achievements"
      subtitle="Recognition for technical excellence and academic performance."
    >
      <div className="grid gap-5 md:grid-cols-3">
        {achievements.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.1}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-2xl border border-emerald-800/40 bg-gradient-to-br from-emerald-950/50 to-emerald-900/20 p-6 backdrop-blur-sm"
            >
              <Award className="mb-4 h-8 w-8 text-amber-400" />
              <h3 className="font-semibold text-emerald-50">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-emerald-100/70">
                {item.description}
              </p>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
