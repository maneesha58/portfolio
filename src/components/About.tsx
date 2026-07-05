import { Section, FadeIn } from "./Section";
import { about } from "@/data/portfolio";

export function About() {
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="Building intelligent systems at the intersection of research and production."
    >
      <FadeIn>
        <div className="rounded-2xl border border-emerald-800/40 bg-emerald-950/40 p-8 backdrop-blur-sm md:p-10">
          <p className="text-lg leading-relaxed text-emerald-100/85">{about}</p>
        </div>
      </FadeIn>
    </Section>
  );
}
