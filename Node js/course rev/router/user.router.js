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

let app = express();

let  logMiddleware=(req,res,next)=>{
  console.log("this is login middleware")
  next()
}

// app.use(logMiddleware)



router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/",logMiddleware, getAllUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);

export { router };
