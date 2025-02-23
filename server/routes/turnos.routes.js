import { Router } from "express";
import {
  addTurno,
  getAllTurns,
  updateTurno,
  deleteTurno,
} from "../controllers/turnos.controller.js";
import verifyToken from "../middlewares/auth.Middleware.js";
import verifyRole from "../middlewares/role.moddleware.js";

const turnosRouter = Router();

turnosRouter.get("/turnos", verifyToken, getAllTurns);
turnosRouter.post("/turnos", addTurno);
turnosRouter.patch("/turnos/:id", updateTurno);
turnosRouter.delete("/turnos/:id", verifyToken, deleteTurno);

// router.post("/send", sendMail);

export default turnosRouter;
