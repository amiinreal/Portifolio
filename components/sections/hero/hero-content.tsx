"use client";

import { motion } from "framer-motion";

export function HeroContent() {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold tracking-tight sm:text-6xl"
      >
        Hi, I'm <span className="text-primary">Your Name</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 text-xl text-muted-foreground"
      >
        A Full Stack Developer passionate about building modern web applications
      </motion.p>
    </>
  );
}