import { defineField, defineType } from 'sanity'
import { Briefcase } from 'lucide-react'

export const serviceType = defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  icon: Briefcase,
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
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
      title: 'Service Category',
      type: 'string',
      options: {
        list: [
          { title: 'Interior Design', value: 'interior-design' },
          { title: 'Production Design', value: 'production-design' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short tagline for the service',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Full description of the service',
    }),

    // Service Tiers
    defineField({
      name: 'tiers',
      title: 'Service Tiers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Tier Name', type: 'string', validation: (rule) => rule.required() },
            { name: 'tagline', title: 'Tagline', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 3 },
            { name: 'process', title: 'Process Steps', type: 'array', of: [{ type: 'string' }] },
            { name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name' },
            { name: 'order', title: 'Display Order', type: 'number' },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'tagline',
            },
          },
        },
      ],
    }),

    // Service Offerings
    defineField({
      name: 'offerings',
      title: 'Service Offerings',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Offering Name', type: 'string', validation: (rule) => rule.required() },
            { name: 'activities', title: 'Activities', type: 'array', of: [{ type: 'string' }] },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
            { name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name' },
            { name: 'order', title: 'Display Order', type: 'number' },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'description',
            },
          },
        },
      ],
    }),

    // Target Audience
    defineField({
      name: 'targetAudience',
      title: 'Target Audience',
      type: 'text',
      rows: 2,
      description: 'Who is this service for?',
    }),

    // Featured Image
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    // Display Order
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which services are displayed (lower numbers first)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'featuredImage',
    },
  },
})
