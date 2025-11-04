import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "settings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "siteTitle",
      title: "Site Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Site Description",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email",
      type: "string",
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      initialValue: "Fayetteville, AR",
    }),
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
                  { title: "Twitter", value: "twitter" },
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
    defineField({
      name: "resumeUrl",
      title: "Resume URL",
      type: "url",
      description: "Link to downloadable PDF resume",
    }),
    defineField({
      name: "seoImage",
      title: "Default SEO Image",
      type: "image",
      description: "Default Open Graph image for social sharing",
      options: {
        hotspot: true,
      },
    }),
    // Hero Section
    defineField({
      name: "heroBadges",
      title: "Hero Badges",
      type: "array",
      of: [{ type: "string" }],
      description: "Small badges shown above hero heading (e.g., 'Front-end web developer')",
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
      description: "Highlighted part of the heading (e.g., 'Front-End Developer')",
    }),
    defineField({
      name: "heroBio",
      title: "Hero Bio",
      type: "text",
      rows: 3,
      description: "Short bio paragraph shown in hero section",
      validation: (Rule) => Rule.required(),
    }),
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
              description: "Lucide icon name (e.g., 'Code2', 'Activity', 'MapPin')",
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
  ],
  preview: {
    select: {
      title: "siteTitle",
    },
  },
});
