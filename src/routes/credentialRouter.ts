import { Router } from "express";
import * as credentialController from "../controllers/credentialController.js";
import { credentialSchema } from "../schemas/passwordsSchemas.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import validateToken from "../middlewares/tokenMiddleware.js";

const credentialRouter = Router();

credentialRouter.use(validateToken);

credentialRouter.post(
  "/credentials",
  validateSchemaMiddleware(credentialSchema),
  credentialController.createCredentials
);
credentialRouter.get(
  "/credentials",
  credentialController.getAllCredentials
);
credentialRouter.get(
  "/credentials/:id",
  credentialController.getCredential
);
credentialRouter.delete(
  "/credentials/:id",
  credentialController.deleteCredential
);

export default credentialRouter;
