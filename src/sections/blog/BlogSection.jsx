import { styles } from "../../utils/styles";
import { BlogCard } from "../../components";

export const BlogContent = [
  {
    id: "blog1",
    article: "How to Choose the Best Camera for Your Photography Style",
    category: "Tips/Tricks",
    src: "blog/blog-1.jpg",
    content:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
  {
    id: "blog2",
    article: "How to Take Great Close-Up Shots",
    category: "Tips/Tricks",
    src: "blog/blog-2.jpg",
    content:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
  {
    id: "blog3",
    article: "10 Amazing Photography Tips from Professional Photographers",
    category: "Tips/Tricks",
    src: "blog/blog-3.jpg",
    content:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
  {
    id: "blog4",
    article: "The Ultimate Guide to Editing Your Photos with Photoshop",
    category: "Inspiration/Trends",
    src: "blog/blog-4.jpg",
    content:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
  {
    id: "blog5",
    article: "5 Common Photography Mistakes and How to Avoid Them",
    category: " Tips/Tricks",
    src: "blog/blog-5.jpg",
    content:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
  {
    id: "blog6",
    article: "The Best Photography Locations in the World",
    category: "Inspiration/Trends",
    src: "blog/blog-6.jpg",
    content:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
  {
    id: "blog7",
    article: "How to Capture Stunning Photos of the Night Sky",
    category: " Tips/Tricks",
    src: "blog/blog-7.jpg",
    content:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
  {
    id: "blog8",
    article: "How to Use Lightroom to Enhance Your Photos",
    category: " Tips/Tricks",
    src: "blog/blog-8.jpg",
    content:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
  {
    id: "blog9",
    article: "The Top Photography Trends for 2023",
    category: "Inspiration/Trends",
    src: "blog/blog-9.jpg",
    content:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
  {
    id: "blog10",
    article: "The Difference Between DSLR and Mirrorless Cameras",
    category: "Tips/Tricks",
    src: "blog/blog-10.jpg",
    content:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
  {
    id: "blog11",
    article: "The Best Apps for Editing Photos on Your Phone",
    category: "Inspiration/Trends",
    src: "blog/blog-11.jpg",
    content:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
  {
    id: "blog12",
    article: "The Benefits of Using a Tripod for Your Photography",
    category: "Tips/Tricks",
    src: "blog/blog-12.jpg",
    content:
      "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-primary w-full py-16">
      <div className={styles.paddingX}>
        <div className={`${styles.flexCenter} text-center mb-12`}>
          <div className="bg-gray-500 grow h-[1px] hidden sm:block"></div>
          <h2 className={`${styles.heading3} ss:px-12`}>
            Capturing Moments with Your Style
          </h2>
          <div className="bg-gray-500 grow h-[1px] hidden sm:block"></div>
        </div>
      </div>

      <div
        className={`${styles.paddingX} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6`}
      >
        {BlogContent.slice(0)
          .reverse()
          .map((blog, index) => (
            <BlogCard
              key={index}
              id={blog.id}
              src={blog.src}
              article={blog.article}
              category={blog.category}
              content={blog.content}
            />
          ))}
      </div>
    </section>
  );
};

export default BlogSection;
