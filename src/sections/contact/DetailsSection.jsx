import { styles } from "../../utils/styles";
import { ContactDetails } from "../../utils/constants";

const DetailsSection = () => {
  return (
    <section className="details_section w-full bg-primary py-16">
      <div className={`${styles.paddingX} grid grid-cols-1 md:grid-cols-3`}>
        {ContactDetails.map((details, index) => (
          <div
            key={details.id}
            className={`w-full h-full text-center md:basis-1/3 py-8 md:py-0 ${
              styles.flexCenter
            } flex-col gap-3 ${
              index == 1
                ? "border-y-[1px] border-gray-500 md:border-y-0 md:border-x-[1px]"
                : ""
            }`}
          >
            <p className={styles.supHeading}>{details.title}</p>
            <h3 className={`${styles.heading3} px-6`}>{details.detail}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailsSection;
