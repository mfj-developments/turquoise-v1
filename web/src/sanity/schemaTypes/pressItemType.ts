import { defineField, defineType } from 'sanity'
import { Newspaper } from 'lucide-react'

export const pressItemType = defineType({
  name: 'pressItem',
  title: 'Press & Media',
  type: 'document',
  icon: Newspaper,
  fields: [
    defineField({
      name: 'title',
      title: 'Article/Feature Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publication',
      title: 'Publication Name',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'e.g., "Arkansas Living Magazine"',
    }),
    defineField({
      name: 'publicationType',
      title: 'Publication Type',
      type: 'string',
      options: {
        list: [
          { title: 'Magazine', value: 'magazine' },
          { title: 'Online Publication', value: 'online' },
          { title: 'Newspaper', value: 'newspaper' },
          { title: 'Blog', value: 'blog' },
          { title: 'Podcast', value: 'podcast' },
          { title: 'Video', value: 'video' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'publicationDate',
      title: 'Publication Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Magazine cover, article screenshot, or featured image',
    }),
    defineField({
      name: 'link',
      title: 'Article Link',
      type: 'url',
      description: 'Link to online article or feature',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of the feature or article',
    }),

    // Display Options
    defineField({
      name: 'featured',
      title: 'Featured Press Item',
      type: 'boolean',
      description: 'Show on homepage?',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in press section (lower numbers first)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publication',
      media: 'thumbnail',
      date: 'publicationDate',
    },
    prepare({ title, subtitle, media, date }) {
      return {
        title,
        subtitle: `${subtitle}${date ? ` • ${new Date(date).getFullYear()}` : ''}`,
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
      title: 'Publication Date',
      name: 'dateDesc',
      by: [{ field: 'publicationDate', direction: 'desc' }],
    },
  ],
})
