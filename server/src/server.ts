import Fatisfy from "fastify";
import cors from "@fastify/cors";
import { appRoutes } from "./routes";

const app = Fatisfy();

app.register(cors);
app.register(appRoutes);

app.listen({
  port: 3333,
}).then(() => {
  console.log("Server is running on port 3333 🚀");
});