import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    postmessage: {
      type: String,
      required: true,
      trim: true,
    },
    imageUrl: {
      type: String,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const postModel = mongoose.model("Post", postSchema);

export { postModel };
