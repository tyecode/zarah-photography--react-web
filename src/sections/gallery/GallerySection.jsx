import { styles } from "../../utils/styles";
import { ImageGallery } from "../../components";

const Images = [
  {
    title: "Happiness",
    src: "images/gallery/happiness.jpg",
  },
  {
    title: "Freedom",
    src: "images/gallery/freedom.jpg",
  },
  {
    title: "Pleasure",
    src: "images/gallery/pleasure.jpg",
  },
  {
    title: "Journey",
    src: "images/gallery/journey.jpg",
  },
  {
    title: "Marriage",
    src: "images/gallery/marriage.jpg",
  },
  {
    title: "Cerebrate",
    src: "images/gallery/celebrate.jpg",
  },
  {
    title: "Portrait",
    src: "images/gallery/portrait.jpg",
  },
  {
    title: "Romance",
    src: "images/gallery/romance.jpg",
  },
];

const GallerySection = () => {
  return (
    <section className="bg-primary w-full py-16">
      <div className={styles.paddingX}>
        <div className={`${styles.flexCenter} text-center mb-12`}>
          <div className="bg-gray-500 grow h-[1px] hidden sm:block"></div>
          <h2 className={`${styles.heading3} ss:px-12`}>
            Explore the beauty and diversity of life in motion
          </h2>
          <div className="bg-gray-500 grow h-[1px] hidden sm:block"></div>
        </div>
      </div>

      <div className={styles.paddingX}>
        <ImageGallery images={Images} />
      </div>
    </section>
  );
};

export default GallerySection;
