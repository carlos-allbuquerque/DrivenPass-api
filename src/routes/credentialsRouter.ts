import { Router } from "express";
import { createCredentials, getAllCredentials, getCredentialsById } from "../controllers/credentialController.js";
import { validateCredentialData } from "../middlewares/credentialMiddleware.js";
import validateToken from "../middlewares/tokenMiddleware.js";

const credentialsRouter = Router();

credentialsRouter.post("/create-credentials", validateToken, validateCredentialData, createCredentials);
credentialsRouter.get("/credentials/:userId", validateToken, getAllCredentials);
credentialsRouter.get("/credential/:credentialId", validateToken, getCredentialsById);

export default credentialsRouter;