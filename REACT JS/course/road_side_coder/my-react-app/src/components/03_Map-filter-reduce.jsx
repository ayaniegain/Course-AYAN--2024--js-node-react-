import React from "react";

let productList = [
  {
    id: 1,
    name: "Wireless Mouse",
    categories: ["Electronics", "Accessories"],
    price: 19.99,
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    categories: ["Electronics", "Audio"],
    price: 49.99,
  },
  {
    id: 3,
    name: "Yoga Mat",
    categories: ["Sports", "Fitness"],
    price: 25.99,
  },
  {
    id: 4,
    name: "Ceramic Mug",
    categories: ["Home", "Kitchen"],
    price: 12.99,
  },
  {
    id: 5,
    name: "LED Desk Lamp",
    categories: ["Home", "Office"],
    price: 34.99,
  },
];

let heading = {
  color: "red",
  fontSize: "20px",
  textTransform: "uppercase",
};

// let all= productList.filter((e)=>e.price>20)
//     .map((e)=>{
//     return{
//         ...e, discoundPrice:e.price+10
//     }
// })

// console.log(all)

let arr = ["bob", "max", "charlie", "bob", "max", "pitter"];

// let res= arr.filter((e,i)=>{
//   return arr.indexOf(e)==i
// })

// console.log(res)

// let uniqueperson= [...new Set(arr)]
// console.log(uniqueperson)

function Concept() {
  return (
    <>
      <h1 style={heading}>All product list </h1>
      <div>
        {productList.map((item) => (
          <h2 key={item.id}>
            product name is- {item.name}, price- {item.price} & categories{" "}
            {item.categories.join("-")}
          </h2>
        ))}
      </div>
      <h1 style={heading}>filter the product with categories "Home"</h1>
      <div>
        {productList
          .filter((product) => product.categories.includes("Home"))
          .map((e) => (
            <h2 key={e.id}>{e.name}</h2>
          ))}
      </div>
      <h1 style={heading}>summery of a total price of product</h1>
      <div>
        <h2>
          Total product price is. RS:{" "}
          {productList.reduce((prev, curr) => curr.price + prev, 0)}
        </h2>
      </div>

      <h1 style={heading}>
        Apply 10% discound of each product more then 20 rs
      </h1>
      <div>
        {productList
          .map((item) => {
            if (item.price > 20) {
              item.price = item.price - item.price * 0.1;
            }

            return item;
          })
          .map((e) => (
            <h2 key={e.id}>
              Product:{e.name} - price: {e.price.toFixed(2)}
            </h2>
          ))}
      </div>

      <div>
        <h2 style={heading}>write a unique elemnt from arry</h2>

        <div>
          {arr
            .filter((person, i) => arr.indexOf(person) === i)
            .map((e, i) => (
              <p key={i}>person's are {e}</p>
            ))}
        </div>
      </div>
    </>
  );
}

export default Concept;
