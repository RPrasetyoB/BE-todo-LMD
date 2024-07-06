import { Request, Response, NextFunction } from "express";
import { getToken, loggedUser } from "../utils/decodedToken";
import ErrorHandler from "../helper/errorHandler";

const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const decodedToken = getToken(req);
      if (!decodedToken) {
        res.status(401).json({
          success: false,
          message: "unauthorized, please login",
        });
      }
      const user = loggedUser(decodedToken);
      req.user = user;
      next();
    } catch (error) {
      throw new ErrorHandler({
        success: false,
        status: 401,
        message: "invalid Access",
      });
    }
  };
};

const authentication = auth();

export default authentication;
