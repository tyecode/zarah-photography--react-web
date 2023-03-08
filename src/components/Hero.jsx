import { styles } from "../utils/styles";
import { slideImages } from "../utils/constants";
import { register } from "swiper/element";

register();

const Hero = () => {
  return (
    <header className="hero bg-primary w-full h-screen">
      <swiper-container
        slides-per-view={1}
        speed={1500}
        loop={true}
        autoplay-delay={5000}
      >
        {slideImages.map((slide) => (
          <swiper-slide key={slide.id}>
            <div
              className={`w-full h-screen overflow-hidden relative ${styles.flexCenter}`}
            >
              <img
                src={slide.src}
                alt={slide.title}
                draggable="false"
                className="w-full h-full object-cover"
              />
              <div className="w-full h-full bg-black opacity-40 absolute top-0"></div>
              <h1
                className={`${styles.heading1} ${styles.paddingX} absolute xs:mx-6 sm:mx-16`}
              >
                {slide.caption}
              </h1>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </header>
  );
};

export default Hero;
