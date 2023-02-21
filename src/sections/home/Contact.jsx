import { styles } from "../../utils/styles";
import { sectionImages } from "../../utils/constants";

const Contact = () => {
  return (
    <section className="bg-secondary w-full flex flex-col gap-16 sm:gap-0">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 aspect-[3/4] overflow-hidden relative">
          <img
            className="w-full h-full object-cover"
            src={sectionImages.contact.src}
            alt={sectionImages.contact.title}
          />
          <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center p-4 gap-5">
            <p className="text-white font-poppins font-light text-[12px] tracking-[.15rem] uppercase text-center">
              Need a Lifestyle Photographer?
            </p>
            <h2
              className={`${styles.heading2} text-center w-full p-4 border-t-[1px] mb-0 pb-0`}
            >
              Someone to Collaborate With?
            </h2>
          </div>
        </div>
        <div
          className={`${styles.paddingX} flex flex-col py-16 sm:w-1/2 justify-center md:p-16`}
        >
          <div className="w-full">
            <div className="flex items-center">
              <div className={styles.headingBar}></div>
              <p className={styles.supHeading}>Contact</p>
            </div>
            <h2 className={`${styles.heading2}`}>Get In Touch</h2>
          </div>
          <p className={styles.paragraph}>
            Bearing living moving may you're a she'd. So gathering night morning
            creeping, tree which bring made divide. Called his very living
            image. Moved their midst place. Stars. You're male great.
          </p>
          <button type="button" className={styles.button}>
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
