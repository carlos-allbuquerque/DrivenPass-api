import Joi from "joi";
import { createCredentialData } from "../types/credentialType";

export const credentialSchema = Joi.object<createCredentialData>({
  title: Joi.string().required(),
  url: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
});
