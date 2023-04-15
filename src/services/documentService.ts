import { User } from "@prisma/client";
import * as documentRepository from "../repositories/documentsRepository.js";
import { createDocumentData } from "../types/documentType.js";

export async function createDocument(user: User, document: createDocumentData) {
  await documentRepository.createDocument(user.id, document);
}
