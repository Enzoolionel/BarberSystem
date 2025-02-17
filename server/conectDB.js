import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { DB_URI } = process.env;

export const connectDB = async () => {
  try {
    if (!DB_URI) {
      throw new Error(
        "Error: DB_URI no está definida en las variables de entorno."
      );
    }

    await mongoose.connect(DB_URI);

    console.log("✅ MongoDB conectado exitosamente");
  } catch (error) {
    console.error("❌ Error al conectar con MongoDB:", error.message);
    process.exit(1); // Detiene el servidor si la conexión falla
  }
};
