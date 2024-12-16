import { getRepositories, type Repository } from "@/lib/github"
import { getProjects } from "@/lib/api/projects"
import { ProjectCard } from "@/components/project-card"
import { FigmaProjects } from "@/components/sections/figma-projects"
import type { Project } from "@/types/project"
import React from "react"

export async function Projects() {
  const [repositories, projects] = await Promise.all([
    getRepositories("amiinreal"),
    getProjects(),
  ])

  return (
    <section
      id="projects"
      className="container mx-auto px-4 py-24 sm:px-6 lg:px-8"
    >
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Projects
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Here are some of my recent projects. Check out my GitHub for more!
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Display custom projects first */}
        {projects.map((project: Project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {/* Then display GitHub repositories */}
        {repositories.map((repo) => (
          <ProjectCard key={repo.id} repository={repo} />
        ))}
      </div>
    </section>
  )
}
