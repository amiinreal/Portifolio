"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollTo } from "@/hooks/use-scroll-to";

export function HeroActions() {
  const scrollToProjects = useScrollTo("projects");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-10"
    >
      <Button onClick={scrollToProjects} size="lg">
        View My Work
        <ArrowDown className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  );
}