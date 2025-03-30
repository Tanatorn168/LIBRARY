import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createMembers() {
  // Array of members to be added
  const members = [
    {
      id: 1,
      memberId: 1001,
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: 1234567890,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      memberId: 1002,
      firstName: 'Jane',
      lastName: 'Smith',
      phoneNumber: 9876543210,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      memberId: 1003,
      firstName: 'Alice',
      lastName: 'Johnson',
      phoneNumber: 1122334455,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      memberId: 1004,
      firstName: 'Bob',
      lastName: 'Brown',
      phoneNumber: 6677889900,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      memberId: 1005,
      firstName: 'Charlie',
      lastName: 'Davis',
      phoneNumber: 5566778899,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]

  // Insert members into the database
  for (const member of members) {
    await prisma.member.create({
      data: {
        id: member.id,
        memberId: member.memberId.toString(),
        firstName: member.firstName,
        lastName: member.lastName,
        phoneNumber: member.phoneNumber.toString(),
        createdAt: member.createdAt,
        updatedAt: member.updatedAt,
      },
    })
  }

  console.log('Members have been added to the database.')
}

createMembers()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })