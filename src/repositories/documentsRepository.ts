import { prisma } from "../db/db.js";
import { createDocumentData } from "../types/documentType.js";

export async function createDocument(
  userId: number,
  document: createDocumentData
) {
  await prisma.document.create({
    data: { ...document, userId },
  });
}
