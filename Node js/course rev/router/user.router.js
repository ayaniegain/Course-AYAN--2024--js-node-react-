import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
  userLogin,
  userRegister,
} from "../controller/user.controller.js";

let router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export { router };
