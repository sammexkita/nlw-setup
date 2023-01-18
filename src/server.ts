import Fatisfy from "fastify";
import { PrismaClient } from "@prisma/client";

const app = Fatisfy();
const prisma = new PrismaClient();

app.get("/", async (req, res) => {
  const habits = await prisma.habit.findMany({
    where: {
      title: {
        startsWith: "Beber"
      }
    }
  });

  return habits;
});

app.listen({
  port: 3333,
}).then(() => {
  console.log("Server is running on port 3333 🚀");
});