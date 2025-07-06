// src/components/Hero/Hero.jsx
import styles from './Hero.module.css';
import profileImageUrl from '../../assets/images/Hamza.jpg';
import downloadIconUrl from '../../assets/icons/download-icon.png';
import myCvUrl from '../../assets/cv/Hamza_Awad_CV.pdf';

// Default (light theme) social icons
import facebookIconDefaultUrl from '../../assets/icons/facebook-icon.png';

import instagramIconDefaultUrl from '../../assets/icons/github-icon.png';
import linkedinIconDefaultUrl from '../../assets/icons/linkedin-icon.png';

// Dark theme (light-colored) social icons
import facebookIconDarkThemeUrl from '../../assets/icons/facebook-icon-light.png';

import instagramIconDarkThemeUrl from '../../assets/icons/github-icon-light.png';
import linkedinIconDarkThemeUrl from '../../assets/icons/linkedin-icon-light.png';

const Hero = ({ isDarkMode }) => {
  return (
    <section id="home" className={styles.heroSection}>
      <div className={`${styles.heroContainer} container`}>
        <div className={styles.heroContent}>
          <p className={styles.introText}>Hi I am</p>
          <h1 className={styles.nameText}>Hamza Awad</h1>
          <h2 className={styles.titleText}>Full Stack Developer</h2>
     <p className={styles.descriptionText}>
  Software Engineering graduate with hands-on experience in full stack development, cloud computing, and mobile applications. Passionate about building intuitive, user-focused digital solutions that make a difference.
</p>


          <div className={styles.buttonGroup}>
            <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>Hire Me</a>
            <a href={myCvUrl} download="Hamza_Awad_CV.pdf" className={`${styles.btn} ${styles.btnSecondary}`}>
              {downloadIconUrl ? <img src={downloadIconUrl} alt="Download CV" className={styles.btnIcon} /> : <span className={styles.btnIconPlaceholder}>⬇</span>}
              Download CV
            </a>
          </div>
        </div>

        <div className={styles.heroImageWrapper}>
          <div className={`${styles.blob} ${styles.blob1}`}></div>
          <div className={`${styles.blob} ${styles.blob2}`}></div>
          <img
            src={profileImageUrl}
            alt="Hamza Awad - Full Stack Developer"
            className={styles.profileImage}
          />
        </div>
      </div>

      <div className={`${styles.socialLinksContainer} container`}>
        <a href="https://www.facebook.com/hamza.abuamrea.2025" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <img src={isDarkMode ? facebookIconDarkThemeUrl : facebookIconDefaultUrl} alt="Facebook" />
        </a>
        <a href="https://github.com/HamzaAbuAmrea9" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src={isDarkMode ? instagramIconDarkThemeUrl : instagramIconDefaultUrl} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/hamza-awad-51a076311/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src={isDarkMode ? linkedinIconDarkThemeUrl : linkedinIconDefaultUrl} alt="LinkedIn" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
