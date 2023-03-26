import { Router } from "express";

import { signin, signup } from "../controllers/authController.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { authSchema } from "../schemas/authSchema.js";

const authRouter = Router();

authRouter.post("/signup", validateSchemaMiddleware(authSchema), signup);
authRouter.post("/signin", validateSchemaMiddleware(authSchema), signin);

export default authRouter;
