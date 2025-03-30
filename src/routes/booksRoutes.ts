import express, { Request, Response } from "express";
import {getAllBooks, getBookByTitle, addBook} from "../Services/bookService";
import type { Book } from "../models/books";
import exp from "constants";
const router = express.Router();

router.get("/", async(req, res) => {
  if (req.query.category) {
    const category = req.query.category;
    const filteredEvents = await getBookByTitle(category as string);
    res.json(filteredEvents);
  } else {
    res.json(await getAllBooks());
  }
});

router.get("/title/:title", async (req, res) => {
    const title = req.params.title;
    const book = await getBookByTitle(title as string);
    if (book) {
      res.json(book);
    } else {
      res.status(404).send("Book not found");
    }
  });
  

router.post("/", async (req, res) => {
  const newBook: Book = req.body;
  await addBook(newBook);
  res.json(newBook);
});

export default router;
