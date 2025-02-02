import { styles } from "../../utils/styles";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { leftFadeIn, riseUpFadeIn } from "../../utils/animation";

const ContentSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="content__section bg-primary w-full py-16">
      <div
        className={`${styles.paddingX} flex flex-col sm:flex-row sm:gap-16 items-center`}
      >
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={leftFadeIn}
          className="w-full py-6 sm:basis-1/2 sm:text-center md:px-6 lg:px-16"
        >
          <p className={styles.supHeading}>Stay Connected</p>
          <h2 className={styles.heading2}>
            I would be happy to help if you you have a question, a project.
          </h2>
        </motion.div>
        <motion.p
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={riseUpFadeIn}
          transition={{ type: "spring", duration: 1, delay: 1 }}
          className={`${styles.paragraph} sm:basis-1/2 md:px-6 lg:px-16`}
        >
          We are always ready to help you with your photography needs. Whether
          you want to book a session, request a quote, or ask a question, you
          can contact us using the form below or send us a message on social
          media. We will respond to you as soon as we can.
        </motion.p>
      </div>
    </section>
  );
};

export default ContentSection;
