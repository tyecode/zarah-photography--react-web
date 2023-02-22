import { TfiCamera } from "react-icons/tfi";
import { BiPhotoAlbum } from "react-icons/bi";
import { MdOutlineCameraRoll, MdOutlineHomeWork } from "react-icons/md";

import { styles } from "../../utils/styles";

const Services = () => {
  return (
    <section className="bg-primary w-full py-16">
      <div className={`${styles.paddingX} md:flex md:gap-16`}>
        <div className="w-full">
          <div className="flex items-center md:mt-8">
            <div className={styles.headingBar}></div>
            <p className={styles.supHeading}>Our Services</p>
          </div>
          <h2 className={`${styles.heading2}`}>
            A lifestyle photography tells a story
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap sm:justify-between">
          <div className="flex gap-8 sm:basis-[45%] my-4">
            <i className="mt-4">
              <TfiCamera color="#fff" size={50} />
            </i>
            <div className="flex flex-col">
              <h3 className={styles.heading3}>Extensive Equipment</h3>
              <p className={styles.paragraph}>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with
              </p>
            </div>
          </div>

          <div className="flex gap-8 sm:basis-[45%] my-4">
            <i className="mt-4">
              <MdOutlineCameraRoll color="#fff" size={50} />
            </i>
            <div className="flex flex-col">
              <h3 className={styles.heading3}>Long Hour Shoots</h3>
              <p className={styles.paragraph}>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with
              </p>
            </div>
          </div>

          <div className="flex gap-8 sm:basis-[45%] my-4">
            <i className="mt-4">
              <MdOutlineHomeWork color="#fff" size={50} />
            </i>
            <div className="flex flex-col">
              <h3 className={styles.heading3}>Studio Sessions</h3>
              <p className={styles.paragraph}>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with
              </p>
            </div>
          </div>

          <div className="flex gap-8 sm:basis-[45%] my-4">
            <i className="mt-4">
              <BiPhotoAlbum color="#fff" size={50} />
            </i>
            <div className="flex flex-col">
              <h3 className={styles.heading3}>Professional Editing</h3>
              <p className={styles.paragraph}>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;