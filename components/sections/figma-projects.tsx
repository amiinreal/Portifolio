// components/sections/figma-projects.tsx
"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ProjectCard } from "@/components/project-card"
import type { Project } from "@/types/project"
import { useEffect, useState } from "react"

export function FigmaProjects() {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const [figmaProjects, setFigmaProjects] = useState<Project[]>([])

  useEffect(() => {
    async function fetchProjects() {
      const response = await fetch('/api/projects')
      const data = await response.json()
      const filtered = data.filter((project: Project) => project.figmaUrl)
      setFigmaProjects(filtered)
    }
    fetchProjects()
  }, [])

  if (!figmaProjects.length) return null

  return (
    <section
      id="figma-projects"
      className="container mx-auto px-4 py-24 sm:px-6 lg:px-8"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Figma Projects
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore my UI/UX design work and prototypes created in Figma
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {figmaProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
