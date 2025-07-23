import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    collection: z.string(),
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

// Define collections properly (not using the deprecated nested structure)
export const collections = {
  'rag': posts,
  'prompt-engineering': posts,
  'agents': posts,
  'llmops': posts,
  'fine-tuning': posts,
  'production': posts,
}; 