import { prisma } from "../db/db.js";
import { createSafeNoteData } from "../types/safeNoteType.js";

export async function createSafeNote(
  userId: number,
  safeNote: createSafeNoteData
) {
  return await prisma.safeNote.create({
    data: { ...safeNote, userId },
  });
}

export async function getSafeNoteByTitle(userId: number, title: string) {
  return await prisma.safeNote.findFirst({
    where: { userId, title },
  });
}
