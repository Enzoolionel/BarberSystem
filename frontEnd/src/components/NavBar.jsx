import { NavLink } from "react-router";

const NavBar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="w-full bg-gray-100 dark:bg-gray-900 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold dark:text-white">MiApp</h1>
        <ul className="flex space-x-6">
          {["/", "/services", "/turnos", "/about", "/contact", "/login"].map(
            (path, index) => {
              const labels = [
                "Home",
                "Services",
                "Turnos",
                "About",
                "Contact",
                "Login",
              ];
              return (
                <li key={index}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `text-gray-800 dark:text-gray-200 hover:text-blue-500 ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400 underline font-semibold"
                          : ""
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
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
