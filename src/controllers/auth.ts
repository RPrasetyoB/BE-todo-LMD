import { Request, Response, NextFunction } from "express";
import { userLoginService, userRegisterService } from "../services/authService";
import { LoginData, RegistrationData } from "../types/type";

// user register
const userRegister = async (req: Request, res: Response, next: NextFunction) => {
  const userData: RegistrationData = req.body;
  try {
    const result = await userRegisterService(userData);
    if (result.success) {
      res.status(200).json({
        success: true,
        message: result.message,
        data: result.data,
      });
    }
  } catch (error) {
    next(error);
  }
};

// user login
const userLogin = async (req: Request, res: Response, next: NextFunction) => {
  const userData: LoginData = req.body;
  try {
    const result = await userLoginService(userData);
    if (result.success) {
      res.status(200).json({
        success: true,
        message: result.message,
        token: result.token,
      });
    }
  } catch (error) {
    next(error);
  }
};

export { userRegister, userLogin };
