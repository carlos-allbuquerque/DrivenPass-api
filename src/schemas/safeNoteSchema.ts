import Joi from "joi";
import { createSafeNoteData } from "../types/safeNoteType";

export const safeNoteSchema = Joi.object<createSafeNoteData>({
  title: Joi.string().max(50).required(),
  content: Joi.string().max(1000).required(),
});
