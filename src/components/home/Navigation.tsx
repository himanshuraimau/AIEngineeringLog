import ThemeToggle from '../ThemeToggle';

export default function Navigation() {
  return (
    <nav className="nav-container">
      <div className="nav-content">
        {/* Logo */}
        <div className="logo-section">
          <div className="logo-info">
            <h1 className="logo-text">AIEngineeringLog</h1>
            <p className="tagline">Learn from practitioners who built real systems</p>
          </div>
          <ThemeToggle />
        </div>

        {/* Navigation Links */}
        <div className="nav-links">
          <a href="/collections" className="nav-link">Collections</a>
          <a href="/authors" className="nav-link">Authors</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/contribute" className="nav-link">Contribute</a>
        </div>
      </div>
    </nav>
  );
} 