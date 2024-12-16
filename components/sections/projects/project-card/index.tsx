"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { ProjectHeader } from "./project-header";
import { ProjectContent } from "./project-content";
import { ProjectFooter } from "./project-footer";
import type { Repository } from "@/lib/github";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  repository?: Repository;
  project?: Project;
}

export function ProjectCard({ repository, project }: ProjectCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const item = repository || project;
  if (!item) return null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <ProjectHeader repository={repository} project={project} />
        <ProjectContent repository={repository} project={project} />
        <ProjectFooter repository={repository} project={project} />
      </Card>
    </motion.div>
  );
}