"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "SQL",
  "MongoDB",
  "AWS",
  "Docker",
];

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="container mx-auto px-4 py-24 sm:px-6 lg:px-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
        <p className="mt-6 text-lg text-muted-foreground">
          I'm a passionate full-stack developer with experience in building modern web
          applications. I love learning new technologies and solving complex problems.
          My journey in software development started [X] years ago, and since then,
          I've worked on various projects ranging from small business websites to
          large-scale enterprise applications.
        </p>

        <h3 className="mt-12 text-2xl font-bold">Skills</h3>
        <div className="mt-6 flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge key={skill} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </motion.div>
    </section>
  );
}