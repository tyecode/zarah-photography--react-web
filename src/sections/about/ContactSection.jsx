import { styles } from "../../utils/styles";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { riseUpFadeIn, rightFadeIn } from "../../utils/animation";

const ContactSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      className={`contact__section w-full bg-about-contact ${styles.fixedBackground} py-16 md:py-32 relative z-[2]`}
    >
      <div className="w-full h-full absolute top-0 bg-black opacity-30 z-[-1]"></div>
      <div
        className={`${styles.paddingX} ${styles.flexCenter} text-center flex-col gap-6 md:gap-16 md:flex-row`}
      >
        <motion.h4
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={riseUpFadeIn}
          transition={{ type: "spring", duration: 1, delay: 1 }}
          className={`${styles.heading4} md:w-4/6`}
        >
          Need a <span className="italic text-[22px]">Photographer</span> ?
          Someone With Experience to{" "}
          <span className="italic text-[22px] sm:text-[24px] md:text-[26px]">
            Collaborate
          </span>{" "}
          With?
        </motion.h4>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={rightFadeIn}
        >
          <Link to="/contact">
            <button
              type="button"
              title="Contact us"
              className={`${styles.button} border-none group relative py-5`}
            >
              <span className="tracking-[.2rem] px-3">Let's Work!</span>
              <div className="absolute top-0 bottom-0 right-0 w-1/4 border-t-2 group-hover:w-5/6 duration-500"></div>
              <div className="absolute top-0 bottom-0 left-0 w-1/4 border-b-2 group-hover:w-5/6 duration-500"></div>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
