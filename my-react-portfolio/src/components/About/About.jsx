import styles from './About.module.css';
import profileImageUrl from '../../assets/images/Hamza.jpg';

// --- ACTION REQUIRED: Add new icons for each skill category ---
// You will need to find/create these icons and place them in your assets folder.
// Make sure you have both light and dark theme versions.

// Light mode (default) icons
import FrontendIconDefault from '../../assets/icons/frontend-icon.png';
import BackendIconDefault from '../../assets/icons/backend-icon.png';
import MobileIconDefault from '../../assets/icons/mobile-icon.png';
import DatabaseIconDefault from '../../assets/icons/database-icon.png';
import CloudIconDefault from '../../assets/icons/cloud-icon.png';
import ToolsIconDefault from '../../assets/icons/tools-icon.png'; // Using 'Tools' as a more general category

// Dark mode icons (light-colored versions)
import FrontendIconDark from '../../assets/icons/frontend-icon.png';
import BackendIconDark from '../../assets/icons/backend-icon.png';
import MobileIconDark from '../../assets/icons/mobile-icon.png';
import DatabaseIconDark from '../../assets/icons/database-icon.png';
import CloudIconDark from '../../assets/icons/cloud-icon.png';
import ToolsIconDark from '../../assets/icons/tools-icon.png';

// New data structure for skill categories
const skillCategories = [
  {
    title: 'Frontend Development',
    iconLight: FrontendIconDefault,
    iconDark: FrontendIconDark,
    skills: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Vite', 'Figma'],
  },
  {
    title: 'Backend Development',
    iconLight: BackendIconDefault,
    iconDark: BackendIconDark,
    skills: ['Java (Spring Boot)', 'PHP (Laravel)', '.NET', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Mobile Development',
    iconLight: MobileIconDefault,
    iconDark: MobileIconDark,
    skills: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    title: 'Databases',
    iconLight: DatabaseIconDefault,
    iconDark: DatabaseIconDark,
    skills: ['MySQL', 'SQL', 'Database Design'],
  },
  {
    title: 'Cloud & DevOps',
    iconLight: CloudIconDefault,
    iconDark: CloudIconDark,
    skills: ['AWS (Basics)', 'Docker', 'Git & GitHub'],
  },
  {
    title: 'Core Competencies',
    iconLight: ToolsIconDefault, // Reusing tools icon for this category
    iconDark: ToolsIconDark,
    skills: ['Problem Solving', 'Object-Oriented Programming', 'Unit Testing', 'Machine Learning (Concepts)'],
  },
];


const About = ({ isDarkMode }) => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={`${styles.aboutContainer} container`}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        <p className={styles.sectionSubtitle}>Full Stack Developer & Tech Enthusiast</p>

        {/* This part with the image and text remains the same */}
        <div className={styles.aboutContentWrapper}>
          <div className={styles.aboutImageContainer}>
            <div className={`${styles.blob} ${styles.blob1}`}></div>
            <div className={`${styles.blob} ${styles.blob2}`}></div>
            <img
              src={profileImageUrl}
              alt="Hamza Awad"
              className={styles.profileImageInAbout}
            />
          </div>
          <div className={styles.aboutTextContainer}>
            <p>
              As a highly motivated Software Engineering student from Bethlehem University, I have a strong passion for building robust, scalable, and user-friendly applications. My experience spans the full software development lifecycle, from architecting and developing backend APIs with Java/Spring Boot and PHP/Laravel to creating dynamic and responsive frontends with React.
            </p>
            <p>
              I am proficient with modern developer tools like Docker and Git, and I'm always eager to explore new technologies. My background includes hands-on experience with cloud services through an AWS internship and mobile development with Flutter. I am dedicated to leveraging my skills in problem-solving and collaboration to contribute to innovative projects and continuously grow in the ever-evolving tech landscape.
            </p>
          </div>
        </div>
        
        {/* --- NEW SKILLS SECTION --- */}
        <h3 className={styles.skillsHeader}>My Skillset</h3>
        <div className={styles.skillCategoriesGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCategoryCard}>
              <img 
                src={isDarkMode ? category.iconDark : category.iconLight} 
                alt={`${category.title} icon`}
                className={styles.categoryIcon} 
              />
              <h4 className={styles.categoryTitle}>{category.title}</h4>
              <ul className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className={styles.skillTag}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;