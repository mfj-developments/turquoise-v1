import { config } from "dotenv";
import { resolve } from "path";
import { createClient } from "next-sanity";

// Load environment variables from .env.local
config({ path: resolve(__dirname, "../.env.local") });

import projectsArchive from "../src/data/projects-archive.json";

// Create Sanity client after env vars are loaded
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN, // Optional - for write operations
});

/**
 * Import archived projects into Sanity CMS
 */
async function importProjects() {
  console.log("Starting project import...");
  console.log(`Project ID: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`);
  console.log(`Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET}`);

  for (const project of projectsArchive) {
    try {
      const doc = {
        _type: "project",
        title: project.title,
        slug: {
          _type: "slug",
          current: project.slug,
        },
        summary: project.summary,
        stack: project.stack,
        liveUrl: project.links.live === "#" ? undefined : project.links.live,
        repoUrl: project.links.repo === "#" ? undefined : project.links.repo,
        caseStudyUrl: (project.links as any).caseStudy,
        featured: project.featured || false,
        order: 0,
      };

      const result = await client.create(doc);
      console.log(`✅ Created: ${project.title}`);
    } catch (error) {
      console.error(`❌ Failed to create ${project.title}:`, error);
    }
  }

  console.log("\n✨ Import complete!");
}

importProjects();
