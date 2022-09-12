import dotenv from 'dotenv';
import { search, createUser } from "../repositories/authRepository.js";
import { userData } from "../types/authTypes";
import { encryptPassword } from "../utils/passwordUtils.js";
import jwt from "jsonwebtoken";
dotenv.config();

export async function create(user: userData){
  const userExists = await search(user.email);
  if (userExists) {
    throw { code: "conflict", message: "User already exists" };
  }

  const hashedPass = encryptPassword(user.password);
  const newUser = await createUser({ ...user, password: hashedPass });

  return newUser;
}

export async function acess(user: userData) {
  const userExists = await search(user.email);
  if (!userExists) {
    throw { code: "notFound", message: "invalid email or password"};
  }
  const { id } = userExists;
  const keyJWT = process.env.JWT_SECRET;
  const token = jwt.sign({ id }, keyJWT);
  return token;
}