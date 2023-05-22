import { styles } from "../utils/styles";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { riseUpFadeIn } from "../utils/animation";

const Header = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <header
      className={`header w-full h-screen ${styles.flexCenter} ${props.background} relative z-[2] ${styles.fixedBackground}`}
    >
      <div className="w-full h-full absolute bg-black opacity-20 z-[-1]"></div>
      <div className="flex flex-col items-center gap-4">
        <motion.span
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={riseUpFadeIn}
          transition={{ type: 'spring', damping: 10, duration: .5, delay: .5 }}
          className={`${styles.supHeading}`}>
          <Link to="/" className="hover:opacity-70 duration-300">
            Home
          </Link>
          <span> / </span>
          <Link to={props.link} className="hover:opacity-70 duration-300">
            {props.title}
          </Link>
        </motion.span>
        <motion.h1
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={riseUpFadeIn}
          transition={{ type: 'spring', damping: 10, duration: .5, delay: .8 }}
          className={styles.heading1}>{props.title}</motion.h1>
      </div>
    </header>
  );
};

export default Header;
