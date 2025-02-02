import { styles } from "../../utils/styles";
import { ContactForm } from "../../components";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { rightFadeIn } from "../../utils/animation";

const sectionImg = {
  title: "Contact Section Image",
  src: "images/contact-form.jpg",
};

const FormSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="form_section bg-primary w-full pb-16">
      <div
        className={`${styles.paddingX} flex flex-col gap-16 sm:flex-row lg:px-32`}
      >
        <div className="w-full aspect-[4/3] overflow-hidden sm:basis-1/2">
          <img
            className="w-full h-full object-cover"
            src={sectionImg.src}
            alt={sectionImg.title}
            draggable="false"
            loading="lazy"
            width="1024"
            height="768"
          />
        </div>
        <div className="w-full flex flex-col gap-6 sm:basis-1/2">
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={rightFadeIn}
            className="w-full"
          >
            <p className={styles.supHeading}>Get in touch</p>
            <h2 className={styles.heading2}>What if we collaborate?</h2>
          </motion.div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default FormSection;
