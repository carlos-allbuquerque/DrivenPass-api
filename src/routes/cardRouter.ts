import { Router } from "express";
import {
  createCard,
  getAllUserCards,
  getCard,
  removeCard,
} from "../controllers/cardController.js";
import validateToken from "../middlewares/tokenMiddleware.js";
import { validateSchemaMiddleware } from "../middlewares/schemaMiddleware.js";
import { cardSchema } from "../schemas/cardSchema.js";

const cardRouter = Router();

cardRouter.use(validateToken);

cardRouter.post("/cards", validateSchemaMiddleware(cardSchema), createCard);
cardRouter.get("/cards", getAllUserCards);
cardRouter.get("/cards/:id", getCard);
cardRouter.delete("/cards/:id", removeCard);

export default cardRouter;
