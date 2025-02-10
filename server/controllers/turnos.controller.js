import transporter from "../config/nodemailerConfig.js";

export const sendMail = async (req, res) => {
  const { to, subject, text } = req.body;

  console.log(req.body);

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    });

    res.status(200).json({ message: "Correo enviado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al enviar el correo" });
  }
};
