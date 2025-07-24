const featuredCollections = [
  {
    name: "RAG Systems",
    slug: "rag",
    description: "Build chatbots that actually know stuff about your documents (no more hallucinations!)",
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
    tags: ["embeddings", "search", "chatbots"]
  },
  {
    name: "Prompt Engineering",
    slug: "prompt-engineering", 
    description: "Learn how to actually get AI models to do what you want (it's an art form, honestly)",
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 9h8"/>
        <path d="M8 13h6"/>
      </svg>
    ),
    totalPosts: 13,
    featured: true,
    tags: ["chatgpt", "prompts", "productivity"]
  },
  {
    name: "Production AI",
    slug: "production",
    description: "Making your cool side projects work reliably enough to show other people",
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
    tags: ["deployment", "aws", "debugging"]
  }
];

export default function FeaturedCollections() {
  return (
    <section className="featured-collections-section">
      <h2 className="section-title">Featured Learning Paths</h2>
      <p className="section-subtitle">Start your AI journey with our most popular collections (trust us, we've made all the mistakes already)</p>
      
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
                Let's Build Something →
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="view-all-collections">
        <a href="/collections" className="view-all-link">Check Out All Collections</a>
      </div>
    </section>
  );
} 