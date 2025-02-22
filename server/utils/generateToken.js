import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;

const generateToken = (res, user) => {
  const token = jwt.sign({ userId: user._id, role: user.role }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.cookie("token", token, {
    maxAge: 60 * 60 * 1000, // 1h
    httpOnly: true,
    // secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  });
};

export default generateToken;
