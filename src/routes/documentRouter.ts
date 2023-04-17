import { Router } from "express";
import * as documentController from "../controllers/documentController.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { documetSchema } from "../schemas/documentSchema.js";
import validateToken from "../middlewares/tokenMiddleware.js";

const documentRouter = Router();

documentRouter.use(validateToken);

documentRouter.post(
  "/documents",
  validateSchemaMiddleware(documetSchema),
  documentController.createDocument
);
documentRouter.get("/documents", documentController.getAll);
documentRouter.get("/documents/:id", documentController.getDocument);
documentRouter.delete("/documents/:id", documentController.removeDocument);

export default documentRouter;
