import { styles } from "../utils/styles";
import { Hero } from "../components";
import {
  ServicesSection,
  WorksSection,
  TestimonialsSection,
  ValuesSection,
  FeaturesSection,
  TeamSection,
  ContactSection,
} from "../sections/home";

const HomePage = () => {
  return (
    <div className="home_page w-full flex flex-col">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} relative`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <ServicesSection />
          <WorksSection />
          <TestimonialsSection />
          <ValuesSection />
          <FeaturesSection />
          <TeamSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
