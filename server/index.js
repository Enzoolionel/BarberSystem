import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import path from "path"; // Importa el módulo path para manejar rutas de archivos
import { fileURLToPath } from "url"; // Necesario para usar __dirname en ES Modules

dotenv.config();

import turnosRouter from "./routes/turnos.routes.js";
import barberosRouter from "./routes/barberos.routes.js";
import authRouter from "./routes/auth.routes.js";
import { connectDB } from "./conectDB.js";
import dashboardRouter from "./routes/dashboard.routes.js";

const app = express();
const { PORT, JWT_SECRET } = process.env;

// Configura __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://barbersystem.onrender.com", // Reemplaza con el dominio de tu aplicación
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Sirve los archivos estáticos de la aplicación React
app.use(express.static(path.join(__dirname, "dist")));

// Conecta a la base de datos
connectDB();

app.use(
  session({
    secret: JWT_SECRET,
    resave: false,
    saveUninitialized: true,
    rolling: false, // No renueva la sesión automáticamente
    unset: "destroy", // Elimina la sesión cuando expira
    cookie: {
      httpOnly: true, // Evita que el token sea accedido por JavaScript
      secure: true, // true en producción con HTTPS
      maxAge: 30 * 60 * 1000, // Expira en 30 minutos
    },
  })
);

// Rutas de la API
app.use("/api", authRouter);
app.use("/api", turnosRouter);
app.use("/api", barberosRouter);
app.use("/", dashboardRouter);

// Para todas las demás rutas, sirve el archivo index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Middleware para manejar errores 404 (esto no se ejecutará si se sirve index.html)
app.use((req, res) => {
  res.status(404).send("<h1>404 - Página no encontrada</h1>");
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
