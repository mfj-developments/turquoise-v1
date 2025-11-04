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
              description: "Lucide icon name (e.g., 'MapPin', 'Code2', 'Sparkles')",
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
      description: "Badges shown below bio (location, tech stack, etc.)",
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
              description: "Optional Lucide icon name (e.g., 'GraduationCap')",
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
    defineField({
      name: "bio",
      title: "Rich Biography (Legacy)",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
          },
        }),
      ],
      description: "Rich text bio (for future use)",
    }),
    defineField({
      name: "timeline",
      title: "Experience Timeline",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "year", title: "Year", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "company", title: "Company", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "company",
              year: "year",
            },
            prepare({ title, subtitle, year }) {
              return {
                title: `${year} - ${title}`,
                subtitle,
              };
            },
          },
        }),
      ],
    }),
    defineField({
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({ name: "degree", title: "Degree", type: "string" }),
            defineField({ name: "school", title: "School", type: "string" }),
            defineField({ name: "year", title: "Year", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          ],
          preview: {
            select: {
              title: "degree",
              subtitle: "school",
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
});
