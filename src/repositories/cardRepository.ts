import { prisma } from "../db/db.js";
import { createCardData } from "../types/CardType.js";

export async function createCard(userId: number, card: createCardData) {
  return await prisma.card.create({
    data: { ...card, userId }
  });
}

export async function getCardByTitle(userId: number, title: string) {
  return await prisma.card.findFirst({
    where: { userId, title }
  });
}

export async function getAll(userId: number) {
  return await prisma.card.findMany({
    where: { userId }
  });
}

export async function getCard(userId: number, cardId: number) {
  return await prisma.card.findFirst({
    where: { userId, id: cardId }
  });
}
