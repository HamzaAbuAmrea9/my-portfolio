import styles from './Testimonials.module.css';

// --- Import Swiper React components ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// --- Import Swiper styles ---
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// --- ACTION: IMPORT YOUR CERTIFICATE IMAGES HERE ---
// Make sure you have converted PDFs to PNG or JPG and placed them in the assets folder.
import certAws from '../../assets/images/cert-aws.png';
import certFlutter from '../../assets/images/cert-flutter-udemy.png';
import certGit from '../../assets/images/cert-git-udemy.png';
import certJava from '../../assets/images/cert-java-hackerrank.png';
import certJs from '../../assets/images/cert-js-hackerrank.png';
import certProblemSolving from '../../assets/images/cert-problemsolving-hackerrank.png';
import certRestApi from '../../assets/images/cert-restapi-hackerrank.png';
import certTailwind from '../../assets/images/cert-tailwind-udemy.png';
import certCss from '../../assets/images/cert-css-hackerrank.png';
import certReact from '../../assets/images/cert-react-hackerrank.png'; // Assuming you have a React certificate image

// --- Array of your certificates ---
const certificationsData = [
  { id: 1, title: 'AWS Cloud Intern', image: certAws, source: 'Gaza Sky Geeks' },
  { id: 2, title: 'Java (Basic)', image: certJava, source: 'HackerRank' },
  { id: 3, title: 'JavaScript (Intermediate)', image: certJs, source: 'HackerRank' },
  { id: 4, title: 'Problem Solving (Intermediate)', image: certProblemSolving, source: 'HackerRank' },
  { id: 5, title: 'REST API (Intermediate)', image: certRestApi, source: 'HackerRank' },
  { id: 6, title: 'The Complete Flutter Development Bootcamp', image: certFlutter, source: 'Udemy' },
  { id: 7, title: 'Tailwind CSS From Scratch', image: certTailwind, source: 'Udemy' },
  { id: 8, title: 'Git & GitHub Bootcamp', image: certGit, source: 'Udemy' },
  { id: 9, title: 'CSS', image: certCss, source: 'HackerRank' },
  { id: 10, title: 'React js', image: certReact, source: 'HackerRank' },
];


const Testimonials = () => {
  return (
    // Make sure the section ID is updated to 'certifications'
    <section id="certifications" className={styles.certificationsSection}>
      <div className={`${styles.certificationsContainer} container`}>
        <h2 className={styles.sectionTitle}>Certifications & Achievements</h2>
        <p className={styles.sectionSubtitle}>
          I am committed to continuous learning and professional development. Here are some of the certifications I've earned.
        </p>

        <div className={styles.sliderContainer}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            // Responsive breakpoints
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 2,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 3,
              },
            }}
            className={styles.mySwiper}
          >
            {certificationsData.map((cert) => (
              <SwiperSlide key={cert.id} className={styles.swiperSlide}>
                <div className={styles.certificateCard}>
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className={styles.certificateImage}
                  />
                  <div className={styles.certificateInfo}>
                    <h4 className={styles.certificateTitle}>{cert.title}</h4>
                    <p className={styles.certificateSource}>{cert.source}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;