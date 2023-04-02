import Joi from "joi";
import { createCardData } from "../types/CardType.js";

export const cardSchema = Joi.object<createCardData>({
  title: Joi.string().required(),
  number: Joi.string().required(),
  cardHolderName: Joi.string().required(),
  securityCode: Joi.string().max(3),
  expirationDate: Joi.string().required(),
  password: Joi.string().required(),
  isVirtual: Joi.boolean().required(),
  type: Joi.string().required(),
});
