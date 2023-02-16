import { Router } from "express";
import {
  getThings,
  getThingById,
  deleteThingById,
} from "../controllers/thingsControllers.js";

const thingsRouter = Router();

thingsRouter.get("/things", getThings);
thingsRouter.get("/things/:id", getThingById);
thingsRouter.delete("/things/:id", deleteThingById);

export default thingsRouter;
