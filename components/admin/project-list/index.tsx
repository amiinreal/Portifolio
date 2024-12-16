"use client";

import { useEffect, useState } from "react";
import { getProjects } from "@/lib/api/projects";
import { ProjectTable } from "./project-table";
import type { Project } from "@/types/project";

export function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    }
    fetchProjects();
  }, []);

  const handleEdit = (id: string) => {
    // TODO: Implement edit functionality
    console.log("Edit project:", id);
  };

  const handleDelete = (id: string) => {
    // TODO: Implement delete functionality
    console.log("Delete project:", id);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <ProjectTable
        projects={projects}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}