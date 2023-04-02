import { User } from "@prisma/client";
import * as cardRepository from "../repositories/cardRepository.js";
import { createCardData } from "../types/CardType.js";
import { conflictError, notFoundError } from "../utils/errorUtils.js";
import { encryptAddedPassword } from "../utils/passwordUtils.js";
import { not } from "joi";

export async function createCard(user: User, card: createCardData) {
  const titleInUse = await cardRepository.getCardByTitle(user.id, card.title);
  if (titleInUse) throw conflictError("Title already in use");

  const cardData: createCardData = {
    ...card,
    password: encryptAddedPassword(card.password),
    securityCode: encryptAddedPassword(card.securityCode)
  };

  await cardRepository.createCard(user.id, cardData);
}

export async function getAllUserCards(userId: number) {
  return await cardRepository.getAll(userId);
}

export async function getCard(user: User, cardId: number) {
  const card = await cardRepository.getCard(user.id, cardId);
  if (!card) throw notFoundError("Card not found");

  return card;
}

export async function removeCard(user: User, cardId: number) {
  await getCard(user, cardId);
  await cardRepository.removeCard(cardId);
}
