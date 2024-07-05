import { Request, Response, NextFunction } from "express";
import { userLoginService, userRegisterService } from "../services/authService";
import { loginData, registrationData } from "../utils/type";

// user register
const userRegister = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData: registrationData = req.body;
    req.body;
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
  try {
    const userData: loginData = req.body;
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
