import { Request, Response, NextFunction } from "express";
import { userProfilService } from "../services/userService";
import { loggedUser } from "../utils/decodedToken";

const userProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ID } = loggedUser(req.user!);
    const result = await userProfilService(ID);
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

export { userProfile };
