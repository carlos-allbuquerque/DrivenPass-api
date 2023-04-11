import { Router } from "express";
import * as C from "../controllers/credentialController.js";
import { credentialSchema } from "../schemas/passwordsSchemas.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import validateToken from "../middlewares/tokenMiddleware.js";

const credentialRouter = Router();

credentialRouter.use(validateToken);

credentialRouter.post(
  "/credentials",
  validateSchemaMiddleware(credentialSchema),
  C.createCredentials
);

credentialRouter.get(
  "/credentials",
  C.getAllCredentials
);

credentialRouter.get(
  "/credential/:credentialId",
  C.getCredentialsById
);

credentialRouter.delete(
  "/credential/:id",
  C.deleteCredential
);

export default credentialRouter;
