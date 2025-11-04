import { defineField, defineType } from 'sanity'
import { MessageCircle } from 'lucide-react'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  icon: MessageCircle,
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Client Title/Company',
      type: 'string',
      description: 'e.g., "Homeowner" or "ABC Development"',
    }),
    defineField({
      name: 'testimonialText',
      title: 'Testimonial',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Client Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Optional client photo or project image',
    }),

    // Categorization
    defineField({
      name: 'serviceType',
      title: 'Service Type',
      type: 'string',
      options: {
        list: [
          { title: 'Interior Design', value: 'interior-design' },
          { title: 'Production Design', value: 'production-design' },
          { title: 'Both', value: 'both' },
        ],
      },
    }),
    defineField({
      name: 'projectType',
      title: 'Project Type',
      type: 'string',
      options: {
        list: [
          { title: 'Whole Home', value: 'whole-home' },
          { title: 'Single Room', value: 'single-room' },
          { title: 'Model Home', value: 'model-home' },
          { title: 'Staging', value: 'staging' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),

    // Display Options
    defineField({
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Show on homepage?',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in testimonial rotation (lower numbers first)',
    }),
    defineField({
      name: 'date',
      title: 'Date Received',
      type: 'date',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'testimonialText',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `"${subtitle.substring(0, 60)}..."` : '',
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Date Received',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
})
