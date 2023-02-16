import things from "../data/things.js";
import { type Request, type Response } from "express";
import { type ThingStructure } from "../types.js";

export const getThings = (req: Request, res: Response) => {
  res.status(200).json({ things });
};

export const getThingById = (req: Request, res: Response) => {
  const { id } = req.params;

  const thingById = things.find((thing) => thing.id === +id);

  res.status(200).json({ thingById });
};

export const deleteThingById = (req: Request, res: Response) => {
  const { id } = req.params;

  const thingById = things.findIndex((thing) => thing.id === +id)!;

  things.splice(thingById, 1);

  res.status(200).json({ things });
};

export const createThing = (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    ThingStructure
  >,
  res: Response
) => {
  const newThing = req.body;

  things.push({ ...newThing, id: Date.now() });

  res.status(201).json({ things });
};

export const modifyThing = (
  req: Request<
    Record<string, unknown>,
    Record<string, unknown>,
    ThingStructure
  >,
  res: Response
) => {
  const { id, name } = req.body;

  const thingToModify = things.find((thing) => thing.id === id);
  const indexThingToModify = things.indexOf(thingToModify!);

  if (!thingToModify) {
    res.status(404).json({ error: "Thing not found" });
    return;
  }

  things[indexThingToModify].name = name ? name : thingToModify.name;

  res.status(201).json({ things });
};
