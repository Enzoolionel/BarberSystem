import axios from "axios";
const baseUrl = "http://localhost:3000/api/turnos";

export const getAllTurno = () => {
  return axios.get(baseUrl);
};

export const createTurno = (newObject) => {
  return axios.post(baseUrl, newObject);
};

export const updateTurno = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject);
};

export const deleteTurno = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};
