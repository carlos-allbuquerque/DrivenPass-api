import express from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js";
import handleErrorsMiddleware from "./middlewares/errorHandlerMiddleware.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.use(handleErrorsMiddleware);

const port = +process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
