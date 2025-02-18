import { Router } from "express";
import { addTurno, getAllTurns } from "../controllers/turnos.controller.js";

const turnosRouter = Router();

turnosRouter.get("/turnos", getAllTurns);
turnosRouter.post("/turnos", addTurno);

// router.post("/send", sendMail);

export default turnosRouter;
