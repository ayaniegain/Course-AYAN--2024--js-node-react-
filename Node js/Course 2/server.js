import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./database/db.js";
import router from "./routes/user.router.js";
const app = express();
app.use(express.json());
connectDB();
dotenv.config();
let port = process.env.PORT;

app.use("/api/v1/", router);

app.listen(port, () => {
  console.log(`PORT is RUNNING on ${port}....`);
});
