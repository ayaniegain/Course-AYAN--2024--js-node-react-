import express from "express";
const router = express.Router();
import { createUser, getAllUser } from "../controller/user.controller.js";


// Add routes
router.get("/", getAllUser);
router.post("/", createUser);

export default router;
