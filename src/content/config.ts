import { defineCollection, z } from 'astro:content';
import { COLLECTIONS_CONFIG, isValidCollectionSlug } from '../config/collections.js';
import { runBuildTimeValidation, validateContentReferences } from '../utils/collections.js';

// Run build-time validation during content configuration
try {
  runBuildTimeValidation();
} catch (error) {
  console.error('Build-time validation failed:', error);
  throw error;
}

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    collection: z.string().refine(
      (collection) => isValidCollectionSlug(collection),
      (collection) => ({
        message: `Collection '${collection}' is not defined in the central configuration. Available collections: ${Object.keys(COLLECTIONS_CONFIG).join(', ')}`
      })
    ),
    order: z.number(),
    author: z.string(),
    publishDate: z.date(),
    lastUpdated: z.date().optional(),
    readTime: z.string(),
    tags: z.array(z.string()),
    prerequisites: z.array(z.string()).optional(),
    authorProfile: z.object({
      github: z.string().optional(),
      linkedin: z.string().optional(),
      twitter: z.string().optional(),
      website: z.string().optional(),
      email: z.string().optional(),
      youtube: z.string().optional(),
      medium: z.string().optional(),
      discord: z.string().optional(),
    }).optional(),
  }),
});

// Auto-generate collections based on central config with validation
// This ensures all collections defined in the central config are available
const generatedCollections = Object.keys(COLLECTIONS_CONFIG).reduce((acc, key) => {
  try {
    if (!isValidCollectionSlug(key)) {
      throw new Error(`Invalid collection slug: ${key}`);
    }
    acc[key] = posts;
    return acc;
  } catch (error) {
    console.error(`Failed to generate collection '${key}':`, error);
    throw error;
  }
}, {} as Record<string, any>);

// Validate content references match configuration
try {
  const contentCollectionNames = Object.keys(generatedCollections);
  validateContentReferences(contentCollectionNames);
} catch (error) {
  console.warn('Content reference validation warning:', error);
  // Don't throw here as this might be expected during development
}

export const collections = generatedCollections; 