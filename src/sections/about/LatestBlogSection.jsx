import { styles } from "../../utils/styles";
import { useRef, useEffect, useState } from "react";
import { register } from "swiper/element/bundle";
import { BlogContent } from "../blog/BlogSection";
import { BlogCard } from "../../components";

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

    if (width < 768) {
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
          space-between={24}
          speed={1500}
          loop={true}
          autoplay-delay={5000}
        >
          {BlogContent.slice(0)
            .reverse()
            .slice(0, 6)
            .map((blog) => (
              <swiper-slide key={blog.id}>
                <BlogCard
                  id={blog.id}
                  src={blog.src}
                  article={blog.article}
                  category={blog.category}
                  content={blog.content}
                />
              </swiper-slide>
            ))}
        </swiper-container>
      </div>
    </section>
  );
};

export default LatestBlogSection;
