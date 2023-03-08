import { styles } from "../utils/styles";
import { Header } from "../components";
import {
  ContentSection,
  FormSection,
  DetailsSection,
} from "../sections/contact";

const ContactPage = () => {
  return (
    <div className="contact__page w-full flex flex-col">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Header
            title="Contact Us"
            link="/contact"
            background="bg-contactHeader"
          />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <ContentSection />
          <FormSection />
          <DetailsSection />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
