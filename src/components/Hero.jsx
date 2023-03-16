import { styles } from "../utils/styles";
import { register } from "swiper/element";

register();

export const slideImages = [
  {
    id: "slide1",
    title: "Slide Image 1",
    src: "images/Hero/slide-1.jpg",
    caption: "Welcome to Zarah Photography",
  },
  {
    id: "slide2",
    title: "Slide Image 2",
    src: "images/Hero/slide-2.jpg",
    caption: "We create stunning photos that last forever",
  },
  {
    id: "slide3",
    title: "Slide Image 3",
    src: "images/Hero/slide-3.jpg",
    caption: "Capture your precious moments with us",
  },
  {
    id: "slide4",
    title: "Slide Image 4",
    src: "images/Hero/slide-4.jpg",
    caption: "Let us tell your story through photos",
  },
];

const Hero = () => {
  return (
    <header className="hero bg-primary w-full h-screen">
      <swiper-container
        slides-per-view={1}
        speed={3000}
        loop={true}
        autoplay-delay={7000}
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
              <div className="w-full h-full bg-black opacity-50 absolute top-0"></div>
              <h1
                className={`${styles.heading1} ${styles.paddingX} absolute max-w-[980px] mx-6 sm:mx-20`}
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
