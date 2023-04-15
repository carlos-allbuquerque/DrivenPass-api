import Joi from "joi";
import { createDocumentData } from "../types/documentType.js";

const reg = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;

export const documetSchema = Joi.object<createDocumentData>({
  type: Joi.string().valid("RG", "CNH").required(),
  fullName: Joi.string().required(),
  issueDate: Joi.string().regex(reg).required(),
  expirationDate: Joi.string().regex(reg).required(),
  registrationNumber: Joi.string().required(),
  issuingBody: Joi.string().required(),
});
