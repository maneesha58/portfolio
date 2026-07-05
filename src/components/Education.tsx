import { GraduationCap } from "lucide-react";
import { Section, FadeIn } from "./Section";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <Section
      id="education"
      title="Education"
      subtitle="Strong academic foundation in computer science and machine learning."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu, index) => (
          <FadeIn key={edu.degree} delay={index * 0.1}>
            <div className="rounded-2xl border border-emerald-800/40 bg-emerald-950/30 p-6 backdrop-blur-sm md:p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/15">
                <GraduationCap className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold text-emerald-50">{edu.degree}</h3>
              <p className="mt-1 text-emerald-300">{edu.school}</p>
              <p className="mt-2 text-sm font-medium text-emerald-400">{edu.detail}</p>
              {edu.coursework && (
                <p className="mt-4 text-sm leading-relaxed text-emerald-100/70">
                  <span className="font-medium text-emerald-200/90">Coursework: </span>
                  {edu.coursework}
                </p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
