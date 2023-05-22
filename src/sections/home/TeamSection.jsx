import { styles } from "../../utils/styles";
import { ourTeams } from "../../utils/constants";
import { FaFacebookF, FaInstagram, FaDribbble } from "react-icons/fa";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { leftFadeIn, riseUpFadeIn } from "../../utils/animation";

const TeamSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className="team__section bg-primary w-full flex py-16">
      <div
        className={`${styles.paddingX} w-full flex flex-col gap-6 md:gap-16 md:flex-row`}
      >
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={leftFadeIn}
          className="basis-full md:basis-2/6">
          <div className="flex items-center md:mt-8">
            <div className={styles.headingBar}></div>
            <p className={styles.supHeading}>Meet the team</p>
          </div>
          <h2 className={`${styles.heading2}`}>Professional Photographers</h2>
        </motion.div>

        <div className="flex flex-col gap-5 sm:flex-row md:mt-8">
          {ourTeams.map((team, index) => (
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={riseUpFadeIn}
              transition={{ type: 'spring', damping: 10, duration: 1, delay: 1 + (index / 3) }}
              key={index}
              className="group w-full cursor-pointer">
              <div className="w-full aspect-square overflow-hidden relative">
                <img
                  src={team.src}
                  alt={team.name}
                  draggable="false"
                  className="w-full h-full object-cover"
                />
                <div className="w-28 h-0 absolute top-0 left-8 bg-white group-hover:h-full duration-300">
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
                <h4 className="text-white font-playfair font-light text-[18px] my-1">
                  {team.name}
                </h4>
                <p className="text-white font-poppins font-light text-[11px] tracking-[.2rem] uppercase">
                  {team.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
