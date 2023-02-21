import { Link } from "react-router-dom";

import { styles } from "../utils/styles.js";
import { History } from "../sections/about";

const AboutPage = () => {
  return (
    <div className="w-full">
      <section className="w-full h-[calc(100vh-140px)] bg-aboutSection bg-fixed flex justify-center items-center relative z-[2]">
        <div className="w-full h-full absolute bg-black opacity-20 z-[-1]"></div>
        <div className="flex flex-col items-center gap-4">
          <span className={`${styles.supHeading}`}>
            <Link to="/" className="hover:opacity-70 duration-300">
              Home
            </Link>
            <span> / </span>
            <Link to="/about" className="hover:opacity-70 duration-300">
              About us
            </Link>
          </span>
          <h1 className={styles.heading1}>About Us</h1>
        </div>
      </section>
      <div className="w-full">
        <History />
      </div>
    </div>
  );
};

export default AboutPage;
