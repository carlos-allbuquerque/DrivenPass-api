import { Router } from "express";

import { signin, signup } from "../controllers/authController.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { authSchema } from "../schemas/authSchema.js";

const authRouter = Router();

authRouter.post("/signup", validateSchema(authSchema), signup);
authRouter.get("/signin", validateSchema(authSchema), signin);

export default authRouter;