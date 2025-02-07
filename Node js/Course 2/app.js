import express from "express";
import fs from "fs";
let app = express();
app.use(express.json())
let sampleBooks = JSON.parse(fs.readFileSync("./data/sample.json"));
let PORT = 8000;

app.get("/", (req, res) => {
  res.send({ message: "Getting all Books" });
});

app.get("/book", (req, res) => {
  res.json(sampleBooks);
});

app.get("/book/:bookId", (req, res) => {
  let { bookId } = req.params;
  let book = sampleBooks.find((book) => book.id === Number(bookId));
  if (book) {
    res.status(200).json(book);
  } else {
    res.status(400).json({ message: "book not found this Id" });
  }
});

app.post("/add", (req, res) => {
  let newBook = {
    id: sampleBooks.length + 1,
    name: "Gunnin Great ",
    price: 60.99,
    quantity: 2,
    author: "MM. fcott ",
    details: "hello this is gunnin gook, nice story.",
  };

  sampleBooks.push(newBook);
  res
    .status(200)
    .json({ message: "new book added successfully", data: sampleBooks });
});

app.delete("/delete/:bookId", (req, res) => {
  let { bookId } = req.params;
  let book = sampleBooks.filter((book) => book.id !== Number(bookId));

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(400).json({
      message: "no book found in thid id",
    });
  }
});

app.put("/update/:bookId", (req, res) => {
  let { bookId } = req.params;

  let book = sampleBooks.find((book) => book.id === Number(bookId));

  if (book) {
    console.log(book)
    book.price = req.body.price || book.price;
    res.status(200).json(book);
  } else {
    res.status(400).json({
      message: "no book found in thid id",
    });
  }
});

app.listen(PORT, () => {
  console.log("App is running on port", PORT);
});
