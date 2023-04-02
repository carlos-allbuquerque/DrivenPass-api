import { User } from "@prisma/client";
import * as cardRepository from "../repositories/CardRepository.js";
import { createCardData } from "../types/CardType.js";
import { conflictError } from "../utils/errorUtils.js";
import { encryptAddedPassword } from "../utils/passwordUtils.js";

export async function createCard(user: User, card: createCardData) {
  const titleInUse = await cardRepository.getCardByTitle(user.id, card.title);
  if (titleInUse) throw conflictError("Name already in use");

  const cardData: createCardData = {
    ...card,
    password: encryptAddedPassword(card.password),
    securityCode: encryptAddedPassword(card.securityCode)
  };

  await cardRepository.createCard(user.id, cardData);
}
