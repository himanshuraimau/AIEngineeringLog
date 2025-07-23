const featuredCollections = [
  {
    name: "RAG Systems",
    slug: "rag",
    description: "Master document Q&A systems from basics to production scale",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <path d="M21 21l-4.35-4.35"/>
        <path d="M11 6v10"/>
        <path d="M6 11h10"/>
      </svg>
    ),
    totalPosts: 10,
    featured: true,
    tags: ["embeddings", "vector-db", "retrieval"]
  },
  {
    name: "Prompt Engineering",
    slug: "prompt-engineering", 
    description: "Learn advanced prompting techniques that actually work in production",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 9h8"/>
        <path d="M8 13h6"/>
      </svg>
    ),
    totalPosts: 13,
    featured: true,
    tags: ["prompts", "chain-of-thought", "few-shot"]
  },
  {
    name: "Production AI",
    slug: "production",
    description: "Deploy, monitor, and scale AI systems in real-world environments",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v6m0 6v6"/>
        <path d="m21 12-6 0m-6 0-6 0"/>
        <path d="m16.24 7.76-4.24 4.24m0 0L7.76 16.24"/>
        <path d="M16.24 16.24L12 12l-4.24-4.24"/>
      </svg>
    ),
    totalPosts: 11,
    featured: true,
    tags: ["deployment", "monitoring", "scaling"]
  }
];

export default function FeaturedCollections() {
  return (
    <section className="featured-collections-section">
      <h2 className="section-title">Featured Learning Paths</h2>
      <p className="section-subtitle">Start your AI engineering journey with our most popular collections</p>
      
      <div className="collections-grid">
        {featuredCollections.map((collection) => (
          <div key={collection.slug} className="collection-card">
            <div className="collection-header">
              <div className="collection-icon">{collection.icon}</div>
              <div className="collection-info">
                <h3 className="collection-name">{collection.name}</h3>
                <p className="collection-description">{collection.description}</p>
              </div>
            </div>

            <div className="collection-stats">
              <div className="stat">
                <span className="stat-value">{collection.totalPosts}</span>
                <span className="stat-label">Posts</span>
              </div>
            </div>



            <div className="collection-tags">
              {collection.tags.map((tag) => (
                <span key={tag} className="collection-tag">{tag}</span>
              ))}
            </div>

            <div className="collection-footer">
              <a href={`/collections/${collection.slug}`} className="start-learning-btn">
                Start Learning →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-collections">
        <a href="/collections" className="view-all-link">Explore All Collections</a>
      </div>
    </section>
  );
} 