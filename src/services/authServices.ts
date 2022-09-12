import { search, createUser } from "../repositories/authRepository.js";
import { userData } from "../types/authTypes";
import { encryptPassword } from "../utils/passwordUtils.js";

export async function create(user: userData){
  const userExists = await search(user.email);
  if (userExists) {
    throw { type: "conflict", message: "User already exists" };
  }

  const hashedPass = encryptPassword(user.password);
  const newUser = await createUser({ ...user, password: hashedPass });

  return newUser;
}