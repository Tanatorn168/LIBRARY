import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createBooks() {
  // Define the Book type
  type Book = {
    id: number
    inbs: string
    title: string
    category: string
    author?: undefined
    authorId: number
    borrowing: any[]
    createdAt: Date
    updatedAt: Date
  }

  // Array of books to be added
  const books: Book[] = [
    {
      id: 1,
      inbs: '9780451524935',
      title: '1984',
      category: 'Dystopian',
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
      authorId: 5,
      borrowing: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]

  // Insert books into the database
  for (const book of books) {
    await prisma.book.create({
      data: {
        id: book.id,
        isbn: book.inbs,
        title: book.title,
        category: book.category,
        authorId: book.authorId,
        createdAt: book.createdAt,
        updatedAt: book.updatedAt,
      },
    })
  }

  console.log('Books have been added to the database.')
}
