export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            AI Engineering
          </h1>
          
          <p className="hero-description">
            A blog-based course on AI engineering by AI Brewery Club
          </p>
          
          <div className="hero-cta">
            <a href="/collections" className="btn btn-primary">
              Start Learning
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-placeholder">
          <img src="/assets/hero-image.png" alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  );
} 