import React from "react";
import BookRow from "./BookRow";

function BookList() {
  let BOOKS = [
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      featured: true,
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      featured: false,
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      featured: true,
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      featured: false,
    },
    {
      id: 5,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      featured: true,
    },
  ];

  return (
    <ul>
      {BOOKS.map((book) => (
        <li key={book.id}>
          <BookRow book={book} />
        </li>
      ))}
    </ul>
  );
}

export default BookList;
