import { Router } from "express";
import { createDocument } from "../controllers/documentController.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { documetSchema } from "../schemas/documentSchema.js";
import validateToken from "../middlewares/tokenMiddleware.js";

const documentRouter = Router();

documentRouter.use(validateToken);

documentRouter.post(
  "/documents",
  validateSchemaMiddleware(documetSchema),
  createDocument
);

export default documentRouter;
