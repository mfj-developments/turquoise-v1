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
 * Create initial About page content in Sanity CMS
 */
async function createAbout() {
  console.log("Creating About page content...");

  try {
    const about = {
      _type: "about",
      _id: "aboutPage", // Singleton ID
      title: "About",
      bioText:
        "I'm a front-end web developer who specializes in React and Next.js. My recent work at Turbo Labs covered supplier reconciliation dashboards, payments analytics, and automation suites backed by Supabase, REST APIs, and strongly typed UI patterns.",
      badges: [
        {
          label: "Fayetteville, AR",
          icon: "MapPin",
        },
        {
          label: "React · Next.js · TS",
          icon: "Code2",
        },
        {
          label: "UI/UX & Accessibility",
          icon: "Sparkles",
        },
      ],
      infoCards: [
        {
          category: "Focus",
          title: "Front-end delivery",
          description:
            "Data-heavy dashboards, reconciliation tooling, and automation flows using React, Next.js, React Query, and TanStack Table.",
        },
        {
          category: "Tooling",
          title: "Modern & pragmatic",
          description:
            "Supabase, Express, Swagger/OpenAPI, GitHub Actions, ESLint/Prettier, Cypress (exposure), Docker (exposure), Figma.",
        },
        {
          category: "Education",
          title: "University of Arkansas",
          description:
            "B.S. Computer Science (3.77 GPA) with Mathematics & Entrepreneurship minors — May 2025.",
          icon: "GraduationCap",
        },
      ],
      bio: [
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "I'm Michael F. Jones, a front-end focused full-stack developer based in Fayetteville, Arkansas. I recently graduated with a B.S. in Computer Science from the University of Arkansas, where I developed a strong foundation in software engineering, web development, and modern tech stacks.",
            },
          ],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              _type: "span",
              text: "Most recently, I worked at Turbo Labs, where I built production-ready web applications using React, Next.js, and Supabase. I'm passionate about creating clean, accessible user interfaces and leveraging AI tooling to enhance development workflows.",
            },
          ],
        },
      ],
      timeline: [
        {
          year: "2024-2025",
          title: "Software Developer",
          company: "Turbo Labs",
          description:
            "Built full-stack web applications with React, Next.js, and Supabase. Worked on agentic AI workflows and modern development practices.",
        },
        {
          year: "2021-2025",
          title: "B.S. Computer Science",
          company: "University of Arkansas",
          description:
            "Graduated with a degree in Computer Science. Focused on software engineering, web development, and data structures.",
        },
      ],
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Supabase",
        "Node.js",
        "Git",
        "PostgreSQL",
        "REST APIs",
        "Responsive Design",
      ],
      education: [
        {
          degree: "B.S. Computer Science",
          school: "University of Arkansas",
          year: "2025",
          description:
            "Completed degree with focus on software engineering and web development.",
        },
      ],
    };

    const result = await client.createOrReplace(about);
    console.log("✅ About page content created!");
  } catch (error) {
    console.error("❌ Failed to create about content:", error);
  }
}

createAbout();
