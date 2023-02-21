import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Slant as Hamburger } from "hamburger-react";

import { navLinks } from "../utils/constants.js";
import { styles } from "../utils/styles.js";

const Navbar = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [navBackground, setNavBackground] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname != "/") {
      setNavBackground("bg-primary relative");
    } else {
      setNavBackground("bg-transparent absolute");
    }
  }, [location]);

  return (
    <nav className={`w-full py-5 z-[99] ${navBackground}`}>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div
          className={`${styles.boxWidth} relative sm:flex justify-between items-center`}
        >
          <h1 className={styles.banner}>
            <Link
              to="/"
              className="hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
            >
              <span className="text-red-500">Z</span>arah
            </Link>
          </h1>

          <ul
            className={`${
              hamburgerActive ? "" : "hidden"
            } sm:flex sm:w-auto w-full text-center sm:mt-0 mt-10 sm:bg-transparent bg-overlay sm:py-0 py-2 sm:static absolute`}
          >
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${styles.linkStyle} sm:ml-8 sm:my-0 my-8 hover:text-red-500`}
              >
                <NavLink
                  to={nav.link}
                  className={({ isActive }) =>
                    isActive ? "text-red-500 duration-300" : "duration-300"
                  }
                >
                  {nav.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="sm:hidden absolute right-0 top-0">
            <Hamburger
              color="#fff"
              size={28}
              duration={0.6}
              onToggle={(toggled) =>
                toggled ? setHamburgerActive(true) : setHamburgerActive(false)
              }
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
