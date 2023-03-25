import dotenv from "dotenv";
import { search, createUser } from "../repositories/authRepository.js";
import { userData } from "../types/authTypes";
import * as U from "../utils/passwordUtils.js";
import { conflictError, unauthorizedError } from "../utils/errorUtils.js";
import jwt from "jsonwebtoken";
dotenv.config();

export async function create(user: userData) {
  const userExists = await search(user.email);
  if (userExists) throw conflictError("Email already in use");

  const hashedPass = U.encryptAccountPassword(user.password);
  const newUser = await createUser({ ...user, password: hashedPass });

  return newUser;
}

export async function acess(user: userData) {
  const userExists = await search(user.email);
  if (!userExists) throw unauthorizedError("Wrong email or password");

  const { id, password, email } = userExists;

  if (
    user.email !== email ||
    !U.decryptAccountPassword(user.password, password)
  ) {
    throw unauthorizedError("Wrong email or password");
  }
  const keyJWT = process.env.JWT_SECRET;
  const token = jwt.sign({ id }, keyJWT);
  return token;
}
