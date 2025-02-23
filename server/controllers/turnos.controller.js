import transporter from "../config/nodemailerConfig.js";
import { Turn } from "../models/turnos.model.js";

const { EMAIL_USER } = process.env;

// export const sendMail = async (req, res) => {
//   const text = `Hola ${cliente} Su turno es el dia ${dia} a las ${hora}hs Muchas gracias`;
//   const subject = "Asunto del correo";

//   try {
//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject,
//       text,
//     });

//     const turn = new Turn({ email, telefono, dia, hora, cliente });
//     await turn.save();

//     res.status(200).json({ message: "Correo enviado exitosamente" });
//   } catch (error) {
//     res.status(500).json({ error: "Error al enviar el correo" });
//   }
// };

export const addTurno = async (req, res) => {
  const { dia, hora, cliente, email, telefono } = req.body;

  const text = `Hola ${cliente} 🧑 Tu turno es el dia ${dia} a las ${hora}hs ⌚ Muchas gracias.
    Puede editar o eliminar este turno ingresando a: http:localhost:3000/login
  `;
  const subject = "💈 Turno The Razor 💈";

  console.log(req.body);

  try {
    const turn = new Turn({
      dia,
      hora,
      cliente,
      email,
      telefono,
      estado: "Pendiente",
    });
    await turn.save();

    await transporter
      .sendMail({
        from: EMAIL_USER,
        to: email,
        subject,
        text,
      })
      .then(() => {
        console.log("Correo enviado correctamente");
      });
    return res.status(200).json({ message: "Turno agregado correctamente" });
  } catch (err) {
    console.log(err);
  }
};

// Función para obtener todos los turnos

export const getAllTurns = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      console.log(req.user.role);
      return res
        .status(403)
        .json({ message: "Acceso denegado. No tienes permiso." });
    }

    const turns = await Turn.find({});

    if (!turns.length) {
      return res.status(200).json({ message: "No hay turnos disponibles." });
    }

    res.json({ success: true, data: turns });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los turnos", error });
  }
};

export const updateTurno = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    const datoUpdated = await Turn.findByIdAndUpdate(id, body, { new: true });
    if (!datoUpdated) {
      return res.status(404).json({ message: "No se encontró el turno" });
    }

    res.status(200).json({ message: "Turno actualizado", turno: datoUpdated });
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el turno", error });
  }
};

export const deleteTurno = async (req, res) => {
  try {
    console.log("Usuario en sesión:", req.session.user); // Verifica si llega el usuario

    if (!req.session.user) {
      return res.status(401).json({ message: "No autorizado" });
    }

    const { id } = req.params;
    const deletedTurno = await Turn.findByIdAndDelete(id);

    if (!deletedTurno) {
      return res.status(404).json({ message: "Turno no encontrado" });
    }

    res.status(200).json({ message: "Turno eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el turno", error });
  }
};
