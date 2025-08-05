const featuredCollections = [
  {
    name: "RAG Systems",
    slug: "rag",
    description:
      "Build chatbots that actually know stuff about your documents (no more hallucinations!)",
    icon: (
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
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 6v10" />
        <path d="M6 11h10" />
      </svg>
    ),
    totalPosts: 10,
    featured: true,
    tags: ["embeddings", "search", "chatbots"],
  },
  {
    name: "Prompt Engineering",
    slug: "prompt-engineering",
    description:
      "Learn how to actually get AI models to do what you want (it's an art form, honestly)",
    icon: (
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
    totalPosts: 13,
    featured: true,
    tags: ["chatgpt", "prompts", "productivity"],
  },
];

export default function FeaturedCollections() {
  return (
    <section className="featured-collections-section">
      <h2 className="section-title">Featured Learning Paths</h2>
      <p className="section-subtitle">
        Start your AI journey with our most popular collections (trust us, we've
        made all the mistakes already)
      </p>

      <div className="collections-grid">
        {featuredCollections.map((collection) => (
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
              {collection.tags.map((tag) => (
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
                Let's Build Something →
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
