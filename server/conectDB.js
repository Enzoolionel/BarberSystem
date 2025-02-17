import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { DB_URI } = process.env;

export const connectDB = () => {
  try {
    mongoose.connect(DB_URI).catch((error) => console.log(error));
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
