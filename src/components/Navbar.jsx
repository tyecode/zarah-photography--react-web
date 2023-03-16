import { styles } from "../utils/styles";
import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Slant as Hamburger } from "hamburger-react";
import { navLinks } from "../utils/constants";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [navBackground, setNavBackground] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname != "/") {
      setNavBackground("bg-primary absolute");
    } else {
      setNavBackground("bg-transparent absolute");
    }
    setOpen(false);
  }, [location]);

  return (
    <nav className={`navbar w-full py-5 z-[99] ${navBackground}`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div
          className={`${styles.boxWidth} relative md:flex justify-between items-center`}
        >
          <h1 className={styles.banner}>
            <Link
              to="/"
              className="hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
            >
              <span className="text-link">Z</span>arah
            </Link>
          </h1>

          <ul
            className={`${
              isOpen ? "" : "hidden"
            } md:flex md:w-auto w-full text-center md:mt-0 mt-10 md:bg-transparent bg-overlay md:py-0 py-2 md:static absolute`}
          >
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${styles.linkStyle} md:ml-8 md:my-0 my-9 hover:text-link`}
              >
                <NavLink
                  to={nav.link}
                  className={({ isActive }) =>
                    isActive ? "text-link duration-300" : "duration-300"
                  }
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="md:hidden absolute right-0 top-0">
            <Hamburger
              color="#fff"
              size={28}
              duration={0.6}
              toggled={isOpen}
              toggle={setOpen}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
