import { Router } from "express";
import { getThings } from "../controllers/thingsControllers.js";

const thingsRouter = Router();

thingsRouter.get("/things", getThings);

export default thingsRouter;
