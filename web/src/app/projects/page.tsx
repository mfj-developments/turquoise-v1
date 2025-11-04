import { getAllProjects } from "@/lib/sanity/queries";
import ProjectsClient from "./projects-client";

export const metadata = {
  title: "Projects — Michael F. Jones",
  description: "A selection of projects built with modern web tools.",
};

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return <ProjectsClient projects={projects} />;
}
