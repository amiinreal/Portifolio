import {
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import type { Repository } from "@/lib/github";
import type { Project } from "@/types/project";

interface ProjectHeaderProps {
  repository?: Repository;
  project?: Project;
}

export function ProjectHeader({ repository, project }: ProjectHeaderProps) {
  if (!repository && !project) return null;
  
  return (
    <CardHeader>
      <CardTitle>{repository?.name || project?.title}</CardTitle>
      <CardDescription>{repository?.description || project?.description}</CardDescription>
    </CardHeader>
  );
}