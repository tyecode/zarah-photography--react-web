import { styles } from "../../utils/styles";
import { ourTeams } from "../../utils/constants";

const TeamSection = () => {
  return (
    <section className="team__section bg-primary w-full py-16">
      <div className={`${styles.paddingX} flex flex-col gap-16`}>
        <div className="w-full text-center">
          <p className={styles.supHeading}>Our Team</p>
          <h2 className={`${styles.heading2}`}>Professional Photographers</h2>
        </div>

        <div className="w-full flex flex-col gap-6 px-0 sm:flex-row ss:px-16 sm:px-0 md:px-16 lg:px-32">
          {ourTeams.map((team, index) => (
            <div key={index} className="w-full flex flex-col">
              <div className="w-full aspect-[2/3] overflow-hidden hover:mt-[-2rem] duration-300">
                <img
                  src={team.src}
                  alt={team.name}
                  draggable="false"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col my-4">
                <p className="text-white font-poppins font-light text-[11px] tracking-[.2rem] uppercase">
                  {team.role}
                </p>
                <h4 className="text-white font-playfair font-light text-[20px] my-1">
                  {team.name}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
