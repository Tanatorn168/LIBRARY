import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createAuthers() {
  // Array of authors to be added
  const authors = [
    {
      id: 1,
      firstName: 'George',
      lastName: 'Orwell',
      affiliation: 'Independent Writer',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Austen',
      affiliation: 'British Literature Society',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      firstName: 'F. Scott',
      lastName: 'Fitzgerald',
      affiliation: 'American Writers Guild',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      firstName: 'J.K.',
      lastName: 'Rowling',
      affiliation: 'Bloomsbury Publishing',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      firstName: 'Harper',
      lastName: 'Lee',
      affiliation: 'Independent Writer',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]

  // Insert authors into the database
  for (const author of authors) {
    await prisma.author.create({
      data: {
        id: author.id,
        firstName: author.firstName,
        lastName: author.lastName,
        affiliation: author.affiliation,
        createdAt: author.createdAt,
        updatedAt: author.updatedAt,
      },
    })
  }

  console.log('Authors have been added to the database.')
}