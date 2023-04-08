import { Router } from "express";
import {
  createNetwork,
  getAllUserNetworks,
  getNetwork
} from "../controllers/networkController.js";
import validateToken from "../middlewares/tokenMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { networkSchema } from "../schemas/networkSchema.js";

const networkRouter = Router();

networkRouter.use(validateToken);

networkRouter.post(
  "/networks",
  validateSchemaMiddleware(networkSchema),
  createNetwork
);
networkRouter.get("/networks", getAllUserNetworks);
networkRouter.get("/networks/:networkId", getNetwork);

export default networkRouter;
