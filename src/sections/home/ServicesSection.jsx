import { styles } from "../../utils/styles";
import { TfiCamera } from "react-icons/tfi";
import { BiPhotoAlbum } from "react-icons/bi";
import { MdOutlineCameraRoll, MdOutlineHomeWork } from "react-icons/md";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { leftFadeIn, riseUpFadeIn } from "../../utils/animation";

const ServicesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="services__section bg-primary w-full py-16">
      <div className={`${styles.paddingX} md:flex gap-16`}>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={leftFadeIn}
          className="w-full md:basis-1/3">
          <div className="flex items-center md:mt-8">
            <div className={styles.headingBar}></div>
            <p className={styles.supHeading}>Our Services</p>
          </div>
          <h2 className={`${styles.heading2}`}>
            A lifestyle photography tells a story
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 sm:gap-x-16 md:basis-2/3">
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={riseUpFadeIn}
            transition={{ type: 'spring', damping: 10, duration: 1, delay: .8 }}
            className="flex gap-8 sm:basis-1/2 my-4">
            <i className="mt-4">
              <TfiCamera color="#fff" size={50} />
            </i>
            <div className="flex flex-col">
              <h3 className={styles.heading3}>Extensive Equipment</h3>
              <p className={styles.paragraph}>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={riseUpFadeIn}
            transition={{ type: 'spring', damping: 10, duration: 1, delay: 1.3 }}
            className="flex gap-8 sm:basis-1/2 my-4">
            <i className="mt-4">
              <MdOutlineCameraRoll color="#fff" size={50} />
            </i>
            <div className="flex flex-col">
              <h3 className={styles.heading3}>Long Hour Shoots</h3>
              <p className={styles.paragraph}>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={riseUpFadeIn}
            transition={{ type: 'spring', damping: 10, duration: 1, delay: 1.8 }}
            className="flex gap-8 sm:basis-1/2 my-4">
            <i className="mt-4">
              <MdOutlineHomeWork color="#fff" size={50} />
            </i>
            <div className="flex flex-col">
              <h3 className={styles.heading3}>Studio Sessions</h3>
              <p className={styles.paragraph}>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={riseUpFadeIn}
            transition={{ type: 'spring', damping: 10, duration: 1, delay: 2.3 }}
            className="flex gap-8 sm:basis-1/2 my-4">
            <i className="mt-4">
              <BiPhotoAlbum color="#fff" size={50} />
            </i>
            <div className="flex flex-col">
              <h3 className={styles.heading3}>Professional Editing</h3>
              <p className={styles.paragraph}>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
