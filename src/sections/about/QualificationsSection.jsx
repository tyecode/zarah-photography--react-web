import { styles } from "../../utils/styles";
import { progressBar } from "../../utils/constants";

const QualificationsSection = () => {
  return (
    <section className="qualifications__section bg-secondary w-full py-16">
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-16">
        <div className={`${styles.paddingX} basis-5/12 sm:pr-0 py`}>
          <div className="w-full">
            <p className={styles.supHeading}>Qualifications</p>
            <h2 className={`${styles.heading2}`}>Our Proficiency</h2>
          </div>
          <p className={styles.paragraph}>
            We are a team of passionate and creative people who love what we do.
            We started this website with a simple vision: to provide
            high-quality products and services that make a difference in
            people's lives.
          </p>
        </div>
        <div className={`${styles.paddingX} sm:pl-0 grow py-6`}>
          <div className="flex flex-col gap-10">
            {progressBar.map((progression) => (
              <div key={progression.id} className="flex flex-col w-full gap-1">
                <h3 className={styles.heading3}>{progression.title}</h3>
                <div className="w-full h-[4px] bg-gray-700">
                  <div
                    className="bg-white h-full relative"
                    style={{ width: progression.progress + "%" }}
                  >
                    <span className="text-white font-poppins text-[13px] absolute right-[-1rem] bottom-[-2rem] opacity-80 font-extralight">
                      {progression.progress + "%"}
                    </span>
                    <div className="bg-white w-[14px] aspect-square rounded-full absolute right-[-7px] top-1/2 translate-y-[-50%]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationsSection;
