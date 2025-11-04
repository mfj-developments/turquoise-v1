import { config } from "dotenv";
import { resolve } from "path";
import { createClient } from "next-sanity";

// Load environment variables from .env.local
config({ path: resolve(__dirname, "../.env.local") });

// Create Sanity client after env vars are loaded
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

/**
 * Create initial site settings in Sanity CMS
 */
async function createSiteSettings() {
  console.log("Creating site settings...");

  try {
    const settings = {
      _type: "settings",
      _id: "siteSettings", // Singleton ID
      siteTitle: "Michael F. Jones — Developer",
      description: "Front-end web developer in Fayetteville, AR.",
      contactEmail: "mfjdevelopments@gmail.com",
      location: "Fayetteville, AR",
      socialLinks: [
        {
          platform: "github",
          url: "https://github.com/mfj-developments",
        },
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/michael-jones-58a03124b/",
        },
        {
          platform: "email",
          url: "mailto:mfjdevelopments@gmail.com",
        },
      ],
      resumeUrl: "/Jones-Front-End-Web-Developer.pdf",
      // Hero section content
      heroBadges: [
        "Front-end web developer",
        "Logistics · Finance · Payments",
        "React · Next.js · Supabase",
      ],
      heroHeading: "Michael F. Jones —",
      heroSubheading: "Front-End Developer",
      heroBio:
        "Experience building data-heavy, production-grade web apps for logistics, finance, and payment clients. At Turbo Labs I developed six React/Next.js products powered by Supabase, REST APIs, and agent-assisted workflows.",
      statCards: [
        {
          icon: "Code2",
          title: "Production launches",
          description: "6 web apps delivered/prototyped at Turbo Labs",
        },
        {
          icon: "Activity",
          title: "Data-rich workflows",
          description: "Grids with 25k+ rows & dashboards over 100k records",
        },
        {
          icon: "MapPin",
          title: "Based in Fayetteville, AR",
          description: "Open to NWA & remote",
        },
      ],
    };

    const result = await client.createOrReplace(settings);
    console.log("✅ Site settings created!");
  } catch (error) {
    console.error("❌ Failed to create settings:", error);
  }
}

createSiteSettings();
