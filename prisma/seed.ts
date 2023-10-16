import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: "user1",
      username: "user1",
      password: "123",
    },
  });
  await prisma.user.create({
    data: {
      name: "user2",
      username: "user2",
      password: "123",
    },
  });
  await prisma.user.create({
    data: {
      name: "user3",
      username: "user3",
      password: "123",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
