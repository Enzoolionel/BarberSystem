import mongoose from "mongoose";

const horarioSchema = new mongoose.Schema({
  inicio: String,
  fin: String,
});

const barberoSchema = new mongoose.Schema({
  nombre: String,
  especialidad: String,
  horarios: {
    lunes: horarioSchema,
    martes: horarioSchema,
    miercoles: horarioSchema,
    jueves: horarioSchema,
    viernes: horarioSchema,
    sabados: horarioSchema,
  },
});
const Barbero = mongoose.model("Barbero", barberoSchema, "barberos");

export default Barbero;
