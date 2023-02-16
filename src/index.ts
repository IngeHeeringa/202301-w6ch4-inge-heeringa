import "./loadEnvironment.js";
import express from "express";
import morgan from "morgan";
import createDebug from "debug";
import thingsRouter from "./routers/thingsRouters.js";

const app = express();
const port = process.env.PORT ?? 4000;

const debug = createDebug("things:root");

app.use(morgan("dev"));

app.use(express.json());
app.use("/", thingsRouter);

app.listen(port);
