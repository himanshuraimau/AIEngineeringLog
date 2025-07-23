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

const authors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    bio: z.string(),
    avatar: z.string().optional(),
    company: z.string().optional(),
    role: z.string().optional(),
    location: z.string().optional(),
    joinDate: z.date(),
    social: z.object({
      github: z.string().optional(),
      linkedin: z.string().optional(),
      twitter: z.string().optional(),
      website: z.string().optional(),
      email: z.string().optional(),
      youtube: z.string().optional(),
      medium: z.string().optional(),
      discord: z.string().optional(),
    }).optional(),
    expertise: z.array(z.string()).optional(),
  }),
});

export const collections = {
  'collections/rag': posts,
  'collections/prompt-engineering': posts,
  'collections/agents': posts,
  'collections/llmops': posts,
  'collections/fine-tuning': posts,
  'collections/production': posts,
  'authors': authors,
}; 