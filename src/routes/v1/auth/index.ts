import express from "express";
import { userLogin, userRegister } from "../../../controllers/auth";
import { validateData } from "../../../middlewares/bodyValidation";
import { loginSchema, registrationSchema } from "../../../bodySchema";
import { deleteExistingUserService } from "../../../services/userService";

const authRouter = express.Router();

authRouter.post("/register", validateData(registrationSchema), userRegister);
authRouter.post("/login", validateData(loginSchema), userLogin);

// router below only for unit testing reason
authRouter.delete("/", async (req, res, next) => {
  const { username } = req.body;
  try {
    const response = await deleteExistingUserService(username);
    if (response.success) {
      res.status(200).json({
        data: response.data,
      });
    }
  } catch (error) {
    next(error);
  }
});

export default authRouter;
