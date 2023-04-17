import { User } from "@prisma/client";
import * as documentRepository from "../repositories/documentRepository.js";
import { createDocumentData } from "../types/documentType.js";
import { notFoundError } from "../utils/errorUtils.js";

export async function createDocument(user: User, document: createDocumentData) {
  await documentRepository.createDocument(user.id, document);
}

export async function getAll(userId: number) {
  return await documentRepository.getAll(userId);
}

export async function getDocument(userId: number, documentId: number) {
  const document = await documentRepository.getDocument(userId, documentId);
  if (!document) throw notFoundError("Document doesn't exist");

  return document;
}

export async function removeDocument(userId: number, documentId: number) {
  await getDocument(userId, documentId);
  await documentRepository.removeDocument(documentId);
}
