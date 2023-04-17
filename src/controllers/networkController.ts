import { Request, Response } from "express";
import * as networkService from "../services/networkService.js";

export async function createNetwork(req: Request, res: Response) {
  const { user } = res.locals;
  const network = req.body;

  await networkService.createNetwork(user, network);
  res.sendStatus(201); // created
}

export async function getAllUserNetworks(req: Request, res: Response) {
  const { user } = res.locals;
  const network = await networkService.getAllUserNetworks(user.id);

  res.status(200).send(network);
}

export async function getNetwork(req: Request, res: Response) {
  const { user } = res.locals;
  const networkId = parseInt(req.params.id);
  if (isNaN(networkId)) {
    res.sendStatus(422); // unprocessable entity
  }

  const network = await networkService.getNetwork(user, networkId);
  res.send(network).status(200);
}

export async function removeNetwork(req: Request, res: Response) {
  const { user } = res.locals;
  const networkId = parseInt(req.params.id);
  if (isNaN(networkId)) {
    res.sendStatus(422); // unprocessable entity
  }

  await networkService.removeNetwork(user, networkId);
  res.sendStatus(200);
}
