import express from "express";
import authRouter from "./auth";
import authentication from "../../middlewares/authentication";
import { userProfile } from "../../controllers/user";

const v1Router = express.Router();

v1Router.use("/auth", authRouter);
v1Router.use("/user", authentication, userProfile);

export default v1Router;
