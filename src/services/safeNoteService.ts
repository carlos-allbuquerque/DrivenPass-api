import * as safeNoteRepository from "./../repositories/safeNoteRepository.js";
import { createSafeNoteData } from "../types/safeNoteType.js";
import { conflictError, notFoundError } from "../utils/errorUtils.js";
import { User } from "@prisma/client";

export async function createSafeNote(user: User, safeNote: createSafeNoteData) {
  const userId = user.id;
  const titleAlreadyInUse = await safeNoteRepository.getSafeNoteByTitle(
    userId,
    safeNote.title
  );
  if (titleAlreadyInUse) throw conflictError("Title already in use");

  await safeNoteRepository.createSafeNote(userId, safeNote);
}

export async function getAllUserSafeNotes(userId: number) {
  return await safeNoteRepository.getAll(userId);
}

export async function getSafeNote(user: User, safeNoteId: number) {
  const safeNote = await safeNoteRepository.getSafeNote(safeNoteId, user.id);
  if (!safeNote) throw notFoundError("Safe note doesn't exist");

  return safeNote;
}
