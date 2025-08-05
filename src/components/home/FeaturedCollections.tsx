import type { ReactElement } from 'react';

interface CollectionConfig {
  title: string;
  slug: string;
  description: string;
  category: string;
  color: string;
  tags: string[];
  totalPosts: number;
  featured: boolean;
}

interface Collection {
  name: string;
  slug: string;
  description: string;
  icon: ReactElement;
  totalPosts: number;
  featured: boolean;
  tags: string[];
}

interface FeaturedCollectionsProps {
  collectionsData?: CollectionConfig[];
}

// Default icon for collections
const defaultIcon = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

// Collection-specific icons
const icons: Record<string, ReactElement> = {
  'prompt-engineering': (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 9h8" />
      <path d="M8 13h6" />
    </svg>
  ),
  'package-management': (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16.5 9.4l-9-5.19c-.36-.2-.8-.2-1.16 0l-9 5.19c-.35.2-.56.57-.56.96v10.7c0 .39.21.76.56.96l9 5.19c.36.2.8.2 1.16 0l9-5.19c.35-.2.56-.57.56-.96V10.4c0-.39-.21-.76-.56-.96z" />
      <polyline points="7.5,4.21 16.5,9.4 7.5,14.6" />
    </svg>
  ),
};

export default function FeaturedCollections({ collectionsData }: FeaturedCollectionsProps) {
  // Convert collectionsData to Collection format
  const collections: Collection[] = collectionsData?.map((config) => ({
    name: config.title,
    slug: config.slug,
    description: config.description,
    icon: icons[config.slug] || defaultIcon,
    totalPosts: config.totalPosts,
    featured: config.featured,
    tags: config.tags,
  })) || [
    // Fallback data if no props provided
    {
      name: "Prompt Engineering",
      slug: "prompt-engineering",
      description: "Master the art of communicating effectively with large language models",
      icon: icons['prompt-engineering'] || defaultIcon,
      totalPosts: 4,
      featured: true,
      tags: ["chatgpt", "prompts", "productivity"],
    },
    {
      name: "Package Management",
      slug: "package-management",
      description: "Python dependency management tools and best practices",
      icon: icons['package-management'] || defaultIcon,
      totalPosts: 1,
      featured: true,
      tags: ["python", "uv", "dependencies"],
    },
  ];

  return (
    <section className="featured-collections-section">
      <h2 className="section-title">Featured Learning Paths</h2>
      <p className="section-subtitle">
        Start your AI journey with our most popular collections
      </p>

      <div className="collections-grid">
        {collections.map((collection: Collection) => (
          <div key={collection.slug} className="collection-card">
            <div className="collection-header">
              <div className="collection-icon">{collection.icon}</div>
              <div className="collection-info">
                <h3 className="collection-name">{collection.name}</h3>
                <p className="collection-description">
                  {collection.description}
                </p>
              </div>
            </div>

            <div className="collection-stats">
              <div className="stat">
                <span className="stat-value">{collection.totalPosts}</span>
                <span className="stat-label">Posts</span>
              </div>
            </div>

            <div className="collection-tags">
              {collection.tags.map((tag: string) => (
                <span key={tag} className="collection-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="collection-footer">
              <a
                href={`/collections/${collection.slug}`}
                className="start-learning-btn"
              >
                Start Learning →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-collections">
        <a href="/collections" className="view-all-link">
          Check Out All Collections
        </a>
      </div>
    </section>
  );
}
