"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section, FadeIn } from "./Section";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="Production systems and data-driven optimization at enterprise scale."
    >
      <div className="relative">
        <div className="absolute left-[19px] top-0 hidden h-full w-0.5 bg-gradient-to-b from-emerald-400 via-emerald-600 to-emerald-900 md:block" />

        {experience.map((job, index) => (
          <FadeIn key={job.company} delay={index * 0.1}>
            <div className="relative mb-10 md:pl-14">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="absolute left-0 top-1 hidden h-10 w-10 items-center justify-center rounded-full border-2 border-emerald-400 bg-emerald-950 md:flex"
              >
                <Briefcase className="h-4 w-4 text-emerald-400" />
              </motion.div>

              <div className="rounded-2xl border border-emerald-800/40 bg-emerald-950/30 p-6 backdrop-blur-sm md:p-8">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-xl font-semibold text-emerald-50">
                    {job.title}
                  </h3>
                  <span className="text-sm text-emerald-400">{job.period}</span>
                </div>
                <p className="mt-1 text-emerald-300">{job.company}</p>
                <ul className="mt-5 space-y-3">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet.slice(0, 40)}
                      className="flex gap-3 text-sm leading-relaxed text-emerald-100/80 md:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
