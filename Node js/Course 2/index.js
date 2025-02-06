import express from "express";
const app = express();

let product = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
  { id: 4, name: "Product 4", price: 400 },
  { id: 5, name: "Product 5", price: 500 },
];

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/products", (req, res) => {
  res.send("prod");
});

app.get("/products/:prodId", (req, res) => {
  let { prodId } = req.params;

  let singleProduct = product.find((prod) => prod.id === Number(prodId));
  res.send(singleProduct);
});

let PORT = 8000;
app.listen(PORT, () => {
  console.log("app running on port no", PORT);
});
