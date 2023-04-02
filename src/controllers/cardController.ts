import { Request, Response } from "express";
import * as cardService from "../services/cardService.js";

export async function createCard(req: Request, res: Response) {
  const { user } = res.locals;
  const card = req.body;

  await cardService.createCard(user, card);
  res.sendStatus(201); //created
}

export async function getAllUserCards(req: Request, res: Response) {
  const { user } = res.locals;

  const cards = await cardService.getAllUserCards(user.id);
  res.send(cards).status(200);
}

export async function getCard(req: Request, res: Response) {
  const cardId = parseInt(req.params.id);
  if (isNaN(cardId)) {
    res.sendStatus(422); // unprocessable entity
  }

  const { user } = res.locals;
  const card = await cardService.getCard(user, cardId);
  res.send(card).status(200);
}

export async function removeCard(req: Request, res: Response) {
  const cardId = parseInt(req.params.id);
  if (isNaN(cardId)) {
    res.sendStatus(422); // unprocessable entity
  }

  const { user } = res.locals;
  await cardService.removeCard(user, cardId);
  res.sendStatus(200);
}
