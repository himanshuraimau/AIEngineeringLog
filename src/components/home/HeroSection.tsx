export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            AI Engineering by Students, For Students
          </h1>
          
          <p className="hero-description">
            Real AI projects, real challenges, real solutions. Study notes from students who've built AI stuff and want to share what actually works.
          </p>
          
          <div className="hero-cta">
            <a href="/collections" className="btn btn-primary">
              Let's Learn Together
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