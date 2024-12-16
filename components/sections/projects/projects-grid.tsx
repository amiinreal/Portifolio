"use client";

import { ProjectCard } from "./project-card";
import type { Repository } from "@/lib/github";

interface ProjectsGridProps {
  repositories: Repository[];
}

export function ProjectsGrid({ repositories }: ProjectsGridProps) {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {repositories.map((repo) => (
        <ProjectCard key={repo.id} repository={repo} />
      ))}
    </div>
  );
}