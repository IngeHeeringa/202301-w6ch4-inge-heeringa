import things from "../data/things.js";
import { type Request, type Response } from "express";

export const getThings = (req: Request, res: Response) => {
  res.status(200).json({ things });
};

export const getThingById = (req: Request, res: Response) => {
  const { id } = req.params;

  const thingById = things.find((thing) => +id === thing.id);

  res.status(200).json({ thingById });
};
