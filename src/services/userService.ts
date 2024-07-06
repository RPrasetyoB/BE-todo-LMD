import { getUserByID } from "../dao/userDao";
import ErrorHandler from "../helper/errorHandler";

// get profile
const userProfilService = async (userId: number) => {
  try {
    const user = await getUserByID(userId);
    return {
      success: true,
      message: "user profile retrieved successfully",
      data: user,
    };
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

export { userProfilService };
