export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar?: string;
  school?: string;
  major?: string;
  year?: string;
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
  interests?: string[];
}

export const authors: Record<string, Author> = {
  'jane-smith': {
    id: 'jane-smith',
    name: 'Jane Smith',
    bio: 'CS junior who got way too into RAG systems after a failed attempt to build a study buddy chatbot. Now I actually know what embeddings are!',
    avatar: '/avatars/jane-smith.jpg',
    school: 'UC Berkeley',
    major: 'Computer Science',
    year: 'Junior',
    location: 'Berkeley, CA',
    joinDate: '2024-01-10',
    social: {
      github: 'https://github.com/jane-codes',
      linkedin: 'https://linkedin.com/in/jane-smith-cs',
      twitter: 'https://twitter.com/jane_builds_stuff',
      website: 'https://jane-builds.dev',
      email: 'jane.smith@berkeley.edu',
    },
    interests: ['RAG Systems', 'Vector Databases', 'Study Tools', 'Late Night Coding'],
  },
  'alex-chen': {
    id: 'alex-chen',
    name: 'Alex Chen',
    bio: 'Senior studying AI/ML who spent way too much money on AWS trying to deploy a simple chatbot. Now I help others avoid my expensive mistakes.',
    school: 'MIT',
    major: 'Artificial Intelligence',
    year: 'Senior',
    location: 'Cambridge, MA',
    joinDate: '2024-01-15',
    social: {
      github: 'https://github.com/alex-deploys',
      linkedin: 'https://linkedin.com/in/alex-chen-mit',
      twitter: 'https://twitter.com/alex_deploys_ai',
    },
    interests: ['MLOps', 'Cloud Deployment', 'Cost Optimization', 'Breaking Things in Production'],
  },
  'sarah-johnson': {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    bio: 'Grad student researching AI agents who somehow convinced her advisor that building game NPCs counts as serious research. Spoiler: it does!',
    school: 'Stanford University',
    major: 'Computer Science PhD',
    year: 'PhD Candidate',
    location: 'Stanford, CA',
    joinDate: '2024-01-20',
    social: {
      github: 'https://github.com/sarah-agents',
      website: 'https://sarah-research.github.io',
      twitter: 'https://twitter.com/sarah_builds_agents',
    },
    interests: ['AI Agents', 'Game Development', 'Multi-Agent Systems', 'Academic Procrastination'],
  },
  'marcus-rodriguez': {
    id: 'marcus-rodriguez',
    name: 'Marcus Rodriguez',
    bio: 'Sophomore who discovered prompt engineering and now thinks he can solve everything with the right ChatGPT prompt. Sometimes he\'s actually right.',
    school: 'University of Texas at Austin',
    major: 'Computer Engineering',
    year: 'Sophomore',
    location: 'Austin, TX',
    joinDate: '2024-01-25',
    social: {
      github: 'https://github.com/marcus-prompts',
      twitter: 'https://twitter.com/marcus_prompts',
      discord: 'marcus_prompts#1234',
    },
    interests: ['Prompt Engineering', 'Automation', 'Productivity Hacks', 'Convincing AI to Do Homework'],
  },
};

export function getAuthor(id: string): Author | undefined {
  return authors[id];
}

export function getAllAuthors(): Author[] {
  return Object.values(authors);
} 