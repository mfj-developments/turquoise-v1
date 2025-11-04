import { defineField, defineType } from 'sanity'
import { ImageIcon } from 'lucide-react'

export const projectType = defineType({
  name: 'project',
  title: 'Portfolio Projects',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Project Category',
      type: 'string',
      options: {
        list: [
          { title: 'Living Room', value: 'living-room' },
          { title: 'Kitchen', value: 'kitchen' },
          { title: 'Bedroom', value: 'bedroom' },
          { title: 'Bathroom', value: 'bathroom' },
          { title: 'Whole Home', value: 'whole-home' },
          { title: 'Model Home', value: 'model-home' },
          { title: 'Staging', value: 'staging' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 2,
      description: 'Brief summary for project cards',
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Detailed project description',
    }),

    // Project Details
    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      description: 'Optional - only display if client approves',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g., "Bentonville, AR"',
    }),
    defineField({
      name: 'completionDate',
      title: 'Completion Date',
      type: 'date',
    }),
    defineField({
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g., Space Planning, Color Consultation, etc.',
    }),

    // Images
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
            },
            { name: 'caption', title: 'Caption', type: 'string' },
            { name: 'alt', title: 'Alt Text', type: 'string' },
          ],
        },
      ],
    }),

    // Before/After Images
    defineField({
      name: 'beforeAfter',
      title: 'Before & After Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'before',
              title: 'Before Image',
              type: 'image',
              options: { hotspot: true },
            },
            {
              name: 'after',
              title: 'After Image',
              type: 'image',
              options: { hotspot: true },
            },
            { name: 'caption', title: 'Caption', type: 'string' },
          ],
          preview: {
            select: {
              before: 'before',
              after: 'after',
              caption: 'caption',
            },
            prepare({ before, after, caption }) {
              return {
                title: caption || 'Before & After',
                media: before,
              }
            },
          },
        },
      ],
    }),

    // Display Options
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Show on homepage?',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in portfolio (lower numbers first)',
    }),

    // SEO
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 2,
      description: 'SEO description for this project',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'thumbnail',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Completion Date',
      name: 'dateDesc',
      by: [{ field: 'completionDate', direction: 'desc' }],
    },
  ],
})
