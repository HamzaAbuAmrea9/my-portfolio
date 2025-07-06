import styles from './Services.module.css';

// --- ACTION REQUIRED: Add new icons for your services ---
// You will need to find appropriate icons for these services.
// Remember to get both a default version and a light-colored version for dark mode.

// Light mode (default) icons
import FullstackIconDefault from '../../assets/icons/fullstack-icon.png';
import ApiIconDefault from '../../assets/icons/api-icon.png';
import MobileAppIconDefault from '../../assets/icons/mobile-icon-removebg.png';

// Dark mode (light-colored) icons
import FullstackIconDark from '../../assets/icons/fullstack-icon.png';
import ApiIconDark from '../../assets/icons/api-icon.png';
import MobileAppIconDark from '../../assets/icons/mobile-icon-removebg.png';


// Updated data for services reflecting a Full Stack Developer's offerings
const servicesData = [
  {
    iconUrlLight: FullstackIconDefault,
    iconUrlDark: FullstackIconDark,
    title: 'Full-Stack Web Development',
    description: 'Building complete, responsive, and user-friendly web applications from end-to-end. I handle everything from backend architecture with Spring Boot/Laravel to dynamic frontend interfaces with React.',
  },
  {
    iconUrlLight: ApiIconDefault,
    iconUrlDark: ApiIconDark,
    title: 'Backend & API Solutions',
    description: 'Developing secure, scalable, and efficient backend systems. I specialize in creating robust REST APIs for web and mobile applications, ensuring seamless data management and performance.',
  },
  {
    iconUrlLight: MobileAppIconDefault,
    iconUrlDark: MobileAppIconDark,
    title: 'Mobile App Development',
    description: 'Crafting beautiful and high-performance cross-platform mobile applications using Flutter. I build intuitive and engaging user experiences for both iOS and Android from a single codebase.',
  },
];


const Services = ({ isDarkMode }) => {
  return (
    <section id="services" className={styles.servicesSection}>
      <div className={`${styles.servicesContainer} container`}>
        <h2 className={styles.sectionTitle}>Services</h2>
        {/* Updated subtitle to be more professional and relevant */}
        <p className={styles.sectionSubtitle}>
          I provide professional development services to bring your digital ideas to life, from robust web platforms to engaging mobile apps.
        </p>

        <div className={styles.servicesGrid}>
          {servicesData.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIconWrapper}>
                <img
                  src={isDarkMode ? service.iconUrlDark : service.iconUrlLight}
                  alt={`${service.title} icon`}
                  className={styles.serviceIcon}
                />
              </div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;