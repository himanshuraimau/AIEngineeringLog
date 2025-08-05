/**
 * Collection utility functions
 * Provides helper functions for working with collections and their metadata
 */

import { getCollection } from 'astro:content';
import { COLLECTIONS_CONFIG, type CollectionConfig, type CollectionWithStats, isValidCollectionSlug } from '../config/collections.js';

/**
 * Custom error class for collection-related errors
 */
export class CollectionError extends Error {
  constructor(message: string, public code: string, public collection?: string) {
    super(message);
    this.name = 'CollectionError';
  }
}

/**
 * Validate collection slug and throw descriptive error if invalid
 * @param slug - The collection slug to validate
 * @throws CollectionError if collection doesn't exist
 */
export function validateCollectionSlug(slug: string): asserts slug is keyof typeof COLLECTIONS_CONFIG {
  if (!slug) {
    throw new CollectionError(
      'Collection slug is required but was not provided',
      'MISSING_SLUG'
    );
  }

  if (typeof slug !== 'string') {
    throw new CollectionError(
      `Collection slug must be a string, received: ${typeof slug}`,
      'INVALID_SLUG_TYPE',
      slug
    );
  }

  if (!isValidCollectionSlug(slug)) {
    const availableCollections = Object.keys(COLLECTIONS_CONFIG).join(', ');
    throw new CollectionError(
      `Collection '${slug}' not found in configuration. Available collections: ${availableCollections}`,
      'COLLECTION_NOT_FOUND',
      slug
    );
  }
}

/**
 * Get collection configuration with comprehensive error handling
 * @param slug - The collection slug
 * @returns Collection configuration
 * @throws CollectionError if collection doesn't exist
 */
export function getCollectionConfig(slug: string): CollectionConfig {
  try {
    validateCollectionSlug(slug);
    const config = COLLECTIONS_CONFIG[slug as keyof typeof COLLECTIONS_CONFIG];
    if (!config) {
      throw new CollectionError(
        `Collection configuration not found for '${slug}'`,
        'CONFIG_NOT_FOUND',
        slug
      );
    }
    return config;
  } catch (error) {
    if (error instanceof CollectionError) {
      throw error;
    }
    // Wrap unexpected errors
    throw new CollectionError(
      `Unexpected error while getting collection config for '${slug}': ${error instanceof Error ? error.message : String(error)}`,
      'UNEXPECTED_ERROR',
      slug
    );
  }
}

/**
 * Get collection configuration with fallback behavior
 * @param slug - The collection slug
 * @returns Collection configuration or fallback config
 */
export function getCollectionConfigSafe(slug: string): CollectionConfig {
  try {
    return getCollectionConfig(slug);
  } catch (error) {
    console.warn(`Failed to get collection config for '${slug}', using fallback:`, error);
    
    // Return fallback configuration
    return {
      title: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' '),
      slug: slug,
      description: `Content collection: ${slug}`,
      category: 'Unknown',
      color: '#666666',
      tags: [slug]
    };
  }
}

/**
 * Get collection with dynamically calculated statistics
 * @param slug - The collection slug
 * @returns Collection configuration with post count and posts
 * @throws CollectionError if collection configuration is invalid
 */
export async function getCollectionWithStats(slug: string): Promise<CollectionWithStats> {
  const config = getCollectionConfig(slug);
  
  try {
    // Get all posts for this collection
    const posts = await getCollection(slug as any);
    
    return {
      ...config,
      postCount: posts.length,
      posts: posts
    };
  } catch (error) {
    // If collection doesn't exist in content, return with 0 posts
    console.warn(`No content found for collection '${slug}':`, error);
    return {
      ...config,
      postCount: 0,
      posts: []
    };
  }
}

/**
 * Get collection with statistics using safe fallback behavior
 * @param slug - The collection slug
 * @returns Collection configuration with post count and posts, never throws
 */
export async function getCollectionWithStatsSafe(slug: string): Promise<CollectionWithStats> {
  try {
    return await getCollectionWithStats(slug);
  } catch (error) {
    console.warn(`Failed to get collection stats for '${slug}', using fallback:`, error);
    
    const fallbackConfig = getCollectionConfigSafe(slug);
    return {
      ...fallbackConfig,
      postCount: 0,
      posts: []
    };
  }
}

/**
 * Get all collections with statistics for the collections index page
 * @returns Array of all collections with their statistics
 */
export async function getAllCollectionsWithStats(): Promise<CollectionWithStats[]> {
  const collectionSlugs = Object.keys(COLLECTIONS_CONFIG);
  
  // Get stats for all collections in parallel with error handling
  const collectionsWithStats = await Promise.allSettled(
    collectionSlugs.map(slug => getCollectionWithStats(slug))
  );
  
  // Filter successful results and log failures
  const results: CollectionWithStats[] = [];
  collectionsWithStats.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      results.push(result.value);
    } else {
      const slug = collectionSlugs[index];
      console.error(`Failed to get stats for collection '${slug}':`, result.reason);
      
      // Add fallback collection if slug exists
      if (slug) {
        const fallbackConfig = getCollectionConfigSafe(slug);
        results.push({
          ...fallbackConfig,
          postCount: 0,
          posts: []
        });
      }
    }
  });
  
  return results;
}

/**
 * Get all collections with statistics using safe fallback behavior
 * @returns Array of all collections with their statistics, never throws
 */
export async function getAllCollectionsWithStatsSafe(): Promise<CollectionWithStats[]> {
  try {
    return await getAllCollectionsWithStats();
  } catch (error) {
    console.error('Failed to get all collections with stats, using fallback:', error);
    
    // Return fallback collections based on configuration
    const collectionSlugs = Object.keys(COLLECTIONS_CONFIG);
    return collectionSlugs.map(slug => {
      const fallbackConfig = getCollectionConfigSafe(slug);
      return {
        ...fallbackConfig,
        postCount: 0,
        posts: []
      };
    });
  }
}

/**
 * Generate static paths for Astro collection pages with error handling
 * @returns Array of path parameters for [collection] dynamic routes
 */
export function getCollectionStaticPaths(): { params: { collection: string } }[] {
  try {
    const collectionSlugs = Object.keys(COLLECTIONS_CONFIG);
    
    if (collectionSlugs.length === 0) {
      console.warn('No collections found in configuration');
      return [];
    }
    
    return collectionSlugs.map(slug => {
      // Validate each slug before creating path
      try {
        validateCollectionSlug(slug);
        return { params: { collection: slug } };
      } catch (error) {
        console.error(`Invalid collection slug '${slug}' found in configuration:`, error);
        throw error;
      }
    });
  } catch (error) {
    console.error('Failed to generate collection static paths:', error);
    throw new CollectionError(
      `Failed to generate static paths: ${error instanceof Error ? error.message : String(error)}`,
      'STATIC_PATH_GENERATION_FAILED'
    );
  }
}

/**
 * Build-time validation for collection configuration
 * Validates that all collections in the configuration are properly structured
 * @throws CollectionError if validation fails
 */
export function validateCollectionConfiguration(): void {
  const errors: string[] = [];
  
  // Check if configuration exists
  if (!COLLECTIONS_CONFIG || typeof COLLECTIONS_CONFIG !== 'object') {
    throw new CollectionError(
      'COLLECTIONS_CONFIG is not defined or is not an object',
      'INVALID_CONFIGURATION'
    );
  }
  
  // Check if configuration is empty
  const collectionSlugs = Object.keys(COLLECTIONS_CONFIG);
  if (collectionSlugs.length === 0) {
    throw new CollectionError(
      'No collections found in COLLECTIONS_CONFIG',
      'EMPTY_CONFIGURATION'
    );
  }
  
  // Validate each collection
  collectionSlugs.forEach(slug => {
    const config = COLLECTIONS_CONFIG[slug];
    
    // Skip if config is undefined (shouldn't happen, but be safe)
    if (!config) {
      errors.push(`Collection '${slug}' has no configuration`);
      return;
    }
    
    // Check required fields
    const requiredFields: (keyof CollectionConfig)[] = ['title', 'slug', 'description', 'category', 'color', 'tags'];
    requiredFields.forEach(field => {
      if (!config[field]) {
        errors.push(`Collection '${slug}' is missing required field '${field}'`);
      }
    });
    
    // Validate field types
    if (config.title && typeof config.title !== 'string') {
      errors.push(`Collection '${slug}' has invalid title type: expected string, got ${typeof config.title}`);
    }
    
    if (config.slug && typeof config.slug !== 'string') {
      errors.push(`Collection '${slug}' has invalid slug type: expected string, got ${typeof config.slug}`);
    }
    
    if (config.slug && config.slug !== slug) {
      errors.push(`Collection '${slug}' has mismatched slug: key is '${slug}' but slug field is '${config.slug}'`);
    }
    
    if (config.description && typeof config.description !== 'string') {
      errors.push(`Collection '${slug}' has invalid description type: expected string, got ${typeof config.description}`);
    }
    
    if (config.category && typeof config.category !== 'string') {
      errors.push(`Collection '${slug}' has invalid category type: expected string, got ${typeof config.category}`);
    }
    
    if (config.color && typeof config.color !== 'string') {
      errors.push(`Collection '${slug}' has invalid color type: expected string, got ${typeof config.color}`);
    }
    
    if (config.color && !config.color.match(/^#[0-9a-fA-F]{6}$/)) {
      errors.push(`Collection '${slug}' has invalid color format: expected hex color (e.g., #ff0000), got '${config.color}'`);
    }
    
    if (config.tags && !Array.isArray(config.tags)) {
      errors.push(`Collection '${slug}' has invalid tags type: expected array, got ${typeof config.tags}`);
    }
    
    if (config.tags && Array.isArray(config.tags)) {
      config.tags.forEach((tag, index) => {
        if (typeof tag !== 'string') {
          errors.push(`Collection '${slug}' has invalid tag at index ${index}: expected string, got ${typeof tag}`);
        }
      });
    }
    
    // Validate slug format
    if (config.slug && !config.slug.match(/^[a-z0-9-]+$/)) {
      errors.push(`Collection '${slug}' has invalid slug format: must contain only lowercase letters, numbers, and hyphens`);
    }
  });
  
  // Check for duplicate slugs (shouldn't happen with object keys, but good to verify)
  const slugs = collectionSlugs
    .map(key => COLLECTIONS_CONFIG[key])
    .filter((config): config is CollectionConfig => config !== undefined) // Type guard
    .map(config => config.slug);
  const duplicateSlugs = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
  if (duplicateSlugs.length > 0) {
    errors.push(`Duplicate slugs found: ${duplicateSlugs.join(', ')}`);
  }
  
  if (errors.length > 0) {
    throw new CollectionError(
      `Collection configuration validation failed:\n${errors.map(error => `  - ${error}`).join('\n')}`,
      'CONFIGURATION_VALIDATION_FAILED'
    );
  }
}

/**
 * Validate that content references match collection configuration
 * This should be called during build to ensure content integrity
 * @param contentCollections - Array of collection names found in content
 * @throws CollectionError if validation fails
 */
export function validateContentReferences(contentCollections: string[]): void {
  const configuredCollections = Object.keys(COLLECTIONS_CONFIG);
  const errors: string[] = [];
  
  // Check for content collections not in configuration
  const unconfiguredCollections = contentCollections.filter(
    collection => !configuredCollections.includes(collection)
  );
  
  if (unconfiguredCollections.length > 0) {
    errors.push(
      `Content found for collections not in configuration: ${unconfiguredCollections.join(', ')}`
    );
  }
  
  // Check for configured collections without content (warning, not error)
  const collectionsWithoutContent = configuredCollections.filter(
    collection => !contentCollections.includes(collection)
  );
  
  if (collectionsWithoutContent.length > 0) {
    console.warn(
      `Collections configured but have no content: ${collectionsWithoutContent.join(', ')}`
    );
  }
  
  if (errors.length > 0) {
    throw new CollectionError(
      `Content reference validation failed:\n${errors.map(error => `  - ${error}`).join('\n')}`,
      'CONTENT_REFERENCE_VALIDATION_FAILED'
    );
  }
}

/**
 * Run all build-time validations
 * This should be called during the build process to catch configuration errors early
 * @throws CollectionError if any validation fails
 */
export function runBuildTimeValidation(): void {
  try {
    console.log('Running collection configuration validation...');
    validateCollectionConfiguration();
    console.log('✓ Collection configuration validation passed');
  } catch (error) {
    console.error('✗ Collection configuration validation failed');
    throw error;
  }
}