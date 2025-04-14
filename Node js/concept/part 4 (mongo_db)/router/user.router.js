import express from "express";
const app = express();
const router = express.Router();
import {
  createUser,
  loginUser,
  logoutUser,
} from "../controller/user.controller.js";

router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);

export { router };
