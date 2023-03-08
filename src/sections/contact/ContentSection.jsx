import { styles } from "../../utils/styles";

const ContentSection = () => {
  return (
    <section className="content__section bg-primary w-full py-16">
      <div
        className={`${styles.paddingX} flex flex-col sm:flex-row sm:gap-16 items-center`}
      >
        <div className="w-full py-6 sm:basis-1/2 sm:text-center md:px-6 lg:px-16">
          <p className={styles.supHeading}>STay Connected</p>
          <h2 className={styles.heading2}>
            I would be happy to help if you you have a question, a project.
          </h2>
        </div>
        <p className={`${styles.paragraph} sm:basis-1/2 md:px-6 lg:px-16`}>
          We are always ready to help you with your photography needs. Whether
          you want to book a session, request a quote, or ask a question, you
          can contact us using the form below or send us a message on social
          media. We will respond to you as soon as we can.
        </p>
      </div>
    </section>
  );
};

export default ContentSection;
