import { Request, Response } from "express";
import * as networkService from "../services/networkService.js";

export async function createNetwork(req: Request, res: Response) {
  const { user } = res.locals;
  const network = req.body;

  await networkService.createNetwork(user, network);
  res.sendStatus(201); // created
}
