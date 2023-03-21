import Joi from "joi";

import { userData } from "../types/authTypes.js";

export const authSchema = Joi.object<userData>({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required(),
});
