import React from "react";
import BookDetails from "./BookDetails";
import FeaturesBook from "./FeaturesBook";

function BookRow({ book }) {
  const { title, author, featured } = book;
  return (
    <div>
      <BookDetails title={title} author={author} />
      <FeaturesBook featured={featured} />
    </div>
  );
}

export default BookRow;
 