import { useEffect } from 'react';

export default function ActiveNavigation() {
  useEffect(() => {
    // Get current path
    const currentPath = window.location.pathname;
    
    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Add active class to current page link
    const activeLink = document.querySelector(`.nav-link[href="${currentPath}"]`) ||
                      document.querySelector(`.nav-link[href="${currentPath}/"]`);
    
    if (activeLink) {
      activeLink.classList.add('active');
    } else if (currentPath.startsWith('/collections')) {
      // Handle collections sub-pages
      const collectionsLink = document.querySelector('.nav-link[href="/collections"]');
      if (collectionsLink) {
        collectionsLink.classList.add('active');
      }
    } else if (currentPath === '/' || currentPath === '') {
      // Handle home page
      const homeLink = document.querySelector('.nav-link[href="/"]');
      if (homeLink) {
        homeLink.classList.add('active');
      }
    }
  }, []);

  return null; // This component doesn't render anything
} 