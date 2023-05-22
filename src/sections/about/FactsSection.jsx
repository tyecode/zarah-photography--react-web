import { styles } from "../../utils/styles";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { riseUpFadeIn } from "../../utils/animation";

const FactsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      className={`facts__section bg-about-facts w-full py-16 ${styles.fixedBackground} relative z-[2]`}
    >
      <div className="w-full h-full absolute top-0 bg-black opacity-40 z-[-1]"></div>
      <div
        className={`${styles.paddingX} w-full flex flex-col gap-6 md:gap-16 md:flex-row-reverse md:p-16`}
      >
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={riseUpFadeIn}
          transition={{ type: 'spring', duration: 1, delay: .9 }}
          className="flex flex-col text-center md:text-left">
          <h3 className={`${styles.heading3}`}>Projects</h3>
          <span className="text-white text-[6rem] font-playfair leading-none">
            125
          </span>
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={riseUpFadeIn}
          transition={{ type: 'spring', duration: 1, delay: .7 }}
          className="flex flex-col text-center md:text-left">
          <h3 className={`${styles.heading3}`}>Values</h3>
          <span className={`${styles.paragraph} xs:px-12 md:px-0`}>
            We are a team of passionate and creative people who love what we do.
            We started this website with a simple vision: to provide
            high-quality products and services that make a difference in
            people's lives.
          </span>
        </motion.div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={riseUpFadeIn}
          transition={{ type: 'spring', duration: 1, delay: .5 }}
          className="flex flex-col text-center md:text-left">
          <h3 className={`${styles.heading3}`}>Missions</h3>
          <span className={`${styles.paragraph} xs:px-12 md:px-0`}>
            We believe that everyone deserves to have access to the best things
            in life, no matter where they live or what their budget is. That's
            why we work hard to source and select only the finest products and
            services from around the world.
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default FactsSection;
