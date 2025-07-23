// Mock data for now - in a real implementation, this would come from your content collections
const latestPosts = [
  {
    title: "Building Your First RAG System with Pinecone and OpenAI",
    description: "Step-by-step guide to creating a document Q&A system that actually works in production",
    author: "Sarah Chen",
    collection: "RAG Systems",
    order: 4,
    readTime: "12 min",
    publishDate: "2024-01-15",
    tags: ["rag", "pinecone", "openai", "embeddings"],
    slug: "first-rag-system"
  },
  {
    title: "Prompt Engineering Patterns That Scale",
    description: "Learn the advanced techniques used by AI companies to create reliable prompts",
    author: "Marcus Rodriguez",
    collection: "Prompt Engineering",
    order: 7,
    readTime: "8 min",
    publishDate: "2024-01-12",
    tags: ["prompts", "patterns", "scaling"],
    slug: "prompt-patterns-scale"
  },
  {
    title: "From Prototype to Production: LLM Deployment Strategies",
    description: "Real-world lessons from deploying language models at scale",
    author: "Alex Kim",
    collection: "Production",
    order: 12,
    readTime: "15 min",
    publishDate: "2024-01-10",
    tags: ["deployment", "scaling", "production"],
    slug: "llm-deployment-strategies"
  }
];



export default function LatestPosts() {
  return (
    <section className="latest-posts-section">
      <h2 className="section-title">Latest Posts</h2>
      <p className="section-subtitle">Fresh insights from our community of AI practitioners</p>
      
      <div className="posts-grid">
        {latestPosts.map((post) => (
          <article key={post.slug} className="post-card">
            <div className="post-header">
              <div className="post-meta">
                <span className="collection-badge">{post.collection}</span>
                <span className="order-badge">#{post.order.toString().padStart(2, '0')}</span>
              </div>
              <span className="read-time">{post.readTime}</span>
            </div>

            <h3 className="post-title">
              <a href={`/posts/${post.slug}`}>{post.title}</a>
            </h3>
            
            <p className="post-description">{post.description}</p>

            <div className="post-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>

            <div className="post-footer">
              <span className="post-author">By {post.author}</span>
              <span className="post-date">{new Date(post.publishDate).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric',
                year: 'numeric'
              })}</span>
            </div>
          </article>
        ))}
      </div>

      <div className="view-all">
        <a href="/posts" className="view-all-link">View All Posts →</a>
      </div>
    </section>
  );
} 