import { prisma } from "../db/db.js"
import { userData } from "../types/authTypes.js";

export async function createUser(user: userData) {
    await prisma.user.create({
        data: user
    });
}

export async function search(email: string) {
    return await prisma.user.findUnique({
        where: {
            email
        },
    });
}