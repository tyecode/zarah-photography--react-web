import { styles } from "../../utils/styles";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { rightFadeIn, riseUpFadeIn } from "../../utils/animation";

const sectionImg = {
  title: "History Section Image",
  src: "images/about-history.jpg",
};

const HistorySection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="history__section bg-secondary w-full py-16">
      <div
        className={`${styles.flexCenter} bg-secondary w-full flex flex-col gap-16 sm:flex-row`}
      >
        <div className={`${styles.paddingX} sm:basis-1/2 sm:pr-0`}>
          <div className="w-full aspect-square">
            <img
              className="w-full h-full object-cover"
              src={sectionImg.src}
              alt={sectionImg.title}
              draggable="false"
            />
          </div>
        </div>

        <div className={`${styles.paddingX} sm:basis-1/2 sm:pl-0`}>
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={rightFadeIn}
            className={`w-full`}>
            <p className={styles.supHeading}>Zarah Photography</p>
            <h2 className={`${styles.heading2}`}>Our History</h2>
          </motion.div>
          <motion.p
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={riseUpFadeIn}
            transition={{ type: 'spring', duration: 1, delay: 1 }}
            className={styles.paragraph}>
            We are always looking for new ways to improve our website and our
            services. We welcome your feedback and suggestions, as they help us
            grow and evolve. We also appreciate your support and loyalty, as
            they motivate us to keep doing what we love.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
