
let product = require("../view/dummy.products.json");
let { products } = product;

const createProduct = (req, res) => {
  let addproduct = req.body;

  products.push(addproduct);

  console.log(products);
  res.status(200).send(products);
};


const getAllProduct=(req,res)=>{

    res.status(200).send(products)

}


const readProductData = (req, res) => {
  let productId = +req.params["id"];

  let product = products.find((prod) => prod.id == productId);

  console.log(product);
  res.send(product);
};

const updateProduct=(req, res) => {
    let productId = +req.params["id"];
  
    if (productId) {
        
        let index = products.findIndex((item) => item.id == productId);
        
          products[index]={...products[index],...req.body}
    }
  
    res.send(products);
  }

  const deleteProduct=(req, res) => {
    let productId = +req.params["id"];
  
    if (productId) {
        
     index=  products.findIndex((item) => item.id != productId);

      products=products.splice(index,1)
        
    res.send(products);
    }
  
  }

  module.exports={createProduct,getAllProduct,readProductData,updateProduct,deleteProduct}