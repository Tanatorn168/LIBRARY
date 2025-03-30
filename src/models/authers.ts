import { Book } from './books'

export interface Author {
  id: number
  firstName: string
  lastName: string
  affiliation: string
  books: Book[]
  createdAt: Date
  updatedAt: Date
}

// Correctly defined authors array
const authors: Author[] = [
  {
    id: 1,
    firstName: 'George',
    lastName: 'Orwell',
    affiliation: 'Independent Writer',
    books: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Austen',
    affiliation: 'British Literature Society',
    books: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 3,
    firstName: 'F. Scott',
    lastName: 'Fitzgerald',
    affiliation: 'American Writers Guild',
    books: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 4,
    firstName: 'J.K.',
    lastName: 'Rowling',
    affiliation: 'Bloomsbury Publishing',
    books: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 5,
    firstName: 'Harper',
    lastName: 'Lee',
    affiliation: 'Independent Writer',
    books: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
]

export { authors }