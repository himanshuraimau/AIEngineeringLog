/**
 * Central collection configuration system
 * Single source of truth for all collection metadata
 */

// TypeScript interfaces for collection configuration
export interface CollectionConfig {
  title: string;
  slug: string;
  description: string;
  category: string;
  color: string;
  tags: string[];
}

export interface CollectionWithStats extends CollectionConfig {
  postCount: number;
  posts?: any[]; // Will be typed more specifically when used with Astro content
}

// Central collections configuration - single source of truth
export const COLLECTIONS_CONFIG: Record<string, CollectionConfig> = {
  'package-management': {
    title: "Package Management",
    slug: "package-management",
    description: "Master Python dependency management tools and best practices",
    category: "Tools",
    color: "#3776ab",
    tags: ["python", "dependencies", "uv", "pip", "tools"]
  },
  'prompt-engineering': {
    title: "Prompt Engineering",
    slug: "prompt-engineering",
    description: "Master the art and science of crafting effective prompts for LLMs",
    category: "Foundations",
    color: "#2d5016",
    tags: ["prompts", "chatgpt", "productivity"]
  }
};

// Type-safe collection access
export function getCollectionSlugs(): string[] {
  return Object.keys(COLLECTIONS_CONFIG);
}

// Validate that a collection slug exists
export function isValidCollectionSlug(slug: string): slug is keyof typeof COLLECTIONS_CONFIG {
  return slug in COLLECTIONS_CONFIG;
}

// Get all collection configurations
export function getAllCollectionConfigs(): CollectionConfig[] {
  return Object.values(COLLECTIONS_CONFIG);
}