import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        authenticated: false,
        message: "Token no proporcionado.",
      });
    }

    // Verificar el token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = { ...decoded, ...(req.session?.user || {}) };

    if (!req.user) {
      return res.status(403).json({
        authenticated: false,
        message: "Sesión no encontrada.",
      });
    }

    // ✅ Si el token es válido, pasamos la ejecución al siguiente middleware/controlador
    next();
  } catch (error) {
    return res
      .status(403)
      .json({ authenticated: false, message: "Token inválido." });
  }
};

export default verifyToken;
