import "./db/connection";
import express, { json } from "express";
const app = express();
const PORT = 5000;
import userRouter from "./modules/routers/userRouter";

app.use(json());
app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Connected to ${PORT}`);
});
