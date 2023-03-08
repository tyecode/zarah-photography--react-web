import { styles } from "../utils/styles";
import { Header } from "../components";
import {
  HistorySection,
  TeamSection,
  QualificationsSection,
  FactsSection,
  LatestBlogSection,
  ContactSection,
} from "../sections/about";

const AboutPage = () => {
  return (
    <div className="about__page w-full flex flex-col">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Header title="About Us" link="/about" background="bg-aboutHeader" />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <HistorySection />
          <TeamSection />
          <QualificationsSection />
          <FactsSection />
          <LatestBlogSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
