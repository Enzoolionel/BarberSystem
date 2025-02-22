import { NavLink } from "react-router";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "/img/newLogo1.png";

const NavBar = ({ darkMode, toggleDarkMode }) => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.classList.add("overflow-hidden");
      document.body.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <nav
      className={`${
        window.location.href === "panel-admin" ? "none" : ""
      }  w-screen fixed z-50 top-0 left-0 right-0 py-4 transition-all duration-300 ${
        scrolling ? "bg-white dark:bg-gray-800 shadow-md" : "shadow-none"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="rounded-full h-14 md:h-20 lg:h-28 transition-all duration-300"
        />

        {/* Menú en pantallas grandes */}
        <ul className="hidden md:flex space-x-6 gap-5 text-lg">
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

        {/* Botón menú hamburguesa en móviles */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-900 dark:text-white text-3xl"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Fondo difuminado cuando el menú está abierto */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-lg z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Menú móvil con animación */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 bg-white dark:bg-gray-800 shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 text-gray-900 dark:text-white text-3xl"
        >
          <HiX />
        </button>

        <ul className="flex flex-col items-center space-y-6 text-lg mt-20">
          {["/", "/turnos", "/about", "/contact", "/login"].map(
            (path, index) => {
              const labels = ["Home", "Turnos", "About", "Contact", "Login"];
              return (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `block py-2 text-xl transition-all duration-75 ${
                        isActive
                          ? "text-secundario border-b-2 border-secundario font-semibold"
                          : "text-gray-900 dark:text-slate-200 font-semibold"
                      }`
                    }
                    onClick={() => setMenuOpen(false)} // Cierra el menú al hacer clic
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
