import mongoose from "mongoose";
const { Schema } = mongoose;

const BOOK = new Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: ["100", "Book title can not be more than 100 characters"],
      unique: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      maxLength: ["50", "Author name can not be more than 50 characters"],
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const book = mongoose.model("book", BOOK);
