import Joi from "joi";
import { createCardData } from "../types/CardType.js";

const numberRegex = /^(?:\d{4}\s){3}\d{4}|\d{16}$/;
const dateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

export const cardSchema = Joi.object<createCardData>({
  title: Joi.string().required(),
  number: Joi.string().required().regex(numberRegex),
  cardHolderName: Joi.string().required(),
  securityCode: Joi.string().regex(/^\d{3}$/),
  expirationDate: Joi.string().regex(dateRegex).required(),
  password: Joi.string().required(),
  isVirtual: Joi.boolean().required(),
  type: Joi.string().valid("CREDIT", "DEBIT", "HIBRID").required(),
});
