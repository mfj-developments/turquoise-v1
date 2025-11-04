import { getAllProjects, getSettings, getAbout } from "@/lib/sanity/queries";
import HomeClient from "./home-client";

export default async function Home() {
  const [projects, settings, about] = await Promise.all([
    getAllProjects(),
    getSettings(),
    getAbout(),
  ]);

  return <HomeClient projects={projects} settings={settings} about={about} />;
}
