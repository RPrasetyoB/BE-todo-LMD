import { Request, Response, NextFunction } from "express";
import { userProfilService } from "../services/userService";
import { loggedUser } from "../utils/decodedToken";

// user profile
const userProfile = async (req: Request, res: Response, next: NextFunction) => {
  const { ID } = loggedUser(req.user!);
  try {
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
