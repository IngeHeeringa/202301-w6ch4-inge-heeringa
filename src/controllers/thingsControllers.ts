import things from "../data/things.js";
import { type Request, type Response } from "express";

export const getThings = (req: Request, res: Response) => {
  res.status(200).json({ things });
};
