import express from "express";
import { commonHello } from "@ts-template/common";

export const app = express();

app.get("/", function (req, res) {
  res.send(commonHello());
});
