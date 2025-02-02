import { styles } from "../../utils/styles";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { rightFadeIn, riseUpFadeIn } from "../../utils/animation";

const sectionImg = {
  title: "Works Section Image",
  src: "images/home-works.jpg",
};

const images = [
  {
    id: "coffee day",
    title: "Coffee Day",
    src: "images/home-works-coffee_day.jpg",
  },
  {
    id: "dark addiction",
    title: "Dark Addiction",
    src: "images/home-works-dark_addiction.jpg",
  },
  {
    id: "life details",
    title: "Life Details",
    src: "images/home-works-life_details.jpg",
  },
  {
    id: "green story",
    title: "Green Story",
    src: "images/home-works-green_story.jpg",
  },
];

const WorksSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="works__section bg-secondary w-full flex flex-col gap-16 sm:gap-0">
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
              <p className={styles.supHeading}>Our Works</p>
            </div>
            <h2 className={`${styles.heading2}`}>Stand Out Your Lifestyle</h2>
          </motion.div>
          <motion.p
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={riseUpFadeIn}
            transition={{ type: "spring", duration: 2, delay: 1 }}
            className={`${styles.paragraph}`}
          >
            We are proud to showcase some of our works that demonstrate our
            skills and expertise in various fields and industries. We have
            completed hundreds of projects for clients from different sectors
            and backgrounds, delivering high-quality results that exceed their
            expectations. Here are some examples of our works that you can
            browse and explore.
          </motion.p>
        </div>
      </div>
      <div className="flex flex-col ss:flex-row flex-wrap md:flex-nowrap cursor-pointer">
        {images.map((img, index) => (
          <div
            key={index}
            className="group w-full ss:w-1/2 aspect-[4/3] relative overflow-hidden"
          >
            <img
              className="w-full h-full object-cover group-hover:scale-110 duration-300"
              src={img.src}
              alt={img.id}
              draggable="false"
              loading="lazy"
              width="400"
              height="300"
            />
            <div className="w-full h-full bg-gradient-to-t from-black absolute top-0 opacity-0 hover:opacity-100 duration-300 flex items-end">
              <span className="text-white font-playfair text-[26px] m-10">
                {img.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksSection;
