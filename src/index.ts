import express from "express";
import "express-async-errors";

import cors from "cors";
import dotenv from "dotenv";

import router from "./routes/index.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use(router);

const port = +process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
