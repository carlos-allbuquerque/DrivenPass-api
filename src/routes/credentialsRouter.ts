import { Router } from "express";
import { createCredentials } from "../controllers/credentialController.js";
import validateToken from "../middlewares/tokenMiddleware.js";

const credentialsRouter = Router();

credentialsRouter.post("/create-credentials", validateToken, createCredentials);

export default credentialsRouter;