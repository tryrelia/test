import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.item.createMany({
    data: [
      { title: "Set up the project" },
      { title: "Build something cool" },
      { title: "Ship it" },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
