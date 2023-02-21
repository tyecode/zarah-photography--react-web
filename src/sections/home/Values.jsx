import { styles } from "../../utils/styles";
import { sectionImages } from "../../utils/constants";

const Values = () => {
  return (
    <section className="bg-secondary w-full flex flex-col gap-16 sm:gap-0">
      <div className="flex flex-col sm:flex-row-reverse">
        <div className="w-full sm:w-1/2 aspect-[3/4] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={sectionImages.values.src}
            alt={sectionImages.values.title}
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
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart.
          </p>
          <button type="button" className={styles.button}>
            About us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Values;
