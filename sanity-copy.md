# Sanity CMS Content Migration Guide

This guide outlines the complete process for transferring website content from hardcoded values to Sanity CMS.

## Overview

When adding Sanity CMS to an existing website, follow this systematic process:
1. Analyze existing content structure
2. Create Sanity schemas
3. Create import scripts
4. Update queries
5. Connect frontend components
6. Test and verify

---

## Step 1: Analyze Existing Content

Before creating schemas, document all content on your site by section:

### Example: Homepage Hero Section
```
Content Structure:
- Badges (array of strings): ["Front-end web developer", "React · Next.js"]
- Heading (string): "Michael F. Jones —"
- Subheading (string): "Front-End Developer"
- Bio (text): "Experience building data-heavy..."
- Stat Cards (array of objects):
  - icon (string): "Code2"
  - title (string): "Production launches"
  - description (string): "6 web apps delivered..."
```

### Example: About Section
```
Content Structure:
- Title (string): "About"
- Bio Text (text): "I'm a front-end web developer..."
- Badges (array of objects):
  - label (string): "Fayetteville, AR"
  - icon (string): "MapPin"
- Info Cards (array of objects):
  - category (string): "Focus"
  - title (string): "Front-end delivery"
  - description (text): "Data-heavy dashboards..."
  - icon (string, optional): "GraduationCap"
```

**Key Questions to Ask:**
- Is this a singleton (only one instance) or collection?
- What field types are needed? (string, text, image, array, object)
- Should fields be required or optional?
- Are there relationships to other content types?

---

## Step 2: Create Sanity Schemas

### A. Choose Schema Location

For singletons (Settings, About), use the `settings` pattern with a fixed `_id`:
- One Settings document controls site-wide content
- One About document controls about section

For collections (Projects, Blog Posts), use regular documents:
- Multiple project documents
- Each has its own unique ID

### B. Settings Schema Example

**File**: `web/sanity/schemas/settings.ts`

```typescript
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Site Settings",
  type: "document",
  fields: [
    // Basic site info
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    // Hero Section
    defineField({
      name: "heroBadges",
      title: "Hero Badges",
      type: "array",
      of: [{ type: "string" }],
      description: "Small badges shown above hero heading",
      validation: (Rule) => Rule.max(3),
    }),

    defineField({
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
      description: "Main heading on homepage",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "heroSubheading",
      title: "Hero Subheading",
      type: "string",
      description: "Highlighted part of the heading",
    }),

    defineField({
      name: "heroBio",
      title: "Hero Bio",
      type: "text",
      rows: 3,
      description: "Short bio paragraph shown in hero section",
      validation: (Rule) => Rule.required(),
    }),

    // Complex nested objects
    defineField({
      name: "statCards",
      title: "Stat Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              description: "Lucide icon name (e.g., 'Code2', 'Activity')",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "description",
            },
          },
        }),
      ],
      validation: (Rule) => Rule.max(3),
      description: "Three stat cards shown below hero",
    }),

    // Social links
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "GitHub", value: "github" },
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Email", value: "email" },
                ],
              },
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
            }),
          ],
          preview: {
            select: {
              title: "platform",
              subtitle: "url",
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "siteTitle",
    },
  },
});
```

### C. About Schema Example

**File**: `web/sanity/schemas/about.ts`

```typescript
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      initialValue: "About",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "bioText",
      title: "Biography Text",
      type: "text",
      rows: 3,
      description: "Simple text bio shown at top of About section",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "badges",
      title: "About Badges",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              description: "Lucide icon name",
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: "label",
              subtitle: "icon",
            },
          },
        }),
      ],
      validation: (Rule) => Rule.max(3),
    }),

    defineField({
      name: "infoCards",
      title: "Info Cards",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "category",
              title: "Category",
              type: "string",
              description: "e.g., 'Focus', 'Tooling', 'Education'",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              description: "Optional Lucide icon name",
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "category",
            },
          },
        }),
      ],
      validation: (Rule) => Rule.length(3),
      description: "Three cards: Focus, Tooling, Education",
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
```

### D. Register Schemas

**File**: `web/sanity/schemas/index.ts`

```typescript
import project from "./project";
import about from "./about";
import blog from "./blog";
import settings from "./settings";

export const schemaTypes = [project, about, blog, settings];
```

---

## Step 3: Create Import Scripts

Import scripts populate Sanity with your existing content.

### A. Settings Import Script

**File**: `web/scripts/create-site-settings.ts`

```typescript
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

async function createSiteSettings() {
  console.log("Creating site settings...");

  try {
    const settings = {
      _type: "settings",
      _id: "siteSettings", // Fixed ID for singleton
      siteTitle: "Michael F. Jones — Developer",
      description: "Front-end web developer in Fayetteville, AR.",
      contactEmail: "mfjdevelopments@gmail.com",
      location: "Fayetteville, AR",

      // Social links
      socialLinks: [
        {
          platform: "github",
          url: "https://github.com/mfj-developments",
        },
        {
          platform: "linkedin",
          url: "https://www.linkedin.com/in/michael-jones-58a03124b/",
        },
      ],

      // Hero section content
      heroBadges: [
        "Front-end web developer",
        "Logistics · Finance · Payments",
        "React · Next.js · Supabase",
      ],

      heroHeading: "Michael F. Jones —",
      heroSubheading: "Front-End Developer",

      heroBio: "Experience building data-heavy, production-grade web apps for logistics, finance, and payment clients. At Turbo Labs I developed six React/Next.js products powered by Supabase, REST APIs, and agent-assisted workflows.",

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

    // Use createOrReplace to update if exists
    const result = await client.createOrReplace(settings);
    console.log("✅ Site settings created!");
  } catch (error) {
    console.error("❌ Failed to create settings:", error);
  }
}

createSiteSettings();
```

### B. About Import Script

**File**: `web/scripts/create-about.ts`

```typescript
import { config } from "dotenv";
import { resolve } from "path";
import { createClient } from "next-sanity";

config({ path: resolve(__dirname, "../.env.local") });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

async function createAbout() {
  console.log("Creating About page content...");

  try {
    const about = {
      _type: "about",
      _id: "aboutPage", // Fixed ID for singleton
      title: "About",

      bioText: "I'm a front-end web developer who specializes in React and Next.js. My recent work at Turbo Labs covered supplier reconciliation dashboards, payments analytics, and automation suites backed by Supabase, REST APIs, and strongly typed UI patterns.",

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
          description: "Data-heavy dashboards, reconciliation tooling, and automation flows using React, Next.js, React Query, and TanStack Table.",
        },
        {
          category: "Tooling",
          title: "Modern & pragmatic",
          description: "Supabase, Express, Swagger/OpenAPI, GitHub Actions, ESLint/Prettier, Cypress (exposure), Docker (exposure), Figma.",
        },
        {
          category: "Education",
          title: "University of Arkansas",
          description: "B.S. Computer Science (3.77 GPA) with Mathematics & Entrepreneurship minors — May 2025.",
          icon: "GraduationCap",
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
```

### C. Run Import Scripts

```bash
# Run settings import
npx tsx scripts/create-site-settings.ts

# Run about import
npx tsx scripts/create-about.ts
```

---

## Step 4: Update Sanity Queries

**File**: `web/src/lib/sanity/queries.ts`

```typescript
import { client } from "./client";

/**
 * Fetch site settings
 */
export async function getSettings() {
  const query = `*[_type == "settings"][0] {
    siteTitle,
    description,
    contactEmail,
    location,
    socialLinks,
    resumeUrl,
    "seoImage": seoImage.asset->url,
    heroBadges,
    heroHeading,
    heroSubheading,
    heroBio,
    statCards
  }`;

  return client.fetch(query);
}

/**
 * Fetch about page content
 */
export async function getAbout() {
  const query = `*[_type == "about"][0] {
    title,
    bioText,
    badges,
    infoCards,
    bio,
    timeline,
    skills,
    education
  }`;

  return client.fetch(query);
}
```

**Key Points:**
- `[0]` gets the first (and only) document for singletons
- Use proper field names from your schema
- For images: `"fieldName": image.asset->url` converts to URL
- For slugs: `"slug": slug.current` gets string value

---

## Step 5: Connect Frontend Components

### A. Update Server Component (Page)

**File**: `web/src/app/page.tsx`

```typescript
import { getAllProjects, getSettings, getAbout } from "@/lib/sanity/queries";
import HomeClient from "./home-client";

export default async function Home() {
  // Fetch all data in parallel for performance
  const [projects, settings, about] = await Promise.all([
    getAllProjects(),
    getSettings(),
    getAbout(),
  ]);

  return <HomeClient projects={projects} settings={settings} about={about} />;
}
```

### B. Update Client Component

**File**: `web/src/app/home-client.tsx`

```typescript
"use client";

import * as LucideIcons from "lucide-react";

type HomeClientProps = {
  projects: Project[];
  settings: any; // TODO: Add proper TypeScript types
  about: any;
};

// Helper to dynamically get icon component from string name
function getIcon(iconName: string) {
  const Icon = (LucideIcons as any)[iconName];
  return Icon || Code2; // fallback if icon not found
}

export default function HomeClient({ projects, settings, about }: HomeClientProps) {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section id="hero">
        {/* Hero Badges */}
        <div className="flex flex-wrap gap-2">
          {settings?.heroBadges?.map((badge: string, i: number) => (
            <Badge key={i} variant="secondary">
              {badge}
            </Badge>
          ))}
        </div>

        {/* Hero Heading */}
        <h1>
          {settings?.heroHeading}{" "}
          <span className="text-gradient-accent">
            {settings?.heroSubheading}
          </span>
        </h1>

        {/* Hero Bio */}
        <p>{settings?.heroBio}</p>

        {/* Stat Cards */}
        <div className="grid grid-cols-3 gap-3">
          {settings?.statCards?.map((card: any, i: number) => {
            const Icon = getIcon(card.icon);
            return (
              <div key={i}>
                <Icon className="h-5 w-5" />
                <p>{card.title}</p>
                <p>{card.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>{about?.title || "About"}</h2>
        <p>{about?.bioText}</p>

        {/* About Badges */}
        <div className="flex gap-2">
          {about?.badges?.map((badge: any, i: number) => {
            const Icon = getIcon(badge.icon);
            return (
              <Badge key={i}>
                <Icon className="h-4 w-4" /> {badge.label}
              </Badge>
            );
          })}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-3 gap-4">
          {about?.infoCards?.map((card: any, i: number) => {
            const Icon = card.icon ? getIcon(card.icon) : null;
            return (
              <div key={i}>
                <div>{card.category}</div>
                <div>
                  {Icon && <Icon className="h-4 w-4" />}
                  {card.title}
                </div>
                <p>{card.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
```

---

## Step 6: TypeScript Types (Optional but Recommended)

**File**: `web/src/types/settings.ts`

```typescript
export interface StatCard {
  icon: string;
  title: string;
  description: string;
}

export interface SocialLink {
  platform: "github" | "linkedin" | "email";
  url: string;
}

export interface Settings {
  siteTitle: string;
  description: string;
  contactEmail: string;
  location: string;
  socialLinks: SocialLink[];
  resumeUrl?: string;
  seoImage?: string;
  heroBadges: string[];
  heroHeading: string;
  heroSubheading: string;
  heroBio: string;
  statCards: StatCard[];
}
```

**File**: `web/src/types/about.ts`

```typescript
export interface AboutBadge {
  label: string;
  icon: string;
}

export interface InfoCard {
  category: string;
  title: string;
  description: string;
  icon?: string;
}

export interface About {
  title: string;
  bioText: string;
  badges: AboutBadge[];
  infoCards: InfoCard[];
}
```

Then update component props:

```typescript
import type { Settings } from "@/types/settings";
import type { About } from "@/types/about";

type HomeClientProps = {
  projects: Project[];
  settings: Settings;
  about: About;
};
```

---

## Step 7: Testing Checklist

### Before Going Live:

- [ ] Run import scripts successfully
- [ ] Verify data in Sanity Studio at `/studio`
- [ ] Restart dev server (`npm run dev`)
- [ ] Check homepage renders all sections correctly
- [ ] Edit content in Sanity Studio
- [ ] Refresh page to see changes
- [ ] Run TypeScript check: `npm run typecheck`
- [ ] Test null/undefined cases (empty arrays, missing fields)
- [ ] Verify images display correctly (if applicable)
- [ ] Test on mobile/tablet viewports

### Common Issues:

**Content not updating after Sanity edit:**
- Hard refresh browser (Cmd/Ctrl + Shift + R)
- Check if using `useCdn: true` (should be `false` for dev)
- Restart dev server

**Blank sections on page:**
- Check browser console for errors
- Verify data exists in Sanity
- Check optional chaining (`?.`) is used in component
- Verify query returns expected structure

**TypeScript errors:**
- Add proper null checks: `settings?.field`
- Use proper types instead of `any`
- Ensure array methods have proper type guards

---

## Best Practices

### 1. Singleton Documents
For unique pages (Settings, About), use fixed IDs:
```typescript
{
  _type: "settings",
  _id: "siteSettings", // This makes it a singleton
  // ... fields
}
```

### 2. Validation
Add validation to prevent empty or invalid data:
```typescript
validation: (Rule) => Rule.required().max(200)
```

### 3. Descriptions
Add helpful descriptions for content editors:
```typescript
description: "Small badges shown above hero heading (max 3)"
```

### 4. Preview Configuration
Help editors see what they're editing:
```typescript
preview: {
  select: {
    title: "title",
    subtitle: "category",
  },
}
```

### 5. Initial Values
Provide sensible defaults:
```typescript
initialValue: "About"
```

### 6. Icon Management
When storing icon names as strings:
- Document which icon library you're using
- Provide examples in descriptions
- Create a helper function to dynamically load icons
- Always have a fallback icon

### 7. Array Lengths
Constrain arrays for design consistency:
```typescript
validation: (Rule) => Rule.max(3) // exactly 3 cards
validation: (Rule) => Rule.length(3) // max 3 items
```

---

## Environment Variables Required

**File**: `web/.env.local`

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_TOKEN=your_write_token
```

**Getting API Token:**
1. Go to sanity.io/manage
2. Select your project
3. Navigate to API settings
4. Create new token with "Editor" permissions
5. Copy token to `.env.local`

---

## Quick Reference Commands

```bash
# Initialize Sanity
npx sanity init

# Start Sanity Studio locally
npm run dev
# Studio available at: http://localhost:3000/studio

# Run import scripts
npx tsx scripts/create-site-settings.ts
npx tsx scripts/create-about.ts

# Type check
npm run typecheck

# Check what's in Sanity
npx tsx -e "
import { createClient } from 'next-sanity';
const client = createClient({
  projectId: 'YOUR_ID',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});
client.fetch('*[_type == \"settings\"][0]').then(console.log);
"
```

---

## Example: Adding a New Section

Let's say you want to add a "Services" section. Here's the complete flow:

### 1. Analyze Content
```
Services Section:
- Title: "Services"
- Services (array):
  - name: "Web Development"
  - description: "Full-stack applications..."
  - icon: "Code"
  - price: "$5000"
```

### 2. Add to Settings Schema
```typescript
defineField({
  name: "services",
  title: "Services",
  type: "array",
  of: [
    defineArrayMember({
      type: "object",
      fields: [
        defineField({ name: "name", type: "string" }),
        defineField({ name: "description", type: "text" }),
        defineField({ name: "icon", type: "string" }),
        defineField({ name: "price", type: "string" }),
      ],
    }),
  ],
}),
```

### 3. Update Import Script
```typescript
services: [
  {
    name: "Web Development",
    description: "Full-stack applications...",
    icon: "Code",
    price: "$5000",
  },
],
```

### 4. Update Query
```typescript
export async function getSettings() {
  const query = `*[_type == "settings"][0] {
    // ... other fields
    services
  }`;
  return client.fetch(query);
}
```

### 5. Update Frontend
```tsx
<section id="services">
  <h2>Services</h2>
  <div className="grid grid-cols-3 gap-6">
    {settings?.services?.map((service: any) => {
      const Icon = getIcon(service.icon);
      return (
        <div key={service.name}>
          <Icon />
          <h3>{service.name}</h3>
          <p>{service.description}</p>
          <span>{service.price}</span>
        </div>
      );
    })}
  </div>
</section>
```

### 6. Run Import & Test
```bash
npx tsx scripts/create-site-settings.ts
# Restart dev server
# Check /studio
# Verify frontend
```

---

## Conclusion

This systematic approach ensures:
- ✅ All content is editable through Sanity Studio
- ✅ No hardcoded values remain in components
- ✅ Content editors can update without touching code
- ✅ Type-safe data fetching (with proper types)
- ✅ Easy to extend with new sections

**Remember**: Always start with content analysis, then schema, then import, then queries, then frontend. This order prevents mistakes and ensures nothing is missed.
