import { Star, GitFork, ExternalLink, Github } from "lucide-react";
import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Repository } from "@/lib/github";
import type { Project } from "@/types/project";

interface ProjectFooterProps {
  repository?: Repository;
  project?: Project;
}

export function ProjectFooter({ repository, project }: ProjectFooterProps) {
  if (!repository && !project) return null;

  return (
    <CardFooter className="flex justify-between">
      {repository && (
        <>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" />
              <span>{repository.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4" />
              <span>{repository.forks_count}</span>
            </div>
          </div>
          <div className="flex gap-2">
            {repository.homepage && (
              <Button size="icon" variant="outline" asChild>
                <a href={repository.homepage} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            )}
            <Button size="icon" variant="outline" asChild>
              <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </>
      )}
      {project && (
        <div className="flex gap-2">
          {project.demoUrl && (
            <Button size="icon" variant="outline" asChild>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button size="icon" variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      )}
    </CardFooter>
  );
}