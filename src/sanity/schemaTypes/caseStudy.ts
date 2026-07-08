import { defineField, defineType } from 'sanity'

export const caseStudyType = defineType({
  name: 'caseStudy',
  title: 'Case study',
  type: 'object',
  fields: [
    defineField({
      name: 'scenario',
      title: 'Scenario (what went wrong)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'lesson',
      title: 'Lesson',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    select: { scenario: 'scenario' },
    prepare: () => ({ title: 'Case study' }),
  },
})
