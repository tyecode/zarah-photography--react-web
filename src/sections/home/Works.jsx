import { styles } from "../../utils/styles";
import { sectionImages } from "../../utils/constants";

const Works = () => {
  return (
    <section className="bg-secondary w-full flex flex-col gap-16 sm:gap-0">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 aspect-[3/4] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={sectionImages.works.src}
            alt={sectionImages.works.title}
            draggable="false"
          />
        </div>
        <div className={`${styles.paddingX} flex flex-col py-16 sm:w-1/2 justify-center md:p-16`}>
          <div className="w-full">
            <div className="flex items-center">
              <div className={styles.headingBar}></div>
              <p className={styles.supHeading}>Our Works</p>
            </div>
            <h2 className={`${styles.heading2}`}>Stand Out Your Lifestyle</h2>
          </div>
          <p className={`${styles.paragraph}`}>
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy with my whole heart. I
            am alone, and feel the charm of existence in this spot, which was
            created for the bliss of souls like mine. I am so happy, my dear
            friend, so absorbed in the exquisite sense of mere tranquil
            existence, that I neglect my talents.
          </p>
        </div>
      </div>
      <div className="flex flex-col ss:flex-row flex-wrap md:flex-nowrap cursor-pointer">
        <div className="group w-full ss:w-1/2 aspect-[4/3] relative overflow-hidden">
          <img
            className="w-full h-full object-cover group-hover:scale-110 duration-300"
            src="https://images.unsplash.com/photo-1543233604-3baca4d35513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          />
          <div className="w-full h-full bg-gradient-to-t from-black absolute top-0 opacity-0 hover:opacity-100 duration-300 flex items-end">
            <span className="text-white font-playfair text-[26px] m-10">
              Coffee Day
            </span>
          </div>
        </div>

        <div className="group w-full ss:w-1/2 aspect-[4/3] relative overflow-hidden">
          <img
            className="w-full h-full object-cover group-hover:scale-110 duration-300"
            src="https://images.unsplash.com/photo-1488730792340-bdc88feffb98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
          />
          <div className="w-full h-full bg-gradient-to-t from-black absolute top-0 opacity-0 hover:opacity-100 duration-300 flex items-end">
            <span className="text-white font-playfair text-[26px] m-10">
              Dark Addiction
            </span>
          </div>
        </div>

        <div className="group w-full ss:w-1/2 aspect-[4/3] relative overflow-hidden">
          <img
            className="w-full h-full object-cover group-hover:scale-110 duration-300"
            src="https://images.unsplash.com/photo-1512580194662-91363a474d24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
          />
          <div className="w-full h-full bg-gradient-to-t from-black absolute top-0 opacity-0 hover:opacity-100 duration-300 flex items-end">
            <span className="text-white font-playfair text-[26px] m-10">
              Life Details
            </span>
          </div>
        </div>

        <div className="group w-full ss:w-1/2 aspect-[4/3] relative overflow-hidden">
          <img
            className="w-full h-full object-cover group-hover:scale-110 duration-300"
            src="https://images.unsplash.com/photo-1480089161214-c0fe46de83bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <div className="w-full h-full bg-gradient-to-t from-black absolute top-0 opacity-0 hover:opacity-100 duration-300 flex items-end">
            <span className="text-white font-playfair text-[26px] m-10">
              Green Story
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
