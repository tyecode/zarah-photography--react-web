import { styles } from "../../utils/styles";
import { sectionImages } from "../../utils/constants";

const HistorySection = () => {
  return (
    <section className="history__section bg-secondary w-full py-16">
      <div
        className={`${styles.flexCenter} bg-secondary w-full flex flex-col gap-16 sm:flex-row`}
      >
        <div className={`${styles.paddingX} sm:basis-1/2 sm:pr-0`}>
          <div className="w-full aspect-square">
            <img
              className="w-full h-full object-cover"
              src={sectionImages.history.src}
              alt={sectionImages.history.title}
              draggable="false"
            />
          </div>
        </div>

        <div className={`${styles.paddingX} sm:basis-1/2 sm:pl-0`}>
          <div className={`w-full`}>
            <p className={styles.supHeading}>Zarah Photography</p>
            <h2 className={`${styles.heading2}`}>Our History</h2>
          </div>
          <p className={styles.paragraph}>
            We are always looking for new ways to improve our website and our
            services. We welcome your feedback and suggestions, as they help us
            grow and evolve. We also appreciate your support and loyalty, as
            they motivate us to keep doing what we love.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
