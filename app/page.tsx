import prisma from "@/lib/prisma";
import User from "./user";

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <main>
      <h1 className="font-bold">Users</h1>
      <ul>
        {users.map((user) => (
          <User user={user}></User>
        ))}
      </ul>
    </main>
  );
}
