import { styles } from "../../utils/styles";
import { useRef, useEffect, useState } from "react";
import { clients } from "../../utils/constants";
import { register } from "swiper/element";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { leftFadeIn, riseUpFadeIn } from "../../utils/animation";

register();

const TestimonialsSection = () => {
  const swiperElRef = useRef(null);
  const [breakpoints, setBreakpoints] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    swiperElRef.current.swiper.slideTo(0);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const updateDimensions = () => {
    const width = window.innerWidth;

    width < 620 ? setBreakpoints(1) : setBreakpoints(2);
  };

  return (
    <section className="testimonials__section bg-primary w-full flex py-16">
      <div
        className={`${styles.paddingX} w-full flex flex-col md:flex-row gap-6`}
      >
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={leftFadeIn}
          className="w-full md:w-1/3"
        >
          <div className="flex items-center md:mt-8">
            <div className={styles.headingBar}></div>
            <p className={styles.supHeading}>Testimonials</p>
          </div>
          <h2 className={`${styles.heading2}`}>Clients Say</h2>
        </motion.div>

        <div className="w-full md:w-2/3">
          <swiper-container
            ref={swiperElRef}
            slides-per-view={breakpoints}
            space-between={60}
            speed={1500}
            loop={true}
            autoplay-delay={5000}
          >
            {clients.map((clients, index) => (
              <swiper-slide key={clients.id}>
                <motion.div
                  ref={ref}
                  animate={controls}
                  initial="hidden"
                  variants={riseUpFadeIn}
                  transition={{
                    type: "spring",
                    duration: 1,
                    delay: 0.2 + index / 2,
                  }}
                  className="w-full flex flex-col py-4"
                >
                  <div className="flex flex-col relative">
                    <div className="text-white text-[40px] font-playfair leading-8 absolute top-0 left-0">
                      “
                    </div>
                    <p className="text-white font-poppins text-[13px] font-extralight leading-8 indent-8 py-6">
                      {clients.comment}
                    </p>
                    <div className="text-white text-[40px] font-playfair leading-8 absolute bottom-0 right-0">
                      ”
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 items-center">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img
                        src={clients.image}
                        alt={clients.name}
                        className="w-full h-full object-cover"
                        draggable="false"
                        loading="lazy"
                        width="64"
                        height="64"
                      />
                    </div>
                    <h3 className={styles.heading3}>{clients.name}</h3>
                  </div>
                </motion.div>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
