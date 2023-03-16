import { prisma } from "../db/db.js";
import { CredentialData } from "../types/credentialType";

export async function createCredential(credential: CredentialData) {
    return await prisma.credentials.create({
        data: credential
    });
}

export async function searchCredential(title: string, userId: number) {
    return await prisma.credentials.findFirst({
        where: {
            title, 
            userId
        },
    });
}

export async function getUserCredentials(userId: number) {
    return await prisma.credentials.findMany({ where: { userId } });
}

export async function getEspecificUserCredential(credentialId: number, userId: number) {
    return await prisma.credentials.findFirst({
        where: {
            id: credentialId,
            userId
        },
    });
}
