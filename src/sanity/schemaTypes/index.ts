import type { SchemaTypeDefinition } from 'sanity'
import { articleType } from './article'
import { caseStudyType } from './caseStudy'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [articleType, caseStudyType],
}
