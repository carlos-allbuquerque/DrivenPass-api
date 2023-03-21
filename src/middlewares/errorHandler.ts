import { Request, Response, NextFunction } from "express";
import error from "../types/errorType.js";

const errors = {
  unauthorized: 401,
  conflict: 409,
  unprocessable: 422,
  notFound: 404,
};

export default function errorHandler(
  error: error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const message = error.message || "Something went wrong";
  const status = errors[error.code] || 500;
  res.status(status).json({ message });
}
