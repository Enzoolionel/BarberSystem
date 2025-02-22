import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import axios from "axios";

const ProtectedRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/verify", {
          withCredentials: true, // ✅ Enviar cookies al backend
        });

        // ✅ Validamos la respuesta correctamente
        setIsAuthenticated(response.data.authenticated ?? false);
      } catch (error) {
        console.error("Error verificando autenticación:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (isAuthenticated === null) return <div>Loading...</div>; // Evita parpadeo

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
