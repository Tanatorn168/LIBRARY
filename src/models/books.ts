import { Author } from './authers'
import { Borrowing } from './borrowing'

export interface Book {
  id: number
  inbs: string
  title: string
  category: string
  author: Author[] // Array of authors associated with the book
  authorId: number // Foreign key reference to the author
  borrowing: Borrowing[] // Array of borrowing records
  createdAt: Date
  updatedAt: Date
}

const books: Book[] = [
  {
    id: 1,
    inbs: '9780451524935',
    title: '1984',
    category: 'Dystopian',
    author: [], // This can be populated with actual Author objects if needed
    authorId: 1,
    borrowing: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    inbs: '9780141439518',
    title: 'Pride and Prejudice',
    category: 'Romance',
    author: [],
    authorId: 2,
    borrowing: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    inbs: '9780743273565',
    title: 'The Great Gatsby',
    category: 'Classic',
    author: [],
    authorId: 3,
    borrowing: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    inbs: '9780439139601',
    title: 'Harry Potter and the Goblet of Fire',
    category: 'Fantasy',
    author: [],
    authorId: 4,
    borrowing: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    inbs: '9780061120084',
    title: 'To Kill a Mockingbird',
    category: 'Fiction',
    author: [],
    authorId: 5,
    borrowing: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export { books }