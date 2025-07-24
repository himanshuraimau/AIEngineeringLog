// Mock data for now - in a real implementation, this would come from your content collections
const latestPosts = [
  {
    title: "I Built a RAG System for My Study Group (And It Actually Worked!)",
    description: "How we turned our messy class notes into a chatbot that helped us ace our finals",
    author: "Sarah Chen",
    collection: "RAG Systems",
    order: 4,
    readTime: "12 min",
    publishDate: "2024-01-15",
    tags: ["rag", "study-tools", "openai", "embeddings"],
    slug: "first-rag-system"
  },
  {
    title: "Prompt Engineering Tricks I Wish I Knew as a Freshman",
    description: "The patterns and techniques that actually work when you're trying to get AI to do your bidding",
    author: "Marcus Rodriguez",
    collection: "Prompt Engineering",
    order: 7,
    readTime: "8 min",
    publishDate: "2024-01-12",
    tags: ["prompts", "chatgpt", "productivity"],
    slug: "prompt-patterns-scale"
  },
  {
    title: "From Dorm Room to Demo Day: Deploying My First AI Project",
    description: "What I learned trying to make my AI side project actually work for other people",
    author: "Alex Kim",
    collection: "Production",
    order: 12,
    readTime: "15 min",
    publishDate: "2024-01-10",
    tags: ["deployment", "aws", "reality-check"],
    slug: "llm-deployment-strategies"
  }
];



export default function LatestPosts() {
  return (
    <section className="latest-posts-section">
      <h2 className="section-title">Latest Posts</h2>
      <p className="section-subtitle">Fresh insights from students who've been building cool stuff</p>
      
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