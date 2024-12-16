import Image from "next/image"
import { CardContent } from "@/components/ui/card"
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
  isIframe?: string
  topics: string[]
}

type ProjectContentProps = {
  repository?: Repository
  project?: Project
}

function isRepository(item: Repository | Project): item is Repository {
  return "html_url" in item
}

export function ProjectContent({ repository, project }: ProjectContentProps) {
  const item = repository || project
  if (!item) return null

  return (
    <CardContent>
      <div className="aspect-video relative mb-4 overflow-hidden rounded-lg">
        {!isRepository(item) && item.figmaUrl && item.isIframe ? (
          <iframe
            src={`${item.figmaUrl.replace("/file/", "/embed/")}`}
            className="h-full w-full border-0"
            allowFullScreen
          />
        ) : (
          <Image
            src={
              isRepository(item)
                ? `https://opengraph.githubassets.com/1/${item.html_url.replace(
                    "https://github.com/",
                    ""
                  )}`
                : item.imageUrl || ""
            }
            alt={isRepository(item) ? item.name : item.title}
            fill
            className="object-cover"
          />
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {item.topics.map((topic) => (
          <Badge key={topic} variant="secondary">
            {topic}
          </Badge>
        ))}
      </div>
    </CardContent>
  )
}
