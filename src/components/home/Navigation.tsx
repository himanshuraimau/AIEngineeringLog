import ThemeToggle from '../ThemeToggle';
import ActiveNavigation from '../ActiveNavigation';

interface NavigationProps {
  currentPath?: string;
}

export default function Navigation({ currentPath = '/' }: NavigationProps) {
  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath?.startsWith(path)) return true;
    return false;
  };

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
          <a href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</a>
          <a href="/collections" className={`nav-link ${isActive('/collections') ? 'active' : ''}`}>Collections</a>
          <a href="/authors" className={`nav-link ${isActive('/authors') ? 'active' : ''}`}>Authors</a>
          <a href="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</a>
          <a href="/contribute" className={`nav-link ${isActive('/contribute') ? 'active' : ''}`}>Contribute</a>
        </div>
        
        {/* Client-side active navigation handler */}
        <ActiveNavigation />
      </div>
    </nav>
  );
} 