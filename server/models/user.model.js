import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nombre: String,
  alias: String,
  password: String,
  role: { type: String, enum: ["admin", "barbero"], default: "barbero" },
  email: String,
});

const User = mongoose.model("User", userSchema, "users");
export default User;
