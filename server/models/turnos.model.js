import mongoose from "mongoose";

const turnSchema = new mongoose.Schema({
  email: String,
  telefono: String,
  dia: String,
  hora: String,
  cliente: String,
  estado: String,
});

export const Turn = mongoose.model("Turn", turnSchema, "turnos");
