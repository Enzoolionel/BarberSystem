import mongoose from "mongoose";

const turnSchema = new mongoose.Schema({
  email: String,
  subject: String,
  text: String,
  dia: String,
  hora: String,
  cliente: String,
});

export const Turn = mongoose.model("Turn", turnSchema);
