import { prisma } from "../db/db.js";
import { createCredentialData } from "../types/credentialType";

export async function createCredential(
  credential: createCredentialData,
  userId: number
) {
  return await prisma.credential.create({
    data: { ...credential, userId },
  });
}

export async function getCredentialByTitle(userId: number, title: string) {
  return prisma.credential.findFirst({
    where: { userId, title },
  });
}

export async function searchCredential(title: string, userId: number) {
  return await prisma.credential.findFirst({
    where: {
      title, userId }
  });
}

export async function getUserCredentials(userId: number) {
  return await prisma.credential.findMany({ where: { userId } });
}

export async function getEspecificUserCredential(
  credentialId: number,
  userId: number
) {
  return await prisma.credential.findFirst({
    where: {
      id: credentialId,
      userId
    },
  });
}

export async function removeCredential(id: number) {
  return await prisma.credential.delete({ where: { id } });
}
