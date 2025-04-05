import express from "express";

import { createMovie, deleteMovie, getAllMovies, getSingleMovie, updateMovie } from "../controller/movie.controller.js";
import varifyUserLogin from "../middleware/auth.middleware.js";
let router = express.Router();

router.post("/add", createMovie);
router.get("/",varifyUserLogin, getAllMovies);
router.get("/:id", getSingleMovie);
router.delete("/:id", deleteMovie);
router.patch("/:id", updateMovie);

export { router };
