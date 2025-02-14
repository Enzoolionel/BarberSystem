import { NavLink } from "react-router";

const Home = () => {
  return (
    <div className="transition-all flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Bienvenido a MiApp
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
        Reserva tu turno de manera rápida y sencilla.
      </p>
      <NavLink
        to="/turnos"
        className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
      >
        Reservar Turno
      </NavLink>
    </div>
  );
};

export default Home;
