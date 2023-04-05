import joi from "joi";
import { createNetworkData } from "../types/networkTypes.js";

export const networkSchema = joi.object<createNetworkData>({
  title: joi.string().required(),
  name: joi.string().required(),
  password: joi.string().required(),
});
