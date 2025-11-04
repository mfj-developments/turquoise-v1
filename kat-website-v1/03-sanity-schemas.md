# Kathryn J. LeMaster Website - Sanity CMS Schemas

## Schema Overview

This document outlines all Sanity schemas needed for the interior design website, including field definitions, validation rules, and content relationships.

### Schema List
1. **Settings** - Site-wide configuration (singleton)
2. **About** - About page content (singleton)
3. **Service** - Service offerings
4. **Course** - Online course information (singleton)
5. **Project** - Portfolio projects (interior + production)
6. **BlogPost** - Journal entries
7. **BlogCategory** - Blog categories
8. **Testimonial** - Client reviews
9. **PressItem** - Press coverage
10. **InstagramPost** - Instagram feed (optional, may use API)

---

## 1. Settings Schema

**File**: `web/sanity/schemas/settings.ts`

**Purpose**: Singleton for site-wide content and configuration

```typescript
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Site Settings",
  type: "document",
  fields: [
    // Basic Site Info
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      initialValue: "Kathryn J. LeMaster Art & Design",
    }),

    defineField({
      name: "tagline",
      title: "Site Tagline",
      type: "string",
      description: "Main tagline shown on homepage",
      initialValue: "designing spaces in to happy places!",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
      rows: 3,
      description: "Meta description for SEO",
      validation: (Rule) => Rule.required().max(160),
    }),

    defineField({
      name: "location",
      title: "Business Location",
      type: "string",
      initialValue: "Little Rock, Arkansas",
    }),

    // Contact Information
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),

    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
    }),

    defineField({
      name: "businessHours",
      title: "Business Hours",
      type: "text",
      rows: 2,
    }),

    // Social Media
    defineField({
      name: "socialLinks",
      title: "Social Media Links",
      type: "object",
      fields: [
        defineField({
          name: "facebook",
          title: "Facebook URL",
          type: "url",
        }),
        defineField({
          name: "twitter",
          title: "Twitter URL",
          type: "url",
        }),
        defineField({
          name: "pinterest",
          title: "Pinterest URL",
          type: "url",
        }),
        defineField({
          name: "instagram",
          title: "Instagram URL",
          type: "url",
        }),
        defineField({
          name: "instagramHandle",
          title: "Instagram Handle",
          type: "string",
          description: "Without @ symbol",
          initialValue: "kjlartanddesign",
        }),
      ],
    }),

    // Homepage Content
    defineField({
      name: "homeIntroTitle",
      title: "Home Intro Title",
      type: "string",
      initialValue: "hello!",
    }),

    defineField({
      name: "homeIntroText",
      title: "Home Intro Text",
      type: "text",
      rows: 4,
      description: "Personal introduction on homepage",
    }),

    defineField({
      name: "homeQuote",
      title: "Home Quote",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Quote Text",
          type: "string",
        }),
        defineField({
          name: "attribution",
          title: "Quote Attribution",
          type: "string",
          description: "e.g., 'Elf'",
        }),
      ],
    }),

    // Email Signup / E-Party
    defineField({
      name: "ePartyTitle",
      title: "E-Party Section Title",
      type: "string",
      initialValue: "YOU'RE INVITED TO KATHRYN'S E-PARTY!",
    }),

    defineField({
      name: "ePartyDescription",
      title: "E-Party Description",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "eBookTitle",
      title: "E-Book Title",
      type: "string",
      initialValue: "7 Steps to Design + Decorate like a Pro",
    }),

    defineField({
      name: "ePartyButtonText",
      title: "E-Party Button Text",
      type: "string",
      initialValue: "YES, I'D LIKE A PARTY FAVOR!",
    }),

    // SEO & Images
    defineField({
      name: "logo",
      title: "Site Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "favicon",
      title: "Favicon",
      type: "image",
      description: "Square image, at least 512x512px",
    }),

    defineField({
      name: "ogImage",
      title: "Default Open Graph Image",
      type: "image",
      description: "Default image for social sharing (1200x630px)",
      options: {
        hotspot: true,
      },
    }),

    // Footer
    defineField({
      name: "footerCredit",
      title: "Footer Credit",
      type: "object",
      fields: [
        defineField({
          name: "text",
          title: "Credit Text",
          type: "string",
        }),
        defineField({
          name: "linkText",
          title: "Link Text",
          type: "string",
        }),
        defineField({
          name: "linkUrl",
          title: "Link URL",
          type: "url",
        }),
      ],
    }),

    // Google Analytics
    defineField({
      name: "googleAnalyticsId",
      title: "Google Analytics ID",
      type: "string",
      description: "GA4 Measurement ID (G-XXXXXXXXXX)",
    }),
  ],

  preview: {
    select: {
      title: "siteTitle",
    },
  },
});
```

---

## 2. About Schema

**File**: `web/sanity/schemas/about.ts`

**Purpose**: About page content (singleton)

```typescript
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "about",
  title: "About Page",
  type: "document",
  fields: [
    defineField({
      name: "pageTitle",
      title: "Page Title",
      type: "string",
      initialValue: "MEET KATHRYN J. LEMASTER",
      validation: (Rule) => Rule.required(),
    }),

    // Biography Sections
    defineField({
      name: "biography",
      title: "Biography",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        }),
      ],
      description: "Main biography content with rich text formatting",
      validation: (Rule) => Rule.required(),
    }),

    // Professional Background
    defineField({
      name: "education",
      title: "Education",
      type: "object",
      fields: [
        defineField({
          name: "degree",
          title: "Degree",
          type: "string",
        }),
        defineField({
          name: "institution",
          title: "Institution",
          type: "string",
        }),
        defineField({
          name: "year",
          title: "Year",
          type: "string",
        }),
      ],
    }),

    defineField({
      name: "experience",
      title: "Years of Experience",
      type: "string",
      description: "e.g., '15+ years'",
    }),

    defineField({
      name: "businessAnniversary",
      title: "Business Anniversary",
      type: "string",
      description: "e.g., '13 year anniversary'",
    }),

    // Things That Make Me Smile
    defineField({
      name: "thingsThatMakeMeSmile",
      title: "Things That Make Me Smile",
      type: "array",
      of: [{ type: "string" }],
      description: "Personal interests list",
    }),

    // Team Members (Pets)
    defineField({
      name: "teamMembers",
      title: "Team Members",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Title/Role",
              type: "string",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "title",
              media: "image",
            },
          },
        }),
      ],
    }),

    // Images
    defineField({
      name: "headshotImage",
      title: "Professional Headshot",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    // Closing Message
    defineField({
      name: "closingMessage",
      title: "Closing Message",
      type: "text",
      rows: 3,
      description: "Final message at bottom of about page",
    }),

    defineField({
      name: "signature",
      title: "Signature",
      type: "string",
      description: "e.g., 'xo – kathryn j.'",
    }),
  ],

  preview: {
    select: {
      title: "pageTitle",
    },
  },
});
```

---

## 3. Service Schema

**File**: `web/sanity/schemas/service.ts`

**Purpose**: Service offerings (Interior Design & Production Design)

```typescript
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Service Category",
      type: "string",
      options: {
        list: [
          { title: "Interior Design", value: "interior-design" },
          { title: "Production Design", value: "production-design" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "e.g., 'space to live' or 'space to create'",
    }),

    defineField({
      name: "description",
      title: "Service Description",
      type: "text",
      rows: 4,
    }),

    // Service Tiers (for Interior Design)
    defineField({
      name: "tiers",
      title: "Service Tiers",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Tier Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "tagline",
              title: "Tier Tagline",
              type: "string",
              description: "e.g., 'The light-lunch-on-a-speed-date'",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
            defineField({
              name: "process",
              title: "Process Steps",
              type: "array",
              of: [{ type: "string" }],
              description: "Numbered process steps",
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              description: "Lucide icon name",
            }),
            defineField({
              name: "order",
              title: "Display Order",
              type: "number",
              validation: (Rule) => Rule.required().min(0),
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "tagline",
            },
          },
        }),
      ],
      description: "For tiered services (Interior Design)",
    }),

    // Service Offerings (for Production Design)
    defineField({
      name: "offerings",
      title: "Service Offerings",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Offering Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "activities",
              title: "Activities",
              type: "string",
              description: "e.g., 'Consultation, Research, Feedback'",
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              description: "Lucide icon name",
            }),
            defineField({
              name: "order",
              title: "Display Order",
              type: "number",
              validation: (Rule) => Rule.required().min(0),
            }),
          ],
          preview: {
            select: {
              title: "name",
              subtitle: "activities",
            },
          },
        }),
      ],
      description: "For service offerings (Production Design)",
    }),

    // Target Audience
    defineField({
      name: "targetAudience",
      title: "Target Audience",
      type: "array",
      of: [{ type: "string" }],
      description: "List of target clients/industries",
    }),

    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "featuredImage",
    },
  },
});
```

---

## 4. Course Schema

**File**: `web/sanity/schemas/course.ts`

**Purpose**: Online course information (singleton)

```typescript
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "course",
  title: "Online Course",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Course Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "subtitle",
      title: "Course Subtitle",
      type: "string",
      description: "e.g., '7 Steps to Design + Decorate Spaces with Certainty'",
    }),

    defineField({
      name: "description",
      title: "Course Description",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),

    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "e.g., '1-of-a-kind online interior design course'",
    }),

    // Curriculum
    defineField({
      name: "curriculum",
      title: "Curriculum Sections",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "stepNumber",
              title: "Step Number",
              type: "number",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "title",
              title: "Step Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "stepNumber",
            },
            prepare({ title, subtitle }) {
              return {
                title: `Step ${subtitle}: ${title}`,
              };
            },
          },
        }),
      ],
    }),

    // Learning Outcomes
    defineField({
      name: "learningOutcomes",
      title: "Learning Outcomes",
      type: "array",
      of: [{ type: "string" }],
      description: "What students will learn",
    }),

    // Target Audience
    defineField({
      name: "targetAudience",
      title: "Target Audience",
      type: "array",
      of: [{ type: "string" }],
      description: "Who this course is for",
    }),

    // Pricing
    defineField({
      name: "price",
      title: "Price",
      type: "string",
      description: "Course price (if displayed)",
    }),

    defineField({
      name: "enrollmentUrl",
      title: "Enrollment URL",
      type: "url",
      description: "External course platform link",
    }),

    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "Enroll Now",
    }),

    // Images
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "gallery",
      title: "Course Gallery",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: {
            hotspot: true,
          },
        }),
      ],
    }),

    // Status
    defineField({
      name: "isActive",
      title: "Is Active",
      type: "boolean",
      description: "Is the course currently available for enrollment?",
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
      media: "featuredImage",
    },
  },
});
```

---

## 5. Project Schema

**File**: `web/sanity/schemas/project.ts`

**Purpose**: Portfolio projects (interior + production design)

```typescript
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Project Category",
      type: "string",
      options: {
        list: [
          { title: "Interior Design", value: "interior-design" },
          { title: "Production Design", value: "production-design" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Project Description",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "summary",
      title: "Short Summary",
      type: "text",
      rows: 2,
      description: "Brief description for portfolio grid",
      validation: (Rule) => Rule.max(200),
    }),

    // Project Details
    defineField({
      name: "client",
      title: "Client",
      type: "string",
      description: "Client name (if public)",
    }),

    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),

    defineField({
      name: "completionDate",
      title: "Completion Date",
      type: "date",
    }),

    defineField({
      name: "services",
      title: "Services Provided",
      type: "array",
      of: [{ type: "string" }],
      description: "List of services provided for this project",
    }),

    // Images
    defineField({
      name: "thumbnail",
      title: "Thumbnail Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "gallery",
      title: "Project Gallery",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    // Before/After Images
    defineField({
      name: "beforeAfter",
      title: "Before & After",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "before",
              title: "Before Image",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "after",
              title: "After Image",
              type: "image",
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
          ],
        }),
      ],
    }),

    // Portfolio Settings
    defineField({
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      description: "Display on homepage?",
      initialValue: false,
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 0,
    }),

    // SEO
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.max(160),
    }),
  ],

  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Completion Date (Newest)",
      name: "completionDateDesc",
      by: [{ field: "completionDate", direction: "desc" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "thumbnail",
    },
  },
});
```

---

## 6. Blog Post Schema

**File**: `web/sanity/schemas/blog.ts`

**Purpose**: Journal/blog entries

```typescript
import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Post Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      description: "Brief summary shown in post previews",
      validation: (Rule) => Rule.max(300),
    }),

    defineField({
      name: "content",
      title: "Post Content",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        }),
        defineArrayMember({
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt Text",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
          validation: (Rule) => Rule.required(),
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "blogCategory" }],
        }),
      ],
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    defineField({
      name: "author",
      title: "Author",
      type: "object",
      fields: [
        defineField({
          name: "name",
          title: "Name",
          type: "string",
          initialValue: "Kathryn J. LeMaster",
        }),
        defineField({
          name: "image",
          title: "Author Image",
          type: "image",
        }),
      ],
    }),

    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "featured",
      title: "Featured Post",
      type: "boolean",
      description: "Display prominently on blog page?",
      initialValue: false,
    }),

    // SEO
    defineField({
      name: "metaDescription",
      title: "Meta Description",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.max(160),
    }),
  ],

  orderings: [
    {
      title: "Published Date (Newest)",
      name: "publishedDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Published Date (Oldest)",
      name: "publishedAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "publishedAt",
      media: "featuredImage",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: new Date(subtitle).toLocaleDateString(),
        media,
      };
    },
  },
});
```

---

## 7. Blog Category Schema

**File**: `web/sanity/schemas/blogCategory.ts`

**Purpose**: Blog post categories

```typescript
import { defineField, defineType } from "sanity";

export default defineType({
  name: "blogCategory",
  title: "Blog Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Category Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),

    defineField({
      name: "parent",
      title: "Parent Category",
      type: "reference",
      to: [{ type: "blogCategory" }],
      description: "Optional parent category for hierarchical organization",
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      initialValue: 0,
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "parent.title",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `Under: ${subtitle}` : "Top Level",
      };
    },
  },
});
```

---

## 8. Testimonial Schema

**File**: `web/sanity/schemas/testimonial.ts`

**Purpose**: Client reviews and testimonials

```typescript
import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      description: "Full name or initials (e.g., 'PARKER W.')",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "title",
      title: "Client Title/Company",
      type: "string",
      description: "Optional - e.g., 'CEO, FFO Home'",
    }),

    defineField({
      name: "testimonialText",
      title: "Testimonial",
      type: "text",
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "image",
      title: "Client Photo",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Circular headshot photo",
    }),

    defineField({
      name: "serviceType",
      title: "Service Type",
      type: "string",
      options: {
        list: [
          { title: "Interior Design", value: "interior-design" },
          { title: "Production Design", value: "production-design" },
          { title: "Both", value: "both" },
        ],
        layout: "radio",
      },
    }),

    defineField({
      name: "projectType",
      title: "Project Type",
      type: "string",
      description: "e.g., 'Kitchen Renovation', 'Commercial Set Design'",
    }),

    defineField({
      name: "featured",
      title: "Featured Testimonial",
      type: "boolean",
      description: "Display on homepage?",
      initialValue: false,
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 0,
    }),

    defineField({
      name: "date",
      title: "Review Date",
      type: "date",
      description: "Optional - when review was received",
    }),
  ],

  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Date (Newest)",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],

  preview: {
    select: {
      title: "name",
      subtitle: "serviceType",
      media: "image",
    },
  },
});
```

---

## 9. Press Item Schema

**File**: `web/sanity/schemas/press.ts`

**Purpose**: Press coverage and media features

```typescript
import { defineField, defineType } from "sanity";

export default defineType({
  name: "pressItem",
  title: "Press Item",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Feature Title",
      type: "string",
      description: "Title of article or feature",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "publication",
      title: "Publication Name",
      type: "string",
      description: "e.g., 'HGTV', 'Modern Farmhouse Style Magazine'",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "publicationType",
      title: "Publication Type",
      type: "string",
      options: {
        list: [
          { title: "Print Magazine", value: "print" },
          { title: "Digital/Online", value: "digital" },
          { title: "TV/Video", value: "video" },
          { title: "Podcast", value: "podcast" },
        ],
        layout: "radio",
      },
    }),

    defineField({
      name: "publicationDate",
      title: "Publication Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "thumbnail",
      title: "Thumbnail Image",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Magazine cover or publication logo",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "link",
      title: "Link to Article/Feature",
      type: "url",
      description: "External link or PDF URL",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "Brief description of the feature",
    }),

    defineField({
      name: "featured",
      title: "Featured Press",
      type: "boolean",
      description: "Display prominently?",
      initialValue: false,
    }),

    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Lower numbers appear first",
      initialValue: 0,
    }),
  ],

  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Publication Date (Newest)",
      name: "dateDesc",
      by: [{ field: "publicationDate", direction: "desc" }],
    },
  ],

  preview: {
    select: {
      title: "publication",
      subtitle: "publicationDate",
      media: "thumbnail",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: new Date(subtitle).toLocaleDateString(),
        media,
      };
    },
  },
});
```

---

## Schema Index

**File**: `web/sanity/schemas/index.ts`

```typescript
import settings from "./settings";
import about from "./about";
import service from "./service";
import course from "./course";
import project from "./project";
import blogPost from "./blog";
import blogCategory from "./blogCategory";
import testimonial from "./testimonial";
import pressItem from "./press";

export const schemaTypes = [
  // Singletons
  settings,
  about,
  course,

  // Collections
  service,
  project,
  blogPost,
  blogCategory,
  testimonial,
  pressItem,
];
```

---

## Sanity Configuration

**File**: `web/sanity.config.ts`

```typescript
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

// Define singletons
const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set(["settings", "about", "course"]);

export default defineConfig({
  name: "default",
  title: "Kathryn J. LeMaster Art & Design",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: "/studio",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Singletons
            S.listItem()
              .title("Settings")
              .id("settings")
              .child(S.document().schemaType("settings").documentId("settings")),

            S.listItem()
              .title("About Page")
              .id("about")
              .child(S.document().schemaType("about").documentId("about")),

            S.listItem()
              .title("Online Course")
              .id("course")
              .child(S.document().schemaType("course").documentId("course")),

            S.divider(),

            // Collections
            S.listItem()
              .title("Services")
              .child(S.documentTypeList("service")),

            S.listItem()
              .title("Projects")
              .child(
                S.list()
                  .title("Projects")
                  .items([
                    S.listItem()
                      .title("Interior Design Projects")
                      .child(
                        S.documentTypeList("project")
                          .title("Interior Design Projects")
                          .filter('_type == "project" && category == "interior-design"')
                      ),
                    S.listItem()
                      .title("Production Design Projects")
                      .child(
                        S.documentTypeList("project")
                          .title("Production Design Projects")
                          .filter('_type == "project" && category == "production-design"')
                      ),
                    S.divider(),
                    S.listItem()
                      .title("All Projects")
                      .child(S.documentTypeList("project")),
                  ])
              ),

            S.divider(),

            S.listItem()
              .title("Blog")
              .child(
                S.list()
                  .title("Blog")
                  .items([
                    S.listItem()
                      .title("Posts")
                      .child(S.documentTypeList("blogPost")),
                    S.listItem()
                      .title("Categories")
                      .child(S.documentTypeList("blogCategory")),
                  ])
              ),

            S.divider(),

            S.listItem()
              .title("Testimonials")
              .child(S.documentTypeList("testimonial")),

            S.listItem()
              .title("Press")
              .child(S.documentTypeList("pressItem")),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the "New document" menu
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  document: {
    // Remove duplicate actions for singletons
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
```

---

## Summary

This comprehensive schema structure provides:

1. **Singletons** for unique pages (Settings, About, Course)
2. **Collections** for repeatable content (Projects, Blog, Testimonials)
3. **Proper validation** to ensure data quality
4. **Rich text support** with portable text
5. **Image optimization** with hotspot support
6. **Categorization and filtering** capabilities
7. **SEO-friendly** fields for metadata
8. **Flexible structure** for both service types
9. **Preview configurations** for better editor experience
10. **Custom ordering** for content display

All schemas are designed to match the existing website structure while providing the flexibility needed for future growth.
