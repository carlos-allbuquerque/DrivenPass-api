import { Response, Request } from "express";
import * as safeNoteService from "./../services/safeNoteService.js";

export async function createSafeNote(req: Request, res: Response) {
  const { user } = res.locals;
  const safeNote = req.body;

  await safeNoteService.createSafeNote(user, safeNote);
  res.sendStatus(201);
}
