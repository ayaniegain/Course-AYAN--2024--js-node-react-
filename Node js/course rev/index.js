import express from "express";
import dotenv from "dotenv";
import { router as userRouter } from "./router/user.router.js";
import { CREATE_CONNECTION } from "./database/db.js";
import cors from "cors";
let app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors(
  {
    origin:"http://localhost:5173/"
  }
));
CREATE_CONNECTION();

dotenv.config();

let PORT = process.env.PORT;

app.use("/api/v1/user/", userRouter);

app.listen(PORT, () => {
  console.log(`<<<---APP IS RUNNING ON PORT ${PORT}--->>>`);
});
