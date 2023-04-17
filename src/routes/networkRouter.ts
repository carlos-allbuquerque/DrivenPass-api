import { Router } from "express";
import * as networkController from "../controllers/networkController.js";
import validateToken from "../middlewares/tokenMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { networkSchema } from "../schemas/networkSchema.js";

const networkRouter = Router();

networkRouter.use(validateToken);

networkRouter.post(
  "/networks",
  validateSchemaMiddleware(networkSchema),
  networkController.createNetwork
);
networkRouter.get("/networks", networkController.getAllUserNetworks);
networkRouter.get("/networks/:id", networkController.getNetwork);
networkRouter.delete("/networks/:id", networkController.removeNetwork);

export default networkRouter;
