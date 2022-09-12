import { Router } from "express";

import {signup} from "../controllers/authController.js";
import { validateUserData } from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post("/signup", validateUserData,signup);

export default authRouter;