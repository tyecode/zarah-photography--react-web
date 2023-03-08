import { styles } from "../utils/styles";
import { Header } from "../components";
import ImageGallery from "../components/ImageGallery";

const GalleryPage = () => {
  const Images = [
    {
      title: "Happiness",
      src: "https://images.pexels.com/photos/908602/pexels-photo-908602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Freedom",
      src: "https://images.pexels.com/photos/2868441/pexels-photo-2868441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Pleasure",
      src: "https://images.pexels.com/photos/5480835/pexels-photo-5480835.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      title: "Journey",
      src: "https://images.unsplash.com/photo-1522992981590-f4274364e109?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Marriage",
      src: "https://images.unsplash.com/photo-1565038930214-09566ed2149b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Cerebrate",
      src: "https://images.pexels.com/photos/4011412/pexels-photo-4011412.jpeg",
    },
    {
      title: "Portrait",
      src: "https://images.pexels.com/photos/612891/pexels-photo-612891.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Romance",
      src: "https://images.pexels.com/photos/1573007/pexels-photo-1573007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

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

      <div className={`bg-primary ${styles.flexCenter} py-16`}>
        <div className={`${styles.boxWidth} ${styles.paddingX}`}>
          <ImageGallery Images={Images} />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
