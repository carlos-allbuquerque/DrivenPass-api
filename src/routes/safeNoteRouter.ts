import { Router } from "express";
import { createSafeNote } from "./../controllers/safeNoteController.js";
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

export default safeNoteRouter;
