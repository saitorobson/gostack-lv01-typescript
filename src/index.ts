import express from "express";
import { helloWorld } from "./routes";

const app = express();

const PORT = 3333;

app.get("/", helloWorld);

app.listen(PORT);
