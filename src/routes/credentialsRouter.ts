import { Router } from "express";
import { createCredentials, getAllCredentials, getCredentialsById } from "../controllers/credentialController.js";
import { credentialSchema } from "../schemas/passwordsSchemas.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import validateToken from "../middlewares/tokenMiddleware.js";


const credentialsRouter = Router();

credentialsRouter.post("/create-credentials", validateToken, validateSchema(credentialSchema), createCredentials);
credentialsRouter.get("/credentials/:userId", validateToken, getAllCredentials);
credentialsRouter.get("/credential/:credentialId", validateToken, getCredentialsById);

export default credentialsRouter;