import express from "express";

import {
  editPost,
  getAllpost,
  likePost,
  postCreate,
} from "../controller/post.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";
const app = express();
const router = express.Router();

router.post("/addpost", isLoggedIn, upload.single('postimage'), postCreate);
router.get("/", isLoggedIn, getAllpost);
router.get("/like/:id", isLoggedIn, likePost);
router.patch("/edit/:id", isLoggedIn, editPost);

export { router };
