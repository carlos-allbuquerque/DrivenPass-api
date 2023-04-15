import { User } from "@prisma/client";
import * as documentRepository from "../repositories/documentRepository.js";
import { createDocumentData } from "../types/documentType.js";

export async function createDocument(user: User, document: createDocumentData) {
  console.log(user);
  await documentRepository.createDocument(user.id, document);
}
