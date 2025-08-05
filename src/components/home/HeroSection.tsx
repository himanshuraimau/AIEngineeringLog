export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            AI Engineering by Students, For Students
          </h1>
          
          <p className="hero-description">
            Hey there! We're college students who've been tinkering with AI stuff and figured we'd share what we've learned. No corporate BS - just real projects, real struggles, and the solutions we actually found that worked. Think of it as study notes from your club seniors who've been there, done that.
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