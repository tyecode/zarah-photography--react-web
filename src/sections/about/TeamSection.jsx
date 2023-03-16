import { styles } from "../../utils/styles";
import { ourTeams } from "../../utils/constants";
import { FaFacebookF, FaInstagram, FaDribbble } from "react-icons/fa";

const TeamSection = () => {
  return (
    <section className="team__section bg-primary w-full py-16">
      <div className={`${styles.paddingX} flex flex-col gap-16`}>
        <div className="w-full text-center">
          <p className={styles.supHeading}>Our Team</p>
          <h2 className={`${styles.heading2}`}>Professional Photographers</h2>
        </div>

        <div className="w-full flex flex-col gap-6 px-0 sm:flex-row ss:px-16 sm:px-0 md:px-16">
          {ourTeams.map((team, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-4 cursor-pointer hover:mt-[-2rem] duration-300 group"
            >
              <div className="w-full aspect-[2/3] overflow-hidden relative">
                <img
                  src={team.src}
                  alt={team.name}
                  draggable="false"
                  className="w-full h-full object-cover"
                />

                <div className="w-28 h-72 absolute -top-72 left-8 bg-white group-hover:top-0 duration-300">
                  <span className="w-full h-full flex flex-col gap-6 justify-center items-center overflow-hidden">
                    <a href={team.socialMedia.facebook}>
                      <FaFacebookF
                        size={20}
                        className="text-softBlack hover:text-link duration-300"
                      />
                    </a>
                    <a href={team.socialMedia.instagram}>
                      <FaInstagram
                        size={20}
                        className="text-softBlack hover:text-link duration-300"
                      />
                    </a>
                    <a href={team.socialMedia.dribbble}>
                      <FaDribbble
                        size={20}
                        className="text-softBlack hover:text-link duration-300"
                      />
                    </a>
                  </span>
                </div>
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
