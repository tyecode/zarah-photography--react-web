import { styles } from "../../utils/styles";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { rightFadeIn, riseUpFadeIn } from "../../utils/animation";

const sectionImg = {
  title: "Contact Section Image",
  src: "images/home-contact.jpg",
};

const scaleMotion = {
  hidden: {
    scaleX: 0,
  },
  visible: {
    scaleX: 1,
  }
}

const ContactSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="contact__section bg-secondary w-full flex flex-col gap-16 sm:gap-0">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 aspect-[3/4] overflow-hidden relative">
          <img
            className="w-full h-full object-cover"
            src={sectionImg.src}
            alt={sectionImg.title}
            draggable="false"
          />
          <div
            className="absolute top-0 w-full h-full flex flex-col justify-center items-center p-4 gap-5">
            <motion.p
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={riseUpFadeIn}
              transition={{ type: 'spring', damping: 10, duration: .5, delay: .5 }}
              className="text-white font-poppins font-light text-[12px] tracking-[.15rem] uppercase text-center">
              Need a Lifestyle Photographer?
            </motion.p>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={scaleMotion}
              transition={{ duration: 1, delay: 1 }}
              className="w-full h-[1px] bg-white"></motion.div>
            <motion.h2
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={riseUpFadeIn}
              transition={{ type: 'spring', damping: 10, duration: 1, delay: 1.4 }}
              className={`${styles.heading2} text-center w-full p-4 mb-0 pb-0`}
            >
              Someone to Collaborate With?
            </motion.h2>
          </div>
        </div>
        <div
          className={`${styles.paddingX} flex flex-col py-16 sm:w-1/2 justify-center md:p-16`}
        >
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={rightFadeIn}
            className="w-full">
            <div className="flex items-center">
              <div className={styles.headingBar}></div>
              <p className={styles.supHeading}>Contact</p>
            </div>
            <h2 className={`${styles.heading2}`}>Get In Touch</h2>
          </motion.div>
          <motion.p
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={riseUpFadeIn}
            transition={{ type: 'spring', duration: 1, delay: 1.2 }}
            className={styles.paragraph}>
            This is a place where you can find amazing products and services
            that will make your life easier and happier. Whether you are looking
            for a new gadget, a gift for someone special, or a solution to a
            problem, we have what you need.
          </motion.p>
          <motion.span
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={riseUpFadeIn}
            transition={{ type: 'spring', damping: 10, duration: .5, delay: 1.7 }}
          >
            <Link to="/contact">
              <button
                type="button"
                title="Contact us button"
                className={`${styles.button} hover:bg-white hover:text-primary duration-500`}
              >
                Contact us
              </button>
            </Link>
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
