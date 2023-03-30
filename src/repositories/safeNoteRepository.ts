import { prisma } from "../db/db.js";
import { createSafeNoteData } from "../types/safeNoteType.js";

export async function createSafeNote(
  userId: number,
  safeNote: createSafeNoteData
) {
  return await prisma.safeNote.create({
    data: { ...safeNote, userId }
  });
}

export async function getSafeNoteByTitle(userId: number, title: string) {
  return await prisma.safeNote.findFirst({
    where: { userId, title }
  });
}

export async function getAll(userId: number) {
  return await prisma.safeNote.findMany({
    where: { userId }
  });
}

export async function getSafeNote(safeNoteId: number, userId: number) {
  return await prisma.safeNote.findFirst({
    where: { id: safeNoteId, userId }
  });
}
