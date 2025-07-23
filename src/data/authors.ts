export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar?: string;
  company?: string;
  role?: string;
  location?: string;
  joinDate: string;
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
    email?: string;
    youtube?: string;
    medium?: string;
    discord?: string;
  };
  expertise?: string[];
}

export const authors: Record<string, Author> = {
  'jane-smith': {
    id: 'jane-smith',
    name: 'Jane Smith',
    bio: 'AI Engineer building production RAG systems at scale. Previously at OpenAI and Google.',
    avatar: '/avatars/jane-smith.jpg',
    company: 'TechCorp',
    role: 'Senior AI Engineer',
    location: 'San Francisco, CA',
    joinDate: '2024-01-10',
    social: {
      github: 'https://github.com/jane-smith',
      linkedin: 'https://linkedin.com/in/jane-smith',
      twitter: 'https://twitter.com/jane_builds_ai',
      website: 'https://janesmith.dev',
      email: 'jane@example.com',
    },
    expertise: ['RAG Systems', 'Vector Databases', 'LLM Applications', 'Production ML'],
  },
  'alex-chen': {
    id: 'alex-chen',
    name: 'Alex Chen',
    bio: 'ML Platform Engineer specializing in LLMOps and model deployment at scale. Built inference infrastructure serving 100M+ requests daily.',
    company: 'ScaleAI',
    role: 'Principal ML Engineer',
    location: 'Seattle, WA',
    joinDate: '2024-01-15',
    social: {
      github: 'https://github.com/alex-chen',
      linkedin: 'https://linkedin.com/in/alex-chen-ml',
      twitter: 'https://twitter.com/alexbuildsml',
    },
    expertise: ['LLMOps', 'Model Deployment', 'Kubernetes', 'Infrastructure'],
  },
  'sarah-johnson': {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    bio: 'Research Engineer focused on AI agents and autonomous systems. PhD in Computer Science from MIT, previously at DeepMind.',
    company: 'Anthropic',
    role: 'Research Engineer',
    location: 'London, UK',
    joinDate: '2024-01-20',
    social: {
      github: 'https://github.com/sarah-johnson',
      website: 'https://sarahjohnson.ai',
      twitter: 'https://twitter.com/sarah_ai_research',
    },
    expertise: ['AI Agents', 'Reinforcement Learning', 'Multi-Agent Systems', 'Research'],
  },
};

export function getAuthor(id: string): Author | undefined {
  return authors[id];
}

export function getAllAuthors(): Author[] {
  return Object.values(authors);
} 