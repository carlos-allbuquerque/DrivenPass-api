import { Response, Request } from "express";
import * as safeNoteService from "./../services/safeNoteService.js";

export async function createSafeNote(req: Request, res: Response) {
  const { user } = res.locals;
  const safeNote = req.body;

  await safeNoteService.createSafeNote(user, safeNote);
  res.sendStatus(201);
}

export async function getAllUserSafeNotes(req: Request, res: Response) {
  const { user } = res.locals;
  const safeNotes = await safeNoteService.getAllUserSafeNotes(user.id);

  res.send(safeNotes).status(200);
}

export async function getSafeNote(req: Request, res: Response) {
  const { user } = res.locals;
  const safeNoteId = parseInt(req.params.safeNoteId);
  const safeNote = await safeNoteService.getSafeNote(user, safeNoteId);

  res.send(safeNote).status(200);
}

export async function removeSafeNote(req: Request, res: Response) {
  const safeNoteId = parseInt(req.params.id);
  if (isNaN(safeNoteId)) {
    res.sendStatus(422); // unprocessable entity
  }
  const { user } = res.locals;
  await safeNoteService.removeSafeNote(user, safeNoteId);

  res.sendStatus(200);
}
