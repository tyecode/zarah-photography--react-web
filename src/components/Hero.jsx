import { styles } from "../utils/styles";
import { slideImages } from "../utils/constants";

const Hero = () => {
  return (
    <section className="w-full h-screen relative">
      <div
        className="carousel slide relative w-full h-full"
        id="carouselExampleCaptions"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner relative w-full h-full overflow-hidden">
          {slideImages.map((slide, index) => (
            <div
              key={slide.id}
              className={`${
                index == 0 ? "active" : ""
              } carousel-item relative float-left w-full h-full`}
            >
              <div className="w-full h-full absolute bg-black opacity-40"></div>
              <img
                className="block w-full h-full object-cover"
                draggable="false"
                src={slide.src}
                alt={slide.title}
              />
              <div
                className={`carousel-caption ${styles.absoluteCenter} ${styles.flexCenter} w-full`}
              >
                <h5 className={`${styles.heading1} w-full px-10 ss:px-20 sm:px-40 md:px-60`}>
                  {slide.caption}
                </h5>
              </div>
            </div>
          ))}
        </div>
        <button
          className={`carousel-control-prev ${styles.carouselArrowStyle} left-0 ${styles.carouselArrowOutline}`}
        >
          <span
            className={`carousel-control-prev-icon ${styles.carouselArrowIcon}`}
            aria-hidden="true"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          ></span>
        </button>
        <button
          className={`carousel-control-next ${styles.carouselArrowStyle} right-0 ${styles.carouselArrowOutline}`}
        >
          <span
            className={`carousel-control-next-icon ${styles.carouselArrowIcon}`}
            aria-hidden="true"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          ></span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
