import { prisma } from "../db/db.js";
import { createDocumentData } from "../types/documentType.js";

export async function createDocument(
  userId: number,
  document: createDocumentData
) {
  return await prisma.document.create({
    data: { ...document, userId },
  });
}

export async function getAll(userId: number) {
  return await prisma.document.findMany({
    where: { userId },
  });
}

export async function getDocument(userId: number, documentId: number) {
  return await prisma.document.findFirst({
    where: { userId, id: documentId },
  });
}

export async function removeDocument(id: number) {
  return await prisma.document.delete({
    where: { id }
  })
}
