import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";
import { router as bookRouter } from "./routes/book.router.js";
import { router as authRouter } from "./routes/auth.router.js";
const app = express();
dotenv.config();
app.use(express.json());
connectDB();
let port = process.env.PORT || 8080;

app.use("/api/v1/", bookRouter)
app.use("/api/v1/", authRouter);

app.listen(port, () => {
  console.log(`PORT is RUNNING on ${port}....`);
});
