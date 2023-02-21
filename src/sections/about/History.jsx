import { styles } from "../../utils/styles";
import { sectionImages } from "../../utils/constants";

const History = () => {
  return (
    <section className="bg-primary w-full">
      <div
        className={`${styles.flexCenter} bg-secondary w-full py-16 flex flex-col gap-16 sm:flex-row`}
      >
        <div className={`${styles.paddingX} mt-16 sm:mt-0 sm:pr-0`}>
          <div className="w-full aspect-square">
            <img
              className="w-full h-full object-cover"
              src={sectionImages.history.src}
              alt={sectionImages.history.title}
            />
          </div>
        </div>

        <div className={`${styles.paddingX} sm:pl-0 sm:w-[100%]`}>
          <div className={`w-full`}>
            <div className="flex items-center">
              <p className={styles.supHeading}>Zarah Photography</p>
            </div>
            <h2 className={`${styles.heading2}`}>Our History</h2>
          </div>
          <p className={styles.paragraph}>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
