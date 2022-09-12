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
