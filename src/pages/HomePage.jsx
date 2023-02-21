import { styles } from "../utils/styles";
import { Hero } from "../components";
import {
  Services,
  Works,
  Testimonials,
  Values,
  Features,
  Team,
  Contact,
} from "../sections/home";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} relative`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Services />
          <Works />
          <Testimonials />
          <Values />
          <Features />
          <Team />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
