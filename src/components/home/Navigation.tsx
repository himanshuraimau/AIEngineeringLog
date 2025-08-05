import { useState } from 'react';
import ThemeToggle from '../ThemeToggle';
import ActiveNavigation from '../ActiveNavigation';

interface NavigationProps {
  currentPath?: string;
}

export default function Navigation({ currentPath = '/' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath?.startsWith(path)) return true;
    return false;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav-container">
      <div className="nav-content">
        {/* Header with Logo and Controls */}
        <div className="nav-header">
          <div className="logo-info">
            <h1 className="logo-text">AIEngineeringLog</h1>
            <p className="tagline">Study notes from students who've actually built stuff</p>
          </div>
          
          <div className="nav-controls">
            <ThemeToggle />
            <button 
              className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle mobile menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="nav-links">
            <a 
              href="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </a>
            <a 
              href="/collections" 
              className={`nav-link ${isActive('/collections') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Collections
            </a>
            <a 
              href="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About
            </a>
          </div>
        </div>
        
        {/* Client-side active navigation handler */}
        <ActiveNavigation />
      </div>
    </nav>
  );
} 