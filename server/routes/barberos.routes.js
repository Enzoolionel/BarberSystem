import { Router } from "express";
import {
  addBarbero,
  getAllBarberos,
  getBarberoID,
} from "../controllers/barbero.controller.js";

const barberosRouter = Router();

barberosRouter.get("/barberos", getAllBarberos);
barberosRouter.get("/barberos/:id", getBarberoID);
barberosRouter.post("/barberos", addBarbero);

export default barberosRouter;
