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

  const text = `Hola ${cliente} Su turno es el dia ${dia} a las ${hora}hs Muchas gracias`;
  const subject = "Turno Barberia";

  console.log(req.body);

  try {
    const turn = new Turn({ dia, hora, cliente, email, telefono });
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

export const getAllTurns = async (req, res) => {
  const turns = await Turn.find({});

  res.json(turns);
};
