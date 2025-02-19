import mongoose, { Schema } from "mongoose";

let USER = new Schema(
  {
    username: {
      type: String,
      unique: true,
      lowercase: true 

    },
    email: {
      type: String,
      unique: true,
      required: true,
      lowercase: true 

    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
      lowercase: true 
    },
  },
  {
    timestamps: true,
  }
);
export let user = mongoose.model("user", USER);
