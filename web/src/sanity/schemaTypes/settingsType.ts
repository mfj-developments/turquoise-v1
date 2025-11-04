import { defineField, defineType } from 'sanity'
import { Cog } from 'lucide-react'

export const settingsType = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  icon: Cog,
  fields: [
    // Basic Information
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short tagline for the site',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
      description: 'SEO description for the site',
    }),
    defineField({
      name: 'location',
      title: 'Business Location',
      type: 'string',
      description: 'Primary business location (e.g., Northwest Arkansas)',
    }),

    // Contact Information
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'string',
      initialValue: 'By Appointment Only',
    }),

    // Social Links
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram', type: 'url' },
        { name: 'pinterest', title: 'Pinterest', type: 'url' },
        { name: 'facebook', title: 'Facebook', type: 'url' },
        { name: 'houzz', title: 'Houzz', type: 'url' },
      ],
    }),

    // Homepage Content
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      description: 'Main heading on homepage',
    }),
    defineField({
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'string',
      description: 'Highlighted text in hero',
    }),
    defineField({
      name: 'heroBio',
      title: 'Hero Bio',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'heroBadges',
      title: 'Hero Badges',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Badges shown in hero section (e.g., NCIDQ Certified)',
    }),
    defineField({
      name: 'statCards',
      title: 'Stat Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon Name', type: 'string', description: 'Lucide icon name' },
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'string' },
          ],
        },
      ],
    }),

    defineField({
      name: 'homeIntroTitle',
      title: 'Home Intro Title',
      type: 'string',
    }),
    defineField({
      name: 'homeIntroText',
      title: 'Home Intro Text',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'homeQuote',
      title: 'Home Quote',
      type: 'text',
      rows: 2,
    }),

    // E-Party Section
    defineField({
      name: 'ePartyTitle',
      title: 'E-Party Section Title',
      type: 'string',
      initialValue: 'Join the E-Party!',
    }),
    defineField({
      name: 'ePartyDescription',
      title: 'E-Party Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'eBookTitle',
      title: 'Free eBook Title',
      type: 'string',
    }),
    defineField({
      name: 'ePartyButtonText',
      title: 'E-Party Button Text',
      type: 'string',
      initialValue: "YES, I'D LIKE A PARTY FAVOR!",
    }),

    // Branding Assets
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Default image for social media sharing',
      options: {
        hotspot: true,
      },
    }),

    // Footer
    defineField({
      name: 'footerCredit',
      title: 'Footer Credit',
      type: 'string',
    }),

    // SEO & Analytics
    defineField({
      name: 'googleAnalyticsId',
      title: 'Google Analytics ID',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
})
