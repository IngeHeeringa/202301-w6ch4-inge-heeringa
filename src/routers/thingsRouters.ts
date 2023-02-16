import { Router } from "express";
import {
  getThings,
  getThingById,
  deleteThingById,
  createThing,
} from "../controllers/thingsControllers.js";

const thingsRouter = Router();

thingsRouter.get("/things", getThings);
thingsRouter.get("/things/:id", getThingById);
thingsRouter.delete("/things/:id", deleteThingById);
thingsRouter.post("/things", createThing);

export default thingsRouter;
