import { useState, useEffect } from "react";
import { updateTurno } from "../services/turnos";

const UpdateUserModal = ({ user, onClose }) => {
  const [formData, setFormData] = useState({});

  // Rellenar el formulario con los datos del usuario
  useEffect(() => {
    if (user) {
      setFormData({
        cliente: user.cliente,
        email: user.email,
        telefono: user.telefono,
        dia: user.dia,
        hora: user.hora,
        estado: user.estado,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const editUser = async () => {
    try {
      const updatedData = { ...formData }; // Crear un objeto con los datos actualizados
      await updateTurno(user._id, updatedData); // Enviar el id y los datos actualizados
      console.log("Turno editado");

      onClose(); // Cerrar el modal después de la actualización
      window.location.reload();
    } catch (error) {
      console.error("Error actualizando el turno", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos a enviar:", formData);
    editUser(); // Llamar a editUser sin pasarle el id ya que ya lo tenemos en formData
  };

  return (
    <div className="absolute inset-0 text-slate-800 flex items-center justify-center bg-slate-800 bg-opacity-90">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Actualizar Usuario</h2>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">
            Nombre:
            <input
              type="text"
              name="cliente"
              value={formData.cliente || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Teléfono:
            <input
              type="text"
              name="telefono"
              value={formData.telefono || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Día:
            <input
              type="date"
              name="dia"
              value={formData.dia || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Hora:
            <input
              type="time"
              name="hora"
              value={formData.hora || ""}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </label>
          <label className="block mb-2">
            Estado:
            <select
              name="estado"
              value={formData.estado || "Pendiente"} // Asegurar que el valor seleccionado sea el que está en el formData
              onChange={handleChange} // Necesitamos manejar el cambio para actualizar el estado
              className="w-full p-2 border rounded"
            >
              <option value="Pendiente">Pendiente</option>
              <option value="Completo">Completo</option>
              <option value="Cancelado">Cancelado</option>
            </select>
          </label>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 px-4 py-2 bg-red-400 text-white rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-400 text-white rounded"
            >
              Actualizar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserModal;
