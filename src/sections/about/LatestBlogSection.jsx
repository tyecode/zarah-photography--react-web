import { useRef, useEffect, useState } from "react";

import { OurBlog } from "../../utils/constants";
import { styles } from "../../utils/styles";
import { register } from "swiper/element/bundle";

register();

const LatestBlogSection = () => {
  const swiperElRef = useRef(null);
  const [breakpoints, setBreakpoints] = useState(0);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    swiperElRef.current.swiper.slideTo(0);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;

    if (width < 620) {
      setBreakpoints(1);
    } else if (width < 1060) {
      setBreakpoints(2);
    } else {
      setBreakpoints(3);
    }
  };

  return (
    <section className="latest-blog__section bg-primary w-full py-16 flex flex-col gap-12">
      <div className={`${styles.paddingX}`}>
        <div className={`${styles.flexCenter} text-center mb-12`}>
          <div className="bg-gray-500 grow h-[1px] hidden ss:block"></div>
          <h2 className={`${styles.heading3} ss:px-12`}>
            Latest Threads from Our Blog
          </h2>
          <div className="bg-gray-500 grow h-[1px] hidden ss:block"></div>
        </div>

        <swiper-container
          ref={swiperElRef}
          slides-per-view={breakpoints}
          space-between={30}
          speed={1500}
          loop={true}
          autoplay-delay={5000}
        >
          {OurBlog.map((blog) => (
            <swiper-slide key={blog.id}>
              <div className="w-full aspect-square overflow-hidden cursor-pointer relative group">
                <img
                  src={blog.src}
                  alt={blog.id}
                  draggable="false"
                  className="w-full h-full object-cover"
                />
                <div className="w-full h-1/2 bg-gradient-to-t from-black absolute bottom-0 group-hover:opacity-0 opacity-70 duration-500"></div>
                <div className="w-full absolute bottom-0 px-8">
                  <span className={`${styles.categoryTag}`}>
                    {blog.category}
                  </span>
                  <h3
                    className={`text-white ${styles.heading3} w-full h-[4rem] line-clamp-2`}
                  >
                    {blog.article}
                  </h3>
                </div>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    </section>
  );
};

export default LatestBlogSection;
