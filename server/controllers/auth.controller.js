import bcrypt from "bcryptjs";

import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Usuario y contraseña requeridos" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Verificar la contraseña
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Contraseña incorrecta" });
    }

    req.session.user = {
      id: user._id,
      email: user.email,
      name: user.name, // Guarda solo los datos necesarios
    };

    generateToken(res, user);

    console.log("Bienvenido: " + user);
    res.json({ message: "bienvenido", user });
  } catch (error) {
    res.status(500).json({ message: "Error en el servidor", error });
  }
};

export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Error al cerrar sesión" });
    }
    res.clearCookie("connect.sid"); // Asegura que la cookie de sesión también se elimine
    res.clearCookie("token"); // Asegura que la cookie de sesión también se elimine
    console.log("seccion cerrada con exito");
    return res.json({ success: true });
  });
};

export const register = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    // Verificar si el usuario ya existe
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "El usuario ya existe" });

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = { email, password: hashedPassword, role };

    const user = new User(newUser);
    await user.save();

    generateToken(res, user);

    res.status(201).json({ message: "usuario creado", user });
  } catch (error) {
    console.log(error);
  }
};
