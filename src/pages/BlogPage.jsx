import { styles } from "../utils/styles";
import { Header } from "../components";
import { BlogSection } from "../sections/blog";

const BlogPage = () => {
  return (
    <div className="blog__page w-full flex flex-col">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Header title="Our Blog" link="/blog" background="bg-blogHeader" />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <BlogSection />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
