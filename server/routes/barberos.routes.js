import { Router } from "express";
import {
  addBarbero,
  getAllBarberos,
} from "../controllers/barbero.controller.js";

const barberosRouter = Router();

barberosRouter.get("/barberos", getAllBarberos);
barberosRouter.post("/barberos", addBarbero);

export default barberosRouter;
