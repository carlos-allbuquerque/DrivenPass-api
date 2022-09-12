import { prisma } from "../db/db.js"
import { userData } from "../types/authTypes.js";

export async function createUser(user: userData) {
    await prisma.user.create({
        data: user
    });
}

export async function search(email: string) {
    const result = await prisma.user.findUnique({
        where: {
            email
        },
    });
    return result;
}

// export async function getUserId(email: string) {
//     const result = await prisma.user.findFirst({
//         where: { 
//             email 
//         }
//     });
//     console.log(result);

//     return result.id;
// }