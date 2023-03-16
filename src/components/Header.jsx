import { styles } from "../utils/styles";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header
      className={`header w-full h-screen ${styles.flexCenter} ${props.background} relative z-[2] ${styles.fixedBackground}`}
    >
      <div className="w-full h-full absolute bg-black opacity-20 z-[-1]"></div>
      <div className="flex flex-col items-center gap-4">
        <span className={`${styles.supHeading}`}>
          <Link to="/" className="hover:opacity-70 duration-300">
            Home
          </Link>
          <span> / </span>
          <Link to={props.link} className="hover:opacity-70 duration-300">
            {props.title}
          </Link>
        </span>
        <h1 className={styles.heading1}>{props.title}</h1>
      </div>
    </header>
  );
};

export default Header;
