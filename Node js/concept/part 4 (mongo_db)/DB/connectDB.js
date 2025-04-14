import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("connection successfull...");
  } catch (error) {
    console.log("connection error", error);
  }
}

export default connectDB;
