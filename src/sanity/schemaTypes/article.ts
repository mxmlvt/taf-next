import { defineArrayMember, defineField, defineType } from 'sanity'

export const articleType = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'nr',
      title: 'Article number',
      type: 'number',
      description: 'Ordinal number from source xlsx (1–28). Used for pairing translations.',
      validation: (r) => r.required().integer().positive(),
    }),
    defineField({
      name: 'locale',
      title: 'Locale',
      type: 'string',
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Polish', value: 'pl' },
        ],
        layout: 'radio',
      },
      initialValue: 'en',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'translationOf',
      title: 'Translation of',
      type: 'reference',
      to: [{ type: 'article' }],
      description: 'Reference to the source-language article this is a translation of. Leave empty for source locale.',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (r) => r.required().max(200),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta description',
      type: 'text',
      rows: 2,
      validation: (r) => r.max(160),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Draft', 'In Progress', 'Done'],
        layout: 'radio',
      },
      initialValue: 'Draft',
    }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt', title: 'Alt text', type: 'string' },
          ],
        }),
      ],
    }),
    defineField({
      name: 'caseStudy',
      title: 'Case study',
      type: 'caseStudy',
    }),
    defineField({
      name: 'brandVoice',
      title: 'Brand voice conclusion',
      type: 'text',
      rows: 3,
      description: '1–2 sentence supplier-voice closing paragraph.',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],
  preview: {
    select: { title: 'title', locale: 'locale', status: 'status', nr: 'nr' },
    prepare: ({ title, locale, status, nr }) => ({
      title: `#${nr ?? '?'} ${title}`,
      subtitle: `[${locale ?? '?'}] ${status ?? 'Draft'}`,
    }),
  },
  orderings: [
    { title: 'Article number', name: 'nrAsc', by: [{ field: 'nr', direction: 'asc' }] },
    { title: 'Locale, then nr', name: 'localeNr', by: [{ field: 'locale', direction: 'asc' }, { field: 'nr', direction: 'asc' }] },
  ],
})
