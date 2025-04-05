const express = require("express");
const app = express();
const router = express.Router();
app.use(router);

const {
  createUser,
  readUserData,
  updateUser,
  deleteUser,
  getAllUser,
} = require("../controller/user.Controller");

router
  .get("/", getAllUser)
  .get("/:id", readUserData)
  .post("/", createUser)
  .patch("/:id", updateUser)
  .delete("/:id", deleteUser);

module.exports = router;
