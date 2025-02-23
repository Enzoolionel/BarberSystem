import { useState } from "react";

const TurnoCard = ({ turn, estado, onEdit, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const handleToggle = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      setTimeout(() => setShowContent(true), 150); // Espera 300ms antes de mostrar los datos
    } else {
      setShowContent(false);
      setTimeout(() => setIsExpanded(false), 20); // Cierra con delay también
    }
  };

  return (
    <div
      className={`bg-white rounded-lg shadow-md dark:bg-gray-800 transition-all cursor-pointer ${
        isExpanded ? "h-56 p-4 " : "h-20 overflow-hidden p-6"
      }`}
      onClick={handleToggle}
    >
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {turn.cliente}
        </h4>
        <p className="text-gray-600 dark:text-gray-300">
          📅 <strong>{turn.dia}</strong>
        </p>
      </div>

      {isExpanded && showContent && (
        <div className="mt-2 transition-opacity duration-300 opacity-100">
          <p className="text-gray-600 dark:text-gray-300">
            ⏰ <strong>Hora:</strong> {turn.hora}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            ✉️ <strong>Email:</strong> {turn.email}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            📞 <strong>Teléfono:</strong> {turn.telefono}
          </p>
          <p
            className={`mt-1 font-semibold ${
              estado === "Pendiente"
                ? "text-yellow-300"
                : estado === "Completo"
                ? "text-green-500"
                : estado === "Cancelado"
                ? "text-red-600"
                : ""
            }`}
          >
            {estado === "Pendiente"
              ? "🟡"
              : estado === "Completo"
              ? "🟢"
              : estado === "Cancelado"
              ? "🔴"
              : ""}{" "}
            Estado: {estado}
          </p>
          {/* Botones de Editar y Eliminar */}
          <div className="flex gap-4 mt-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(turn);
              }}
            >
              ✏️ Editar
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(turn);
              }}
            >
              🗑️ Eliminar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TurnoCard;
