import express from "express";
const router = express.Router();
import { createBook, deleteBook, findBook, getAllBooks, updateBook } from "../controller/book.controller.js";

// Add routes
router.get("/", getAllBooks);
router.get("/get/:id", findBook);
router.post("/add", createBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

export { router };
