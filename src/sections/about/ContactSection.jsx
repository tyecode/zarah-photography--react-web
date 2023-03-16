import { styles } from "../../utils/styles";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section
      className={`contact__section w-full bg-aboutContact ${styles.fixedBackground} py-16 md:py-32 relative z-[2]`}
    >
      <div className="w-full h-full absolute top-0 bg-black opacity-30 z-[-1]"></div>
      <div
        className={`${styles.paddingX} ${styles.flexCenter} text-center flex-col gap-6 md:gap-16 md:flex-row`}
      >
        <h4 className={`${styles.heading4} md:w-4/6`}>
          Need a <span className="italic text-[22px]">Photographer</span> ?
          Someone With Experience to{" "}
          <span className="italic text-[22px] sm:text-[24px] md:text-[26px]">
            Collaborate
          </span>{" "}
          With?
        </h4>
        <Link to="/contact">
          <button
            type="button"
            title="Contact us"
            className={`${styles.button} border-none group relative py-5`}
          >
            <span className="tracking-[.2rem] px-3">Let's Work!</span>
            <div className="absolute top-0 bottom-0 right-0 w-1/4 border-t-2 group-hover:w-5/6 duration-500"></div>
            <div className="absolute top-0 bottom-0 left-0 w-1/4 border-b-2 group-hover:w-5/6 duration-500"></div>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
