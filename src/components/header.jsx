import React, { useState, useEffect } from 'react';
import '../css/Header.css';

function Header() {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      // const projectsSection = document.getElementById('projects');
      
      if (aboutSection) {
        const aboutSectionPosition = aboutSection.getBoundingClientRect().top;
        // const projectsSectionPosition = projectsSection.getBoundingClientRect().top;
        
        if (aboutSectionPosition <= 0) {
          setIsHeaderSticky(true); // Change color when header reaches about section
        } else {
          setIsHeaderSticky(false); // Return to normal color when header reaches projects section
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isHeaderSticky ? 'sticky' : ''}`}>
      <a id="logo-id-reload" href="https://petrikd.com/" className="logo">
        <span id="logo-id-reload-1">Daniel</span>
        <span id="dev-id">.dev</span>
      </a>
      <div className="bx bx-menu" id="menu-icon"></div>
      <nav className="navbar">
        <a id="about-a" href="#about">
          About
        </a>
        <a id="projects-a" href="#projects">
          Projects
        </a>
        <span className="active-nav"></span>
        <span className="animate"></span>
      </nav>
    </header>
  );
}

export default Header;
