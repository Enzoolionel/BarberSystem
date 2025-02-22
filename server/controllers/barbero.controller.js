import Barbero from "../models/barberos.model.js";

export const addBarbero = async (req, res) => {
  const { nombre, especialidad, horarios } = req.body;

  const newBarbero = {
    nombre,
    especialidad,
    horarios: {
      lunes: horarios.lunes,
      martes: horarios.martes,
      miercoles: horarios.miercoles,
      jueves: horarios.jueves,
      viernes: horarios.viernes,
      sabados: horarios.sabado,
    },
  };

  try {
    const barbero = new Barbero(newBarbero);
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

export const getBarberoID = async (req, res) => {
  const { id } = req.params;

  try {
    const barbero = await Barbero.findById(id);

    if (!barbero)
      return res.status(404).json({ message: "Barbero no encontrado" });

    res.json(barbero);
  } catch (error) {
    console.log(error);
  }
};
