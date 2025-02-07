import React, { useContext } from "react";
import BookDetails from "./BookDetails";
import FeaturesBook from "./FeaturesBook";
import { CartContext } from "../context/user.context";

function BookRow({ book }) {
  const { title, author, featured } = book;
 const { dispatch}  = useContext(CartContext);
  let mybook= { 
    id: 4,
    name: 'Book D',
    quantity: 3,
    price: 15.5
}

function handleAddBook() {
  dispatch({ type: 'ADD_BOOK', payload: mybook });
}
  return (
    <div className="border p-4 rounded-lg shadow-md mb-4">
      <BookDetails title={title} author={author} />
      <FeaturesBook featured={featured} />
      <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded" onClick={handleAddBook}>
        Add Book
      </button>
    </div>
  );
}

export default BookRow;
