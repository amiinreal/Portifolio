"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star, GitFork, ExternalLink, Github } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Repository } from "@/lib/github"

interface Project {
  id: string
  title: string
  description: string
  imageUrl?: string | null
  figmaUrl?: string | null
  demoUrl?: string | null
  githubUrl?: string | null
  topics: string[]
}

type ProjectCardProps = {
  repository?: Repository
  project?: Project
}

function isRepository(item: Repository | Project): item is Repository {
  return "html_url" in item
}

export function ProjectCard({ repository, project }: ProjectCardProps) {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const item = repository || project

  if (!item) return null

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
    >
      <Card>
        <CardHeader>
          <CardTitle>{isRepository(item) ? item.name : item.title}</CardTitle>
          <CardDescription>{item.description}</CardDescription>
        </CardHeader>
        <CardContent>
          {(isRepository(item)
            ? `https://opengraph.githubassets.com/1/${item.html_url.replace(
                "https://github.com/",
                ""
              )}`
            : item.imageUrl) && (
            <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
              <Image
                src={
                  isRepository(item)
                    ? `https://opengraph.githubassets.com/1/${item.html_url.replace(
                        "https://github.com/",
                        ""
                      )}`
                    : item.imageUrl!
                }
                alt={isRepository(item) ? item.name : item.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="flex flex-wrap gap-2">
            {item.topics.map((topic) => (
              <Badge key={topic} variant="secondary">
                {topic}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          {isRepository(item) ? (
            <>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  <span>{item.stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="h-4 w-4" />
                  <span>{item.forks_count}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="icon" variant="outline" asChild>
                  <a
                    href={item.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </>
          ) : (
            <div className="flex gap-2">
              {item.figmaUrl && (
                <Button size="icon" variant="outline" asChild>
                  <a
                    href={item.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 38 57" className="h-4 w-4">
                      <path
                        fill="currentColor"
                        d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"
                      />
                    </svg>
                  </a>
                </Button>
              )}
              {item.githubUrl && (
                <Button size="icon" variant="outline" asChild>
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {item.demoUrl && (
                <Button size="icon" variant="outline" asChild>
                  <a
                    href={item.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
