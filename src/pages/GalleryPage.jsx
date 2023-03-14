import { styles } from "../utils/styles";
import { Header } from "../components";
import { GallerySection } from "../sections/gallery";

const GalleryPage = () => {
  return (
    <div className="gallery__page w-full flex flex-col">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Header
            title="Gallery"
            link="/gallery"
            background="bg-contactHeader"
          />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <GallerySection />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
