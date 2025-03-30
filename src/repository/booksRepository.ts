import { books } from '../models/books' // Import the books array
import type { Book } from '../models/books'

// Function to get a book by its title
export function getBookByTitle(title: string): Promise<Book | undefined> {
  return Promise.resolve(
    books.find((book) => book.title.toLowerCase() === title.toLowerCase())
  )
}

// Function to get all books
export function getAllBooks(): Promise<Book[]> {
  return Promise.resolve(books)
}

// Function to add a new book
export function addBook(newBook: Book): Promise<Book> {
  newBook.id = books.length + 1 // Assign a new ID based on the current length of the books array
  books.push(newBook) // Add the new book to the array
  return Promise.resolve(newBook)
}