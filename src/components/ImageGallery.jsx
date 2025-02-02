import { styles } from "../utils/styles";
import { useState } from "react";
import {
  MdOutlineClose,
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  const handleClick = (index) => {
    setSelectedImage(index);
    setLightbox(true);
  };

  const handleClose = () => {
    setLightbox(false);
  };

  const handlePrev = () => {
    selectedImage === 0
      ? setSelectedImage(images.length - 1)
      : setSelectedImage(selectedImage - 1);
  };

  const handleNext = () => {
    selectedImage === images.length - 1
      ? setSelectedImage(0)
      : setSelectedImage(selectedImage + 1);
  };

  return (
    <div className="gallery">
      {lightbox && (
        <div
          className={`lightbox w-full h-screen flex flex-col fixed top-0 left-0 z-[100] ${styles.flexCenter} bg-overlay p-6`}
        >
          <div className="max-w-5xl drop-shadow-xl p-2 bg-white">
            <MdOutlineClose
              className="text-[1.8rem] text-white opacity-70 absolute -top-9 right-0 cursor-pointer"
              onClick={handleClose}
            />
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].title}
              className="w-full h-full object-cover"
              draggable="false"
              loading="lazy"
              width="1280"
              height="720"
            />
          </div>
          <MdOutlineArrowBackIos
            className="text-[2rem] text-white opacity-60 absolute left-0 cursor-pointer m-10"
            onClick={handlePrev}
          />
          <MdOutlineArrowForwardIos
            className="text-[2rem] text-white opacity-60 absolute right-0 cursor-pointer m-10"
            onClick={handleNext}
          />
        </div>
      )}
      <div className="gallery__wrapper w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((images, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="w-full aspect-[16/9] overflow-hidden cursor-pointer relative group"
          >
            <img
              src={images.src}
              alt={images.title}
              className="w-full h-full object-cover"
              draggable="false"
              loading="lazy"
              width="960"
              height="540"
            />
            <div
              className={`w-full h-full bg-primary opacity-0 group-hover:opacity-90 absolute top-0 duration-500 ${styles.flexCenter}`}
            ></div>
            <p
              className={`w-full h-full text-white text-[20px] font-roboto font-light tracking-widest absolute top-0 opacity-0 group-hover:opacity-100 duration-500 ${styles.flexCenter}`}
            >
              {images.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
