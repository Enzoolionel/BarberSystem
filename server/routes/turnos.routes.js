import { Router } from "express";
import { sendMail } from "../controllers/turnos.controller.js";

const router = Router();

router.post("/send", sendMail);

export default router;
