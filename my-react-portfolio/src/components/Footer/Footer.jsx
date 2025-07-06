import styles from './Footer.module.css';

// --- IMPORT YOUR ASSETS ---
// Default/Light theme assets
import logoDefaultUrl from '../../assets/icons/logo-light.png';
import facebookIconDefaultUrl from '../../assets/icons/facebook-icon-light.png';
import githubIconDefaultUrl from '../../assets/icons/github-icon-light.png';
import linkedinIconDefaultUrl from '../../assets/icons/linkedin-icon-light.png';

// Dark theme assets (light-colored versions)
import logoDarkThemeUrl from '../../assets/icons/logo-light.png';
import facebookIconDarkThemeUrl from '../../assets/icons/facebook-icon-light.png';
import githubIconDarkThemeUrl from '../../assets/icons/github-icon-light.png';
import linkedinIconDarkThemeUrl from '../../assets/icons/linkedin-icon-light.png';


// Accept isDarkMode as a prop
const Footer = ({ isDarkMode }) => {
  const currentYear = new Date().getFullYear();

  // This should be the same navLinks array you use in your Header component
  const navLinks = [
    { id: 'home', text: 'Home' },
    { id: 'about', text: 'About' },
    { id: 'services', text: 'Services' },
    { id: 'projects', text: 'Projects' },
    { id: 'certifications', text: 'Certifications' },
    { id: 'contact', text: 'Contact Us' },
  ];

  // --- UPDATED with your social links ---
  const socialLinksData = [
    { name: 'Facebook', defaultIcon: facebookIconDefaultUrl, darkThemeIcon: facebookIconDarkThemeUrl, url: 'https://www.facebook.com/hamza.abuamrea.2025' },
    { name: 'GitHub', defaultIcon: githubIconDefaultUrl, darkThemeIcon: githubIconDarkThemeUrl, url: 'https://github.com/HamzaAbuAmrea9' },
    { name: 'LinkedIn', defaultIcon: linkedinIconDefaultUrl, darkThemeIcon: linkedinIconDarkThemeUrl, url: 'https://www.linkedin.com/in/hamza-awad-51a076311/' },
  ];

  return (
    <footer className={styles.footerSection}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.footerTop}>
          <a href="#home" className={styles.footerLogoLink}>
            <img
              src={isDarkMode ? logoDarkThemeUrl : logoDefaultUrl}
              // --- UPDATED alt text ---
              alt="Hamza Awad Logo"
              className={styles.footerLogoImage}
            />
          </a>

          <nav className={styles.footerNavMenu}>
            {navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className={styles.footerNavLink}>
                {link.text}
              </a>
            ))}
          </nav>

          <div className={styles.footerSocialLinks}>
            {socialLinksData.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className={styles.socialIconLink}
              >
                <img
                  src={isDarkMode ? social.darkThemeIcon : social.defaultIcon}
                  alt={social.name}
                  className={styles.socialIcon}
                />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p className={styles.copyrightText}>
            {/* --- UPDATED copyright name --- */}
            © {currentYear} <a href="#home" className={styles.copyrightName}>Hamza Awad</a>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;