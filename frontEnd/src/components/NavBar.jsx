import { NavLink } from "react-router";
import { useState, useEffect } from "react";

import logo from "/public/img/newLogo1.png";

const NavBar = ({ darkMode, toggleDarkMode }) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full fixed z-40 top-0 left-0 right-0 py-4 transition-all duration-300 ${
        scrolling
          ? "bg-gray-100 dark:bg-gray-900 shadow-md"
          : "bg-transparent dark:bg-transparent shadow-none"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        <img
          src={logo}
          alt="Logo"
          className={`rounded-full h-32 ${
            darkMode ? "bg-transparent" : "bg-gray-900"
          }`}
        />
        <ul className="flex space-x-6 gap-5 text-lg">
          {["/", "/turnos", "/about", "/contact", "/login"].map(
            (path, index) => {
              const labels = ["Home", "Turnos", "About", "Contact", "Login"];
              return (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `transition-all duration-75 ${
                        isActive
                          ? "text-secundario border-b-2 border-secundario font-semibold"
                          : "text-gray-900 dark:text-slate-200 font-semibold"
                      }`
                    }
                  >
                    {labels[index]}
                  </NavLink>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
