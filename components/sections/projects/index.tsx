import { getRepositories } from "@/lib/github";
import { ProjectsGrid } from "./projects-grid";
import { ProjectsHeader } from "./projects-header";

export async function Projects() {
  const repositories = await getRepositories("your-github-username");

  return (
    <section id="projects" className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <ProjectsHeader />
      <ProjectsGrid repositories={repositories} />
    </section>
  );
}