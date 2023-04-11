import { User } from "@prisma/client";
import * as cardRepository from "../repositories/cardRepository.js";
import { createCardData } from "../types/CardType.js";
import { conflictError, notFoundError } from "../utils/errorUtils.js";
import { decryptAddedPassword, encryptAddedPassword } from "../utils/passwordUtils.js";

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
  const cards = await cardRepository.getAll(userId);
  return cards.map(card => {
    return {
      ...card,
      password: decryptAddedPassword(card.password),
      securityCode: decryptAddedPassword(card.securityCode)
    };
  });
}

export async function getCard(user: User, cardId: number) {
  const card = await cardRepository.getCard(user.id, cardId);
  if (!card) throw notFoundError("Card doesn't exist");

  return {
    ...card,
    password: decryptAddedPassword(card.password),
    securityCode: decryptAddedPassword(card.securityCode)
  };
}

export async function removeCard(user: User, cardId: number) {
  await getCard(user, cardId);
  await cardRepository.removeCard(cardId);
}
