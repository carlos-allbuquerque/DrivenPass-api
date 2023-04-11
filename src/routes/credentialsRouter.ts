import { Router } from "express";
import * as C from "../controllers/credentialController.js";
import { credentialSchema } from "../schemas/passwordsSchemas.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import validateToken from "../middlewares/tokenMiddleware.js";

const credentialsRouter = Router();

credentialsRouter.use(validateToken);

credentialsRouter.post(
  "/credentials",
  validateSchemaMiddleware(credentialSchema),
  C.createCredentials
);

credentialsRouter.get(
  "/credentials/:userId",
  C.getAllCredentials
);

credentialsRouter.get(
  "/credential/:credentialId",
  C.getCredentialsById
);

credentialsRouter.delete(
  "/credential/:id",
  C.deleteCredential
);

export default credentialsRouter;
