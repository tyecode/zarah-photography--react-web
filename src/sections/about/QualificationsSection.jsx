import { styles } from "../../utils/styles";
import { progressBar } from "../../utils/constants";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { leftFadeIn, riseUpFadeIn } from "../../utils/animation";

const QualificationsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="qualifications__section bg-secondary w-full py-16">
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-16">
        <div className={`${styles.paddingX} basis-5/12 sm:pr-0 py`}>
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={leftFadeIn}
            className="w-full"
          >
            <p className={styles.supHeading}>Qualifications</p>
            <h2 className={`${styles.heading2}`}>Our Proficiency</h2>
          </motion.div>
          <motion.p
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={riseUpFadeIn}
            transition={{ type: "spring", duration: 1, delay: 1 }}
            className={styles.paragraph}
          >
            We are a team of passionate and creative people who love what we do.
            We started this website with a simple vision: to provide
            high-quality products and services that make a difference in
            people's lives.
          </motion.p>
        </div>
        <div className={`${styles.paddingX} sm:pl-0 grow py-6`}>
          <div className="flex flex-col gap-10">
            {progressBar.map((progression, index) => (
              <motion.div
                ref={ref}
                animate={controls}
                initial="hidden"
                variants={riseUpFadeIn}
                transition={{
                  type: "spring",
                  damping: 10,
                  duration: 0.5,
                  delay: 1.5 + index / 3,
                }}
                key={progression.id}
                className="flex flex-col w-full gap-1"
              >
                <h3 className={styles.heading3}>{progression.title}</h3>
                <div className="w-full h-[4px] bg-gray-700">
                  <div
                    className="bg-white h-full relative"
                    style={{ width: progression.progress + "%" }}
                  >
                    <span className="text-white font-poppins text-[13px] absolute right-[-1rem] bottom-[-2rem] opacity-80 font-extralight">
                      {progression.progress + "%"}
                    </span>
                    <div className="bg-white w-[14px] aspect-square rounded-full absolute right-[-7px] top-1/2 translate-y-[-50%]"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;
