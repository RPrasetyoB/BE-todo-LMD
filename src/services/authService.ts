import ErrorHandler from "../utils/errorHandler";
import bcryptjs from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { loginData, registrationData } from "../utils/type";
import { getUserByUsername, postCreateUser, putUpdateToken } from "../dao/userDao";
import { JWT_SIGN } from "../utils/env";

// registration
const userRegisterService = async (userData: registrationData) => {
  const { username } = userData;
  try {
    const checkUsername = await getUserByUsername(username);
    if (checkUsername) {
      throw new ErrorHandler({
        success: false,
        status: 409,
        message: "username is already taken. Please try different username.",
      });
    }
    const user = await postCreateUser(userData);
    return {
      success: true,
      message: "User registered successfully",
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

// login
const userLoginService = async (userData: loginData) => {
  const { username, password } = userData;
  try {
    const user = await getUserByUsername(username);
    if (!user) {
      throw new ErrorHandler({
        success: false,
        message: "username or password invalid",
        status: 401,
      });
    }
    const isPasswordValid = await bcryptjs.compare(password, user.password);
    if (!isPasswordValid) {
      throw new ErrorHandler({
        success: false,
        message: "username or password invalid",
        status: 401,
      });
    }
    const token = jwt.sign({ ID: user.ID }, JWT_SIGN!);
    await putUpdateToken(username, token);
    return {
      success: true,
      message: "user logged in successfully",
      token: token,
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

export { userRegisterService, userLoginService };
