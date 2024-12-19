const express = require("express");
const productRouter = require("./routes/product.API");
const userRouter = require("./routes/user.API");
const app = express();
app.use(express.json()); 

app.use("/products",  productRouter);
app.use("/users", userRouter );

app.listen(8000, () => {
  console.log("server running");
});
 