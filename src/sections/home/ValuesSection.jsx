import { styles } from "../../utils/styles";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { leftFadeIn, riseUpFadeIn } from "../../utils/animation";

const sectionImg = {
  title: "Values Section Image",
  src: "images/home-values.jpg",
};

const ValuesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="values__section bg-secondary w-full flex flex-col gap-16 sm:gap-0">
      <div className="flex flex-col sm:flex-row-reverse">
        <div className="w-full sm:w-1/2 aspect-[3/4] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={sectionImg.src}
            alt={sectionImg.title}
            draggable="false"
          />
        </div>
        <div
          className={`${styles.paddingX} flex flex-col py-16 sm:w-1/2 justify-center md:p-16`}
        >
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={leftFadeIn}
            className="w-full">
            <div className="flex items-center">
              <div className={styles.headingBar}></div>
              <p className={styles.supHeading}>Our Values</p>
            </div>
            <h2 className={`${styles.heading2}`}>
              It takes more than just work with camera
            </h2>
          </motion.div>
          <motion.p
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={riseUpFadeIn}
            transition={{ type: 'spring', duration: 1, delay: 1 }}
            className={`${styles.paragraph}`}>
            This is a place where you can find amazing products and services
            that will make your life easier and happier.
          </motion.p>
          <motion.span
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={riseUpFadeIn}
            transition={{ type: 'spring', damping: 10, duration: .5, delay: 1.5 }}
          >
            <Link to="/about">
              <button
                type="button"
                title="About us button"
                className={`${styles.button} hover:bg-white hover:text-primary duration-500`}
              >
                About us
              </button>
            </Link>
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
