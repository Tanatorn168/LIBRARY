import { createAuthers } from "./db/createAuthers";
import { createBooks } from "./db/createBooks";
import { createMembers } from "./db/createMembers";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
createAuthers()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

createBooks()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

createMembers()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
