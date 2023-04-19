import Joi from "joi";
import { createCredentialData } from "../types/credentialType";

const reg = /^(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(?:\/\S*)?$/;

export const credentialSchema = Joi.object<createCredentialData>({
  title: Joi.string().required(),
  url: Joi.string().regex(reg).required(),
  username: Joi.string().required(),
  password: Joi.string().required(),
});
