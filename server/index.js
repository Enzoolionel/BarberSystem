import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

import router from "./routes/turnos.routes.js";
import { connectDB } from "./conectDB.js";

const app = express();
app.use(express.json());
app.use(express.static("./dist"));
app.use(cors());
connectDB();

const { PORT } = process.env || 3000;

app.use("/api", router);
app.use("/email", router);

app.use("*", (req, res) => {
  res.sendFile("build", "index.html");
});

app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(PORT, () => {
  console.log(`server running in port ${PORT}`);
});
