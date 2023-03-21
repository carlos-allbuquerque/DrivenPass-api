import { Router } from "express";
import * as C from "../controllers/credentialController.js";
import { credentialSchema } from "../schemas/passwordsSchemas.js";
import { validateSchema } from "../middlewares/schemaMiddleware.js";
import validateToken from "../middlewares/tokenMiddleware.js";

const credentialsRouter = Router();

credentialsRouter.post(
  "/create-credentials",
  validateToken,
  validateSchema(credentialSchema),
  C.createCredentials
);

credentialsRouter.get(
  "/credentials/:userId",
  validateToken,
  C.getAllCredentials
);

credentialsRouter.get(
  "/credential/:credentialId",
  validateToken,
  C.getCredentialsById
);

export default credentialsRouter;
