import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { unauthorizedError } from "../utils/errorUtils.js";
import { searchById } from "../repositories/authRepository.js";

dotenv.config();

export default async function validateToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { authorization } = req.headers;

    const token = authorization?.replace("Bearer ", "");
    const { id } = jwt.verify(token, process.env.JWT_SECRET) as { id: number };
    const user = await searchById(id);
    res.locals.user = user;
    next();
  } catch {
    throw unauthorizedError("Invalid or tampered token");
  }
}
