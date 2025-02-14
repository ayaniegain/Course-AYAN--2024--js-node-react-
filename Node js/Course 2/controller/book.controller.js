import { book } from "../models/book.model.js";

// Create a new book
const createBook = async (req, res) => {
  try {
    const newBook = new book(req.body);
    const savedBook = await newBook.save();
    res.status(201).json({ message: "Book created successfully", data: savedBook });
  } catch (error) {
    res.status(500).json({ message: "Error creating book", error: error.message });
  }
};

// Get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await book.find();
    res.status(200).json({ message: "Books fetched successfully", data: books });
  } catch (error) {
    res.status(500).json({ message: "Error fetching books", error: error.message });
  }
};

// Get a single book by ID
const findBook = async (req, res) => {
  try { 
    const { id } = req.params;
    const singleBook = await book.findById(id);
    if (!singleBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book fetched successfully", data: singleBook });
  } catch (error) {
    res.status(500).json({ message: "Error fetching book", error: error.message });
  }
};

// Update a book by ID
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const updatedBook = await book.findByIdAndUpdate(
      id,
      { $set: { title } },
      { new: true } // Returns the updated document
    );
    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book updated successfully", data: updatedBook });
  } catch (error) {
    res.status(500).json({ message: "Error updating book", error: error.message });
  }
};

// Delete a book by ID
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await book.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully", data: deletedBook });
  } catch (error) {
    res.status(500).json({ message: "Error deleting book", error: error.message });
  }
};

export { getAllBooks, createBook, findBook, deleteBook, updateBook };
