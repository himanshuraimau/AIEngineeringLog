export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Learn AI Engineering from Practitioners Who Built Real Systems
          </h1>
          
          <p className="hero-description">
            A community-driven course where each post is a chapter written by practitioners who actually built the projects - not just watched tutorials. Real implementations, real challenges, real solutions.
          </p>
          
          <div className="hero-cta">
            <a href="/collections" className="btn btn-primary">
              Start Learning
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-placeholder">
           <img src="src/assets/hero-image.png" alt="Hero Image" />
          </div>
        </div>
      </div>
    </section>
  );
} 