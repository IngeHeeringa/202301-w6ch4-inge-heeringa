import { Router } from "express";
import {
  getThings,
  getThingById,
  deleteThingById,
  createThing,
  modifyThing,
} from "../controllers/thingsControllers.js";

const thingsRouter = Router();

thingsRouter.get("/things", getThings);
thingsRouter.get("/things/:id", getThingById);
thingsRouter.delete("/things/:id", deleteThingById);
thingsRouter.post("/things", createThing);
thingsRouter.put("/things", modifyThing);

export default thingsRouter;
