import { Link } from "react-router-dom";

import { styles } from "../../utils/styles";
import { sectionImages } from "../../utils/constants";

const ValuesSection = () => {
  return (
    <section className="values__section bg-secondary w-full flex flex-col gap-16 sm:gap-0">
      <div className="flex flex-col sm:flex-row-reverse">
        <div className="w-full sm:w-1/2 aspect-[3/4] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={sectionImages.values.src}
            alt={sectionImages.values.title}
            draggable="false"
          />
        </div>
        <div
          className={`${styles.paddingX} flex flex-col py-16 sm:w-1/2 justify-center md:p-16`}
        >
          <div className="w-full">
            <div className="flex items-center">
              <div className={styles.headingBar}></div>
              <p className={styles.supHeading}>Our Values</p>
            </div>
            <h2 className={`${styles.heading2}`}>
              It takes more than just work with camera
            </h2>
          </div>
          <p className={`${styles.paragraph}`}>
            This is a place where you can find amazing products and services
            that will make your life easier and happier.
          </p>
          <Link to="/about">
            <button
              type="button"
              title="About us button"
              className={`${styles.button} hover:bg-white hover:text-primary duration-500`}
            >
              About us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
