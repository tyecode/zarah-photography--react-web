import { styles } from "../../utils/styles";

const Testimonials = () => {
  return (
    <section className="bg-primary w-full flex py-16">
      <div className={`${styles.paddingX} w-full`}>
        <div className="w-full">
          <div className="flex items-center md:mt-8">
            <div className={styles.headingBar}></div>
            <p className={styles.supHeading}>Testimonials</p>
          </div>
          <h2 className={`${styles.heading2}`}>Clients Say</h2>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
