import Barbero from "../models/barberos.model.js";

export const addBarbero = async (req, res) => {
  const { nombre, especialidad, horarios } = req.body;

  try {
    const barbero = new Barbero({ nombre, especialidad, horarios });
    await barbero.save();

    return res.status(200).json({ message: "Nuevo barbero agregado" });
  } catch (err) {
    console.log(err);
  }
};

export const getAllBarberos = async (req, res) => {
  const barberos = await Barbero.find({});

  res.json(barberos);
};
