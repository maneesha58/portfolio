"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, ChevronDown } from "lucide-react";
import { SkyBackground } from "./SkyBackground";
import { personalInfo } from "@/data/portfolio";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <SkyBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-[#081c15]/95" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-24 pb-16 text-center md:pt-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center"
        >
          <motion.div variants={item} className="relative mb-8">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-violet-400 via-indigo-300 to-emerald-400 opacity-70 blur-md" />
            <div className="relative overflow-hidden rounded-full ring-4 ring-indigo-300/40">
              <Image
                src="/profile.jpeg"
                alt={personalInfo.name}
                width={208}
                height={208}
                className="h-44 w-44 object-cover object-center md:h-52 md:w-52"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 max-w-2xl text-base leading-relaxed text-emerald-100/90 md:text-lg"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-3 flex items-center gap-2 text-sm text-emerald-300/80"
          >
            <MapPin className="h-4 w-4" />
            {personalInfo.location}
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-900/40 transition-all hover:bg-emerald-400 hover:shadow-emerald-500/30"
            >
              <Github className="h-4 w-4 transition-transform group-hover:scale-110" />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-6 py-3 text-sm font-medium text-emerald-100 backdrop-blur-sm transition-all hover:border-emerald-300 hover:bg-emerald-500/20"
            >
              <Linkedin className="h-4 w-4 transition-transform group-hover:scale-110" />
              LinkedIn
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-6 py-3 text-sm font-medium text-emerald-100 backdrop-blur-sm transition-all hover:border-emerald-300 hover:bg-emerald-500/20"
            >
              <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
              Email
            </a>
          </motion.div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-emerald-300/60 transition-colors hover:text-emerald-300"
          aria-label="Scroll to about"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ChevronDown className="h-8 w-8" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
