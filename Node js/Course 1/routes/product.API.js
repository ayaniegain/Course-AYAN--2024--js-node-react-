const express = require("express");
const app = express();
const router = express.Router();
app.use(router);

const {
  createProduct,
  readProductData,
  updateProduct,
  deleteProduct,
  getAllProduct,
} = require("../controller/product.Controller");

router
  .get("/", getAllProduct)
  .get("/:id", readProductData)
  .post("/", createProduct)
  .patch("/:id", updateProduct)
  .delete("/:id", deleteProduct);

module.exports = router;
