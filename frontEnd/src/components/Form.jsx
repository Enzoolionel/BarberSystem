import React, { useState } from "react";

import { createTurno } from "../services/turnos.js";

const TurnosForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    dia: "",
    hora: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const addTurno = async (e) => {
    e.preventDefault();

    const newObject = {
      cliente: formData.nombre,
      email: formData.email,
      telefono: formData.telefono,
      dia: formData.dia,
      hora: formData.hora,
    };

    await createTurno(newObject).then((res) => {
      alert(res.data.message);
      console.log(res.data);
    });

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      dia: "",
      hora: "",
    });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-[#1A1A1D] shadow-xl rounded-xl border border-[#C5A880]">
      <h2 className="text-3xl font-bold text-center text-[#C5A880] mb-6">
        Reserva tu Turno
      </h2>
      <form onSubmit={addTurno} className="space-y-4">
        <div>
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-[#C5A880]"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-[#C5A880] bg-[#333333] text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#D64933] transition"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-[#C5A880]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-[#C5A880] bg-[#333333] text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#D64933] transition"
            required
          />
        </div>

        <div>
          <label
            htmlFor="telefono"
            className="block text-sm font-medium text-[#C5A880]"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-[#C5A880] bg-[#333333] text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#D64933] transition"
            required
          />
        </div>

        <div>
          <label
            htmlFor="dia"
            className="block text-sm font-medium text-[#C5A880]"
          >
            Día
          </label>
          <input
            type="date"
            id="dia"
            name="dia"
            value={formData.dia}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-[#C5A880] bg-[#333333] text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#D64933] transition"
            required
          />
        </div>

        <div>
          <label
            htmlFor="hora"
            className="block text-sm font-medium text-[#C5A880]"
          >
            Hora
          </label>
          <input
            type="time"
            id="hora"
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            className="w-full p-3 mt-1 border border-[#C5A880] bg-[#333333] text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#D64933] transition"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-4 mt-6 bg-[#D64933] text-white font-bold uppercase rounded-lg shadow-md hover:bg-[#C5A880] transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A880]"
        >
          Agendar Turno
        </button>
      </form>
    </div>
  );
};

export default TurnosForm;
