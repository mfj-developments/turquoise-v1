import { defineField, defineType } from 'sanity'
import { User } from 'lucide-react'

export const aboutType = defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  icon: User,
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      initialValue: 'About',
    }),
    defineField({
      name: 'headshotImage',
      title: 'Headshot Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    // Biography Section
    defineField({
      name: 'bioText',
      title: 'Biography',
      type: 'text',
      rows: 6,
      description: 'Main biography text',
    }),
    defineField({
      name: 'title',
      title: 'About Section Title',
      type: 'string',
      initialValue: 'About',
    }),

    // Professional Info
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'businessAnniversary',
      title: 'Years in Business',
      type: 'string',
      description: 'e.g., "15+ Years"',
    }),

    // Personal Touch
    defineField({
      name: 'thingsThatMakeMeSmile',
      title: 'Things That Make Me Smile',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'item', title: 'Item', type: 'string' },
            { name: 'emoji', title: 'Emoji', type: 'string' },
          ],
        },
      ],
    }),

    // Badges
    defineField({
      name: 'badges',
      title: 'Badges',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name' },
          ],
        },
      ],
    }),

    // Info Cards
    defineField({
      name: 'infoCards',
      title: 'Info Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'category', title: 'Category', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
            { name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name' },
          ],
        },
      ],
    }),

    // Team Members
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
          ],
        },
      ],
    }),

    // Closing
    defineField({
      name: 'closingMessage',
      title: 'Closing Message',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'signature',
      title: 'Signature',
      type: 'string',
      description: 'e.g., "- Kathryn"',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About Page',
      }
    },
  },
})
