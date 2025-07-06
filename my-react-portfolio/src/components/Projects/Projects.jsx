import styles from './Projects.module.css';

// --- YOUR PROJECT IMAGES ---
import auraStrideImg from '../../assets/images/project-aurastride.png';
import socialMediaImg from '../../assets/images/project-socialmedia.png';
import eCommerceImg from '../../assets/images/project-ecommerce.png';
// --- ACTION: Create a beautiful collage of your Flutter apps! ---
import flutterCollectionImg from '../../assets/images/project-flutter-collection.png'; 

// --- A SINGLE, UNIFIED ARRAY FOR ALL PROJECTS ---
const projectsData = [
  {
    id: 1,
    type: 'featured', // This project has a GitHub link
    title: 'AuraStride: Visually Impaired Navigation App',
    image: auraStrideImg,
    description: 'A graduation project focused on assisting the visually impaired. This mobile app, built with Flutter and Firebase, provides real-time obstacle detection using AI/ML models and turn-by-turn voice guidance.',
    tags: ['Mobile App', 'Flutter', 'Firebase', 'AI/ML', 'Google Maps API'],
    link: 'https://github.com/HamzaAbuAmrea9/AuraStride',
  },
  {
    id: 2,
    type: 'featured',
    title: 'Full-Stack Social Media Website',
    image: socialMediaImg,
    description: 'A feature-rich social media platform with user management, real-time messaging, and notifications. The backend is built on a scalable microservices architecture using Java/Spring Boot, secured with JWT.',
    tags: ['Web App', 'React', 'Spring Boot', 'Microservices', 'JWT', 'MySQL'],
    link: 'https://github.com/HamzaAbuAmrea9/SocialMedia',
  },
  {
    id: 3,
    type: 'featured',
    title: 'E-commerce Platform',
    image: eCommerceImg,
    description: 'A complete e-commerce solution with features like user roles, product and order management. The backend is powered by PHP/Laravel, providing robust APIs for the responsive React frontend.',
    tags: ['E-commerce', 'PHP', 'Laravel', 'React', 'REST API'],
    link: 'https://github.com/HamzaAbuAmrea9/e-commerce_hamza',
  },
  {
    id: 4,
    type: 'collection', // This project is a showcase of learning, no single GitHub link
    title: 'Flutter Learning Projects',
    image: flutterCollectionImg, 
    description: 'A collection of diverse applications built to master core Flutter concepts. This includes a real-time chat app, an e-commerce UI, an expense tracker, a meals app, and projects integrating native device features.',
    tags: ['Learning Journey', 'State Management', 'API Integration', 'UI/UX', 'Firebase', 'Provider'],
  },
];


const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={`${styles.projectsContainer} container`}>
        <h2 className={styles.sectionTitle}>My Projects</h2>
        <p className={styles.sectionSubtitle}>
          A selection of projects where I've applied my skills in real-world and practice scenarios.
        </p>

        {/* --- Unified Projects List --- */}
        <div className={styles.projectsList}>
          {projectsData.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectImageContainer}>
                {/* Image is a link only if a 'link' property exists */}
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img src={project.image} alt={project.title} className={styles.projectImage} />
                  </a>
                ) : (
                  <img src={project.image} alt={project.title} className={styles.projectImage} />
                )}
              </div>
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                {/* --- Conditionally render the GitHub button --- */}
                {project.type === 'featured' && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* --- ACTION: Add link to all projects on GitHub --- */}
        <div className={styles.viewMoreContainer}>
          <a 
            href="https://github.com/HamzaAbuAmrea9" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.ctaButton}
          >
            See All Projects on GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;