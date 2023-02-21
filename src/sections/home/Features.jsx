import { styles } from "../../utils/styles";
import { sectionImages } from "../../utils/constants";

const Features = () => {
  return (
    <section className="bg-secondary w-full flex flex-col gap-16 sm:gap-0">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 aspect-[3/4] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={sectionImages.features.src}
            alt={sectionImages.features.title}
          />
        </div>
        <div
          className={`${styles.paddingX} flex flex-col py-16 sm:w-1/2 justify-center md:p-16`}
        >
          <div className="w-full">
            <div className="flex items-center">
              <div className={styles.headingBar}></div>
              <p className={styles.supHeading}>Our Features</p>
            </div>
            <h2 className={`${styles.heading2}`}>Get Close to Our Offers</h2>
          </div>

          <div className="w-full">
            <div className="flex max-w-[350px]">
              <span className="text-white font-mulish text-[42px] font-light px-6 pt-2">
                01.
              </span>
              <h3 className={styles.heading3}>
                Full-day photo shoots and sessions
              </h3>
            </div>
            <div className="flex max-w-[350px]">
              <span className="text-white font-mulish text-[42px] font-light px-6 pt-2">
                02.
              </span>
              <h3 className={styles.heading3}>
                Professional camera and best lens kits
              </h3>
            </div>
            <div className="flex max-w-[350px]">
              <span className="text-white font-mulish text-[42px] font-light px-6 pt-2">
                03.
              </span>
              <h3 className={styles.heading3}>
                Photo editing, color and retouching
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
