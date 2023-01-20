import Fatisfy from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fatisfy();
const prisma = new PrismaClient();

app.register(cors);

app.get("/", async (req, res) => {
  const habits = await prisma.habit.findMany();

  return habits;
});

app.listen({
  port: 3333,
}).then(() => {
  console.log("Server is running on port 3333 🚀");
});