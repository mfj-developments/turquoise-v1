import { type SchemaTypeDefinition } from 'sanity'

// Existing schemas
import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'

// Interior Design Website schemas
import { settingsType } from './settingsType'
import { aboutType } from './aboutType'
import { serviceType } from './serviceType'
import { projectType } from './projectType'
import { testimonialType } from './testimonialType'
import { pressItemType } from './pressItemType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Core content types
    blockContentType,

    // Site configuration
    settingsType,
    aboutType,

    // Services & Portfolio
    serviceType,
    projectType,

    // Social proof
    testimonialType,
    pressItemType,

    // Blog/Journal
    categoryType,
    postType,
    authorType,
  ],
}
