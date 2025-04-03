import express from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
  userLogin,
  userRegister,
} from "../controller/user.controller.js";
import logMiddleware from "../middleware/log.middleware.js";
let router = express.Router();

router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/", getAllUsers);
router.get("/:id", logMiddleware, getUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export { router };
