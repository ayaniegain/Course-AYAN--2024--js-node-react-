import express from "express";
import isLogin from "./custom_middleware.js";
const app = express();

let product = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
  { id: 4, name: "Product 4", price: 400 },
  { id: 5, name: "Product 5", price: 500 },
];

//middleware
const firstMiddleware=(req,res,next)=>{

  console.log(Date.now())

  next()

}

app.use(firstMiddleware)

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/products",isLogin, (req, res) => {
  res.send("prod");
});

app.get("/products/:prodId", (req, res) => {
  let { prodId } = req.params;

  let singleProduct = product.find((prod) => prod.id === Number(prodId));
  if (singleProduct) {
    res.status(200).send(singleProduct);
  } else {
    res.status(400).send("Product Not found!!");
  }
});

let PORT = 8000;
app.listen(PORT, () => {
  console.log("app running on port no", PORT);
});
