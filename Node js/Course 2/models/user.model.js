import mongoose from "mongoose";
const { Schema } = mongoose;

const USER = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

export const user = mongoose.model("user", USER);
