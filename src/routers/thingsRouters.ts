import { Router } from "express";
import { getThings, getThingById } from "../controllers/thingsControllers.js";

const thingsRouter = Router();

thingsRouter.get("/things", getThings);
thingsRouter.get("/things/:id", getThingById);

export default thingsRouter;
