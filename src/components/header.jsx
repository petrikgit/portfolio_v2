import React, { useState, useEffect } from "react";
import "../css/Header.css";

function Header() {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect(() => {
    let navbar = document.querySelector(".navbar");
    let menuIcon = document.querySelector("#menu-icon");

    menuIcon.onclick = () => {
      menuIcon.classList.toggle("bx-x");
      navbar.classList.toggle("active");
    };
  });

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${isHeaderSticky ? "sticky" : ""}`}
      style={{ display: "none" }}
    >
      {/* // <header className={`header ${isHeaderSticky ? 'sticky' : ''}`} > */}
      <a id="logo-id-reload" href="https://petrikd.com/" className="logo">
        <span id="logo-id-reload-1">Daniel</span>
        <span id="dev-id">.dev</span>
      </a>
      <div className="bx bx-menu" id="menu-icon">
        <svg viewBox="0 0 100 80" width="20" height="20">
          <rect width="100" height="20" rx="10"></rect>
          <rect y="30" width="100" height="20" rx="10"></rect>
          <rect y="60" width="100" height="20" rx="10"></rect>
        </svg>
      </div>
      <div className="bx bx-menu" id="x-icon" style={{ display: "none" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 384 512">
          <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
        </svg>
      </div>
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
