import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

import { styles } from "../utils/styles";

const ImageGallery = ({ Images }) => {
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
      ? setSelectedImage(Images.length - 1)
      : setSelectedImage(selectedImage - 1);
  };

  const handleNext = () => {
    selectedImage === Images.length - 1
      ? setSelectedImage(0)
      : setSelectedImage(selectedImage + 1);
  };

  return (
    <div className="gallery">
      {lightbox && (
        <div
          className={`lightbox w-full h-screen flex flex-col fixed top-0 left-0 z-[100] ${styles.flexCenter} bg-overlay p-6`}
        >
          <div className="max-w-4xl drop-shadow-xl p-2 bg-primary">
            <MdOutlineClose
              className="text-[1.8rem] text-white opacity-70 absolute -top-9 right-0 cursor-pointer"
              onClick={handleClose}
            />
            <img
              src={Images[selectedImage].src}
              alt={Images[selectedImage].title}
              draggable={false}
              className="w-full h-full object-cover"
            />
          </div>
          <FaChevronCircleLeft
            className="text-[2rem] text-white opacity-60 absolute left-0 cursor-pointer m-10"
            onClick={handlePrev}
          />
          <FaChevronCircleRight
            className="text-[2rem] text-white opacity-60 absolute right-0 cursor-pointer m-10"
            onClick={handleNext}
          />
        </div>
      )}
      <div className="gallery__wrapper w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Images.map((images, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="w-full aspect-[16/9] overflow-hidden cursor-pointer relative group"
          >
            <img
              src={images.src}
              alt={images.title}
              draggable={false}
              className="w-full h-full object-cover"
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
