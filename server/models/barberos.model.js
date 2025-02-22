import mongoose from "mongoose";

const barberoSchema = new mongoose.Schema({
  nombre: String,
  especialidad: String,
  horarios: {
    lunes: { inicio: String, fin: String },
    martes: { inicio: String, fin: String },
    miercoles: { inicio: String, fin: String },
    jueves: { inicio: String, fin: String },
    viernes: { inicio: String, fin: String },
    sabados: { inicio: String, fin: String },
  },
});
const Barbero = mongoose.model("Barbero", barberoSchema, "barberos");

export default Barbero;
