import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongo_url = process.env.MONGO_URI;

if (!mongo_url) {
  console.error("MongoDB URI is not defined in environment variables.");
  process.exit(1);
}

export function connectDB() {
  mongoose
    .connect(mongo_url, {})
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
}
