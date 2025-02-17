import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path"; // Importa el módulo path para manejar rutas de archivos
import { fileURLToPath } from "url"; // Necesario para usar __dirname en ES Modules

dotenv.config();

import router from "./routes/turnos.routes.js";
import { connectDB } from "./conectDB.js";

const app = express();

// Configura __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(express.json());
app.use(cors());

// Sirve los archivos estáticos de la aplicación React
app.use(express.static(path.join(__dirname, "dist")));

// Conecta a la base de datos
connectDB();

// Rutas de la API
app.use("/api", router);
app.use("/email", router);

// Para todas las demás rutas, sirve el archivo index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Middleware para manejar errores 404 (esto no se ejecutará si se sirve index.html)
app.use((req, res) => {
  res.status(404).send("<h1>404 - Página no encontrada</h1>");
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
