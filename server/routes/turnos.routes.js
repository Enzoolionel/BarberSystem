import { Router } from "express";
import { addTurno, getAllTurns } from "../controllers/turnos.controller.js";
import verifyToken from "../middlewares/auth.Middleware.js";
import verifyRole from "../middlewares/role.moddleware.js";

const turnosRouter = Router();

turnosRouter.get("/turnos", verifyToken, getAllTurns);
turnosRouter.post("/turnos", addTurno);

// router.post("/send", sendMail);

export default turnosRouter;
