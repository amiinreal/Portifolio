import { formatDistanceToNow } from "date-fns";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ProjectActions } from "./project-actions";
import type { Project } from "@/types/project";

interface ProjectTableProps {
  projects: Project[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function ProjectTable({ projects, onEdit, onDelete }: ProjectTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Last Updated</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {projects.map((project) => (
          <TableRow key={project.id}>
            <TableCell>{project.title}</TableCell>
            <TableCell>{project.description}</TableCell>
            <TableCell>
              {formatDistanceToNow(new Date(project.updatedAt), {
                addSuffix: true,
              })}
            </TableCell>
            <TableCell>
              <ProjectActions
                onEdit={() => onEdit(project.id)}
                onDelete={() => onDelete(project.id)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}