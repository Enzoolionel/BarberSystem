import axios from "axios";
const baseUrl = "https://barbersystem.onrender.com/api";

export const login = (object) => {
  return axios.post(`${baseUrl}/login`, object, { withCredentials: true });
};

export const logout = async () => {
  try {
    const response = await axios.post(
      `${baseUrl}/logout`,
      {},
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
    throw error;
  }
};
