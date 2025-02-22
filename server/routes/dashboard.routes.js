import { Router } from "express";

import { dashboardController } from "../controllers/dashboard.controller.js";
import sessionMiddleware from "../middlewares/session.middlewares.js";

const dashboardRouter = Router();

//dashboardRouter.get("/panel-admin", sessionMiddleware, dashboardController);

export default dashboardRouter;
