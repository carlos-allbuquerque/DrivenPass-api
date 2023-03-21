import { prisma } from "../db/db.js";
import { userData } from "../types/authTypes.js";
import { decryptAccountPassword } from "../utils/passwordUtils.js";

export async function createUser(user: userData) {
  await prisma.user.create({
    data: user,
  });
}

export async function search(email: string) {
  const result = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return result;
}
