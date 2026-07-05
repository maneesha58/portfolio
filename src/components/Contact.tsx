"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { Section, FadeIn } from "./Section";
import { personalInfo } from "@/data/portfolio";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "maneesha-prasanna",
    href: personalInfo.linkedin,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "maneesha58",
    href: personalInfo.github,
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="Open to AI/ML engineering roles, research collaborations, and interesting projects."
    >
      <FadeIn>
        <div className="rounded-2xl border border-emerald-800/40 bg-emerald-950/40 p-8 backdrop-blur-sm md:p-12">
          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label === "Email" || link.label === "Phone" ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 rounded-xl border border-emerald-800/30 bg-emerald-900/20 p-4 transition-all hover:border-emerald-500/40 hover:bg-emerald-800/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-500/15 transition-colors group-hover:bg-emerald-500/25">
                  <link.icon className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-emerald-400/80">{link.label}</p>
                  <p className="text-sm font-medium text-emerald-100">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.a
            href={`mailto:${personalInfo.email}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-emerald-900/40 transition-shadow hover:shadow-emerald-500/30"
          >
            <Send className="h-4 w-4" />
            Send a Message
          </motion.a>
        </div>
      </FadeIn>
    </Section>
  );
}
