import { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';

// Import both logo versions
import logoDefaultUrl from '../../assets/icons/logo.png';      // Your default (e.g., dark) logo for light mode
import logoDarkThemeUrl from '../../assets/icons/logo-light.png'; // Your light-colored logo for dark mode

// Optional: If you have actual SVG icons for Sun/Moon, import them like this:
// import SunIcon from '../../assets/icons/sun-icon.svg?react';
// import MoonIcon from '../../assets/icons/moon-icon.svg?react';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef(null);

  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'services', text: 'Services' },
    { id: 'projects', text: 'Projects' },
     { id: 'certifications', text: 'Certifications' },
    { id: 'contact', text: 'Contact Us' },
  ];

  // Scrollspy Effect to highlight active nav link
  useEffect(() => {
    const navHeight = navRef.current ? navRef.current.offsetHeight : 70; // Default navbar height
    // Adjust rootMargin: top offset by navbar height, bottom offset to trigger earlier
    const observerOptions = {
      root: null, // observing intersections with the viewport
      rootMargin: `-${navHeight + 10}px 0px -45% 0px`, // Tuned for better active state change
      threshold: 0, // Trigger as soon as any part of the section enters/leaves the adjusted viewport
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = navLinks.map(link => document.getElementById(link.id)).filter(Boolean);

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Initial check for active section on page load
    const currentHash = window.location.hash.substring(1);
    if (currentHash && navLinks.some(link => link.id === currentHash)) {
        setActiveSection(currentHash);
    } else if (window.scrollY < window.innerHeight / 2 && sections.find(s => s.id === 'home')) {
        // If near the top and 'home' exists, set to 'home'
        setActiveSection('home');
    }


    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [navLinks]); // Dependency array

  // Handles click on nav links to update active state immediately
  const handleNavLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    // The href="#sectionId" will handle the actual scroll due to `scroll-behavior: smooth;`
  };


  return (
    <header className={styles.navbar} ref={navRef}>
      <div className={`${styles.navContainer} container`}> {/* Assuming .container is global */}
        <a
          href="#home"
          className={styles.navLogoLink}
          onClick={() => handleNavLinkClick('home')}
        >
          <img
            src={isDarkMode ? logoDarkThemeUrl : logoDefaultUrl}
            alt="Sohaib Alkhateeb Logo"
            className={styles.logoImage}
          />
        </a>

        <nav className={styles.navMenu}>
           {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${styles.navLink} ${activeSection === link.id ? styles.active : ''}`}
              onClick={() => handleNavLinkClick(link.id)}
            >
              {link.text}
            </a>
          ))}
        </nav>

        <div className={styles.navActions}>
          <button
            className={`${styles.themeToggle} ${isDarkMode ? styles.darkModeActive : ''}`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <div className={styles.themeToggleIcons}>
              {/* Using emojis as placeholders. Replace with actual SVGs if preferred. */}
              <span className={styles.sunIcon}>☀️</span>
              <span className={styles.moonIcon}>🌙</span>
              {/* Example with SVG components:
              {isDarkMode ? ( // Show Sun when it's Dark Mode (to switch TO Light)
                <SunIcon className={styles.sunIcon} />
              ) : ( // Show Moon when it's Light Mode (to switch TO Dark)
                <MoonIcon className={styles.moonIcon} />
              )}
              */}
            </div>
            <div className={styles.themeToggleButton}></div>
          </button>
          {/* Placeholder for mobile menu button
          <button className={styles.mobileMenuButton} aria-label="Open menu">
            ☰
          </button>
          */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;