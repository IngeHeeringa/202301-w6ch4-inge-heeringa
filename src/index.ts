import "./loadEnvironment.js";
import questions from "./questions.js";
import express from "express";
import morgan from "morgan";
import thingsRouter from "./routers/thingsRouters.js";
import inquirer from "inquirer";
import { type UserAnswers } from "./types.js";

export let isAuthorized: boolean;
const program = async () => {
  const answers = (await inquirer.prompt(questions)) as UserAnswers;
  const port = answers.port ?? 4000;

  isAuthorized = answers.isAuthorized;

  const app = express();

  app.use(morgan("dev"));
  app.use(express.json());
  app.use("/", thingsRouter);

  app.use((req, res) => {
    res.status(404).json({ error: "Endpoint not found" });
  });

  app.listen(port, () => {
    console.log(`Listening on ${port}`);
  });
};

await program();
