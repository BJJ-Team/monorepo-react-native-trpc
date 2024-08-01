import { PrismaClient } from "@prisma/client";
import { seedDatabase } from "./databaseSeeding";

const db = new PrismaClient();

seedDatabase()
  .then(async () => {
    await db.$disconnect();
    process.exit(0);
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
