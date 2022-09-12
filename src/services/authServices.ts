import dotenv from 'dotenv';
import { search, createUser } from "../repositories/authRepository.js";
import { userData } from "../types/authTypes";
import { encryptAccountPassword, decryptAccountPassword } from "../utils/passwordUtils.js";
import error from '../types/errorType.js';
import jwt from "jsonwebtoken";
dotenv.config();

export async function create(user: userData){
  const userExists = await search(user.email);
  if (userExists) {
    throw <error>{ code: "conflict", message: "User already exists" };
  }

  const hashedPass = encryptAccountPassword(user.password);
  const newUser = await createUser({ ...user, password: hashedPass });

  return newUser;
}

export async function acess(user: userData) {
  const userExists = await search(user.email);
  if (!userExists) {
    throw { code: "notFound", message: "invalid email or password"};
  }
  const { id, password, email } = userExists;

  if (user.email !== email || !decryptAccountPassword(user.password, password)) {
    throw <error>{code: "unauthorized", message: "usuário ou senha inválidos"};
  }
  const keyJWT = process.env.JWT_SECRET;
  const token = jwt.sign({ id }, keyJWT);
  return token;
}

