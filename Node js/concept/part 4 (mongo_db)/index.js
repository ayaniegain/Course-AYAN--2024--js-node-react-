import express from "express";
import connectDB from "./DB/connectDB.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

import { router as userRouter } from "./router/user.router.js";
import { router as postRouter } from "./router/post.router.js";
const app = express();
connectDB();

const port = process.env.PORT;

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/", userRouter);
app.use("/api/v1/", postRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
