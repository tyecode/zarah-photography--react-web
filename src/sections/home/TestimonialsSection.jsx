import { styles } from "../../utils/styles";
import { useRef, useEffect, useState } from "react";
import { clients } from "../../utils/constants";
import { register } from "swiper/element";

register();

const TestimonialsSection = () => {
  const swiperElRef = useRef(null);
  const [breakpoints, setBreakpoints] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    swiperElRef.current.swiper.slideTo(0);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;

    width < 620 ? setBreakpoints(1) : setBreakpoints(2);
  };

  return (
    <section className="testimonials__section bg-primary w-full flex py-16">
      <div
        className={`${styles.paddingX} w-full flex flex-col md:flex-row gap-6`}
      >
        <div className="w-full md:w-1/3">
          <div className="flex items-center md:mt-8">
            <div className={styles.headingBar}></div>
            <p className={styles.supHeading}>Testimonials</p>
          </div>
          <h2 className={`${styles.heading2}`}>Clients Say</h2>
        </div>

        <div className="w-full md:w-2/3">
          <swiper-container
            ref={swiperElRef}
            slides-per-view={breakpoints}
            space-between={60}
            speed={1500}
            loop={true}
            autoplay-delay={5000}
          >
            {clients.map((clients) => (
              <swiper-slide key={clients.id}>
                <div className="w-full flex flex-col py-4">
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
                      />
                    </div>
                    <h3 className={styles.heading3}>{clients.name}</h3>
                  </div>
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
