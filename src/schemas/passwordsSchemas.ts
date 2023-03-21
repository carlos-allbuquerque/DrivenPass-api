import Joi from "joi";
import { CredentialData } from "../types/credentialType";

export const credentialSchema = Joi.object<CredentialData>({
  userId: Joi.number().required(),
  title: Joi.string().required(),
  url: Joi.string().required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
});
