import { Router } from "express";

import {signin, signup} from "../controllers/authController.js";
import { validateUserData } from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post("/signup", validateUserData, signup);
authRouter.get("/signin", validateUserData, signin);

export default authRouter;