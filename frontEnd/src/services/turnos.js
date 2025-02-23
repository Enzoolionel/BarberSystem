import axios from "axios";
const baseUrl = "http://localhost:3000/api/turnos"; //"https://barbersystem.onrender.com/api/turnos";

export const getAllTurno = (token) => {
  return axios.get(baseUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
    withCredentials: true, // ✅ Asegurar que se envían las cookies de autenticación
  });
};

export const createTurno = (newObject) => {
  return axios.post(baseUrl, newObject);
};

export const updateTurno = (id, newObject) => {
  return axios.patch(`${baseUrl}/${id}`, newObject, {
    withCredentials: true, // ✅ Asegurar que se envían las cookies de autenticación
  });
};

export const deleteTurno = (id) => {
  return axios.delete(`${baseUrl}/${id}`, {
    withCredentials: true, // ✅ Asegurar que se envían las cookies de autenticación
  });
};
