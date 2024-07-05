import express from "express";
import { userLogin, userRegister } from "../../../controllers/auth";
import { validateData } from "../../../middlewares/bodyValidation";
import { loginSchema, registrationSchema } from "../../../bodySchema";
const authRouter = express.Router();

authRouter.post("/register", validateData(registrationSchema), userRegister);
authRouter.post("/login", validateData(loginSchema), userLogin);
export default authRouter;
