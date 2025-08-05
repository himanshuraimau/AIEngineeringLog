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
  'rag': {
    title: "RAG Systems",
    slug: "rag",
    description: "Learn to build Retrieval-Augmented Generation systems from scratch to production",
    category: "Building",
    color: "#8b4513",
    tags: ["rag", "embeddings", "search", "chatbots"]
  },
  'prompt-engineering': {
    title: "Prompt Engineering",
    slug: "prompt-engineering", 
    description: "Master the art and science of crafting effective prompts for LLMs",
    category: "Foundations",
    color: "#2d5016",
    tags: ["prompts", "chatgpt", "productivity"]
  },
  'agents': {
    title: "AI Agents",
    slug: "agents",
    description: "Build autonomous AI agents that can reason, plan, and take actions",
    category: "Advanced",
    color: "#1a365d",
    tags: ["agents", "automation", "tools"]
  },
  'python-packages': {
    title: "Python Packages",
    slug: "python-packages",
    description: "Learn to build and publish Python packages for AI engineering",
    category: "Tools",
    color: "#3776ab",
    tags: ["python", "packages", "tools", "development"]
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