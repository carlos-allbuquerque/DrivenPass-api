import { Router } from "express";
import {
  createSafeNote,
  getAllUserSafeNotes
} from "./../controllers/safeNoteController.js";
import validateToken from "../middlewares/tokenMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { safeNoteSchema } from "../schemas/safeNoteSchema.js";

const safeNoteRouter = Router();

safeNoteRouter.use(validateToken);

safeNoteRouter.post(
  "/safenotes/",
  validateSchemaMiddleware(safeNoteSchema),
  createSafeNote
);
safeNoteRouter.get("/safenotes", getAllUserSafeNotes);

export default safeNoteRouter;
