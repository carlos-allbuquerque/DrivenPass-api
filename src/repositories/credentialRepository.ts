import { prisma } from "../db/db.js";
import { CredentialData } from "../types/credentialType";

export async function createCredential(credential: CredentialData) {
  return await prisma.credential.create({ data: credential });
}

export async function searchCredential(title: string, userId: number) {
  return await prisma.credential.findFirst({
    where: {
      title,
      userId,
    },
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
      userId,
    },
  });
}

export async function removeCredential(id: number) {
  return await prisma.credential.delete({ where: { id } });
}
