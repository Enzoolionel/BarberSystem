import { Router } from "express";
import { addTurno, getAllTurns } from "../controllers/turnos.controller.js";

const router = Router();

router.get("/turnos", getAllTurns);
router.post("/turnos", addTurno);

// router.post("/send", sendMail);

export default router;
