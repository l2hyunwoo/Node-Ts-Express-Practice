import bodyParser from "body-parser";
import express from "express";
import { RegisterRoutes } from "../build/routes";

export const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

RegisterRoutes(app);
