import { Router } from "express";
import { createNetwork } from "../controllers/networkController";
import validateToken from "../middlewares/tokenMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { networkSchema } from "../schemas/networkSchema";

const networkRouter = Router();

networkRouter.use(validateToken);

networkRouter.post(
  "/networks",
  validateSchemaMiddleware(networkSchema),
  createNetwork
);

export default networkRouter;
