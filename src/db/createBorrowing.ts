import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Array of borrowing records to be added
  const borrowings = [
    {
      memberId: 1, // Ensure this matches an existing member ID in your database
      bookId: 1,   // Ensure this matches an existing book ID in your database
      dueDate: new Date('2025-04-15'),
    },
    {
      memberId: 2,
      bookId: 2,
      dueDate: new Date('2025-04-20'),
    },
    {
      memberId: 3,
      bookId: 3,
      dueDate: new Date('2025-04-25'),
    },
    {
      memberId: 4,
      bookId: 4,
      dueDate: new Date('2025-05-01'),
    },
  ]

  // Insert borrowing records into the database
  for (const borrowing of borrowings) {
    await prisma.borrowing.create({
      data: borrowing,
    })
  }

  console.log('Borrowing records have been added to the database.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })