import { Request, Response } from "express";
import * as documentService from "../services/documentService.js";
import { createDocumentData } from "../types/documentType.js";

export async function createDocument(req: Request, res: Response) {
  const { user } = res.locals;
  const document: createDocumentData = req.body;

  await documentService.createDocument(user, document);
  res.sendStatus(201); // created
}

export async function getAll(req: Request, res: Response) {
  const { user } = res.locals;

  const documents = await documentService.getAll(user.id);
  res.send(documents).status(200);
}
