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

export async function getDocument(req: Request, res: Response) {
  const { user } = res.locals;
  const documentId = parseInt(req.params.id);
  if (isNaN(documentId)) {
    res.sendStatus(422); // unprocessable entity
  }

  const document = await documentService.getDocument(user.id, documentId);
  res.send(document).status(200);
}

export async function removeDocument(req: Request, res: Response) {
  const { user } = res.locals;
  const documentId = parseInt(req.params.id);
  if (isNaN(documentId)) {
    res.sendStatus(422) // unprocessable entity
  }

  await documentService.removeDocument(user.id, documentId);
  res.sendStatus(200);
}
