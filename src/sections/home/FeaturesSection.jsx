import { styles } from "../../utils/styles";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { rightFadeIn, riseUpFadeIn } from "../../utils/animation";

const sectionImg = {
  title: "Features Section Image",
  src: "images/home-features.jpg",
};

const FeaturesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="features__section bg-secondary w-full flex flex-col gap-16 sm:gap-0">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 aspect-[3/4] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={sectionImg.src}
            alt={sectionImg.title}
            draggable="false"
            loading="lazy"
            width="960"
            height="1280"
          />
        </div>
        <div
          className={`${styles.paddingX} flex flex-col py-16 sm:w-1/2 justify-center md:p-16`}
        >
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={rightFadeIn}
            className="w-full"
          >
            <div className="flex items-center">
              <div className={styles.headingBar}></div>
              <p className={styles.supHeading}>Our Features</p>
            </div>
            <h2 className={`${styles.heading2}`}>Get Close to Our Offers</h2>
          </motion.div>

          <div className="w-full">
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={riseUpFadeIn}
              transition={{
                type: "spring",
                damping: 10,
                duration: 0.5,
                delay: 1,
              }}
              className="flex max-w-[350px]"
            >
              <span className="text-white font-mulish text-[42px] font-light px-6 pt-2">
                01.
              </span>
              <h3 className={styles.heading3}>
                Full-day photo shoots and sessions
              </h3>
            </motion.div>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={riseUpFadeIn}
              transition={{
                type: "spring",
                damping: 10,
                duration: 0.5,
                delay: 1.3,
              }}
              className="flex max-w-[350px]"
            >
              <span className="text-white font-mulish text-[42px] font-light px-6 pt-2">
                02.
              </span>
              <h3 className={styles.heading3}>
                Professional camera and best lens kits
              </h3>
            </motion.div>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={riseUpFadeIn}
              transition={{
                type: "spring",
                damping: 10,
                duration: 0.5,
                delay: 1.6,
              }}
              className="flex max-w-[350px]"
            >
              <span className="text-white font-mulish text-[42px] font-light px-6 pt-2">
                03.
              </span>
              <h3 className={styles.heading3}>
                Photo editing, color and retouching
              </h3>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
