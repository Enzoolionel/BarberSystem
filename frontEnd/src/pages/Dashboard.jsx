import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { logout } from "../services/users.js";
import { deleteTurno, getAllTurno } from "../services/turnos.js";

import TurnoCard from "../components/TurnoCard";
import UpdateUserModal from "../components/UpdateModal.jsx";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [turns, setTurns] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [datoUpdated, setDatoUpdated] = useState({});
  const navigate = useNavigate(); // Para redirigir al login al hacer logout

  useEffect(() => {
    const getTurnos = async () => {
      try {
        const res = await getAllTurno();
        const data = res.data.data;
        if (data) {
          setTurns(data);
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    getTurnos();
  }, []);

  // Función para cerrar sesión
  const handleLogout = async () => {
    try {
      const response = await logout();
      if (response.success) {
        navigate("/login"); // Redirigir al login
        window.location.reload();
      } else {
        console.error("No se pudo cerrar sesión");
      }
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTurno(id);
      console.log("Turno eliminado");
      window.location.reload();
    } catch (error) {
      console.error("Error eliminando el turno", error);
    }
  };

  const handleEdit = (id) => {
    setModalOpen(true); // Abrir modal
    const turno = turns.find((e) => e._id === id); // Usar find en lugar de filter para obtener el objeto directamente
    setDatoUpdated(turno); // Setear los datos del turno en el estado
  };

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } min-h-screen flex flex-col md:flex-row`}
    >
      {/* Navbar y Sidebar */}
      <nav className="md:hidden bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </nav>
      <div
        className={`bg-gray-800 text-white w-64 p-5 space-y-6 absolute md:static top-0 left-0 h-screen md:h-auto transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-50 md:flex md:flex-col`}
      >
        <ul className="space-y-4">
          <li>
            <a href="#" className="hover:text-gray-400">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Barberos
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Clientes
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Turnos
            </a>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white p-2 w-full rounded-md mt-4"
        >
          Salir
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 text-gray-100 dark:bg-gray-900">
        <h2 className="text-3xl font-semibold">Dashboard</h2>

        {/* Sección de estadísticas */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
            <h3 className="text-xl font-semibold">Turnos Pendientes</h3>
            <p className="text-2xl font-bold">{turns.length}</p>
          </div>
        </div>

        {/* Sección de Turnos */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Turnos</h3>
          {turns.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {turns.map((turn, i) => (
                <TurnoCard
                  turn={turn}
                  estado={turn.estado}
                  key={i}
                  onDelete={() => handleDelete(turn._id)}
                  onEdit={() => handleEdit(turn._id)}
                />
              ))}
            </div>
          ) : (
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              No hay turnos disponibles.
            </p>
          )}

          {modalOpen && (
            <UpdateUserModal
              onClose={() => setModalOpen(false)}
              user={datoUpdated} // Pasa los datos al modal
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
