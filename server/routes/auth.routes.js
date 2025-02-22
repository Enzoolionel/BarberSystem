import { Router } from "express";
import { login, register, logout } from "../controllers/auth.controller.js";
import verifyToken from "../middlewares/auth.Middleware.js";

const authRouter = Router();

// authRouter.get("/verify", verifyToken, (req, res) => {
//   res.json({ authenticated: true, user: req.user });
// });
authRouter.post("/login", login);
authRouter.post("/register", register);
authRouter.post("/logout", logout);

export default authRouter;
