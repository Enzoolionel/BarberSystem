import transporter from "../config/nodemailerConfig.js";
import { Turn } from "../models/turnos.model.js";

export const sendMail = async (req, res) => {
  const { dia, hora, cliente, email } = req.body;
  console.log(req.body);

  const text = `Hola ${cliente} Su turno es el dia ${dia} a las ${hora}hs Muchas gracias`;
  const subject = "Asunto del correo";

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject,
      text,
    });

    const turn = new Turn({ email, subject, text, dia, hora, cliente });
    await turn.save();

    res.status(200).json({ message: "Correo enviado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al enviar el correo" });
  }
};
