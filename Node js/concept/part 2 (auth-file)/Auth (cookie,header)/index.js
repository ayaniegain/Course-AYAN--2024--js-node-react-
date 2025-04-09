import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import {authMiddleWare,authHeaderToken} from "./middleware/auth.js";

let app = express();
dotenv.config();
let PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get("/alldata", authHeaderToken,(req, res) => {

  console.log(req.user)
  res.send("get all data");
});

app.post("/login",(req, res) => {
  console.log("LOGIN");

  var token = jwt.sign({ name: "USER1", role: "admin", email:"user@gmail.com" }, "Ayan@12345",{expiresIn: "1 h"});

  // res.cookie("token", token);

  res.setHeader('Authorization', `Bearer ${token}`);
  

  res.json({ message: "login successful", token });

});

app.post("/signup", (req, res) => {});``

app.get("/profile", authMiddleWare, (req, res) => {
  let logginUser = req?.name;

  console.log(logginUser);

  res.status(200).send(logginUser);
});

app.listen(PORT, () => {
  console.log(chalk.bgGreen(`App is rinning on ${PORT}........`));
});
