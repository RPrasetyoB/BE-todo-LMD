import ErrorHandler from "../helper/errorHandler";
import bcryptjs from "bcryptjs";
import { prisma } from "../config/dbConnection";
import { RegistrationData } from "../types/type";

// create new user to DB
const postCreateUser = async (userData: RegistrationData) => {
  try {
    const { real_name, username, password } = userData;
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = await prisma.users.create({
      data: {
        real_name: real_name,
        username: username,
        password: hashedPassword,
      },
      select: {
        ID: true,
        username: true,
        real_name: true,
      },
    });
    return newUser;
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

// get user from DB
const getUserByUsername = async (username: string) => {
  try {
    const user = await prisma.users.findUnique({
      where: { username: username },
      select: {
        ID: true,
        username: true,
        password: true,
      },
    });
    return user;
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

// update token user
const putUpdateToken = async (username: string, token: string) => {
  try {
    const user = await prisma.users.update({
      where: { username: username },
      data: {
        token: token,
      },
    });
    return user;
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

// get user from DB
const getUserByID = async (userId: number) => {
  try {
    const user = await prisma.users.findUnique({
      where: { ID: userId },
      select: {
        ID: true,
        username: true,
        real_name: true,
        token: true,
        created_date: true,
        updated_date: true,
      },
    });
    if (!user) {
      throw new ErrorHandler({
        success: false,
        message: "user not found",
        status: 404,
      });
    }
    return user;
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

// query DB below only for unit testing reason
const deleteExistingUser = async (username: string) => {
  try {
    const user = await prisma.users.delete({
      where: { username: username },
    });
    if (!user) {
      throw new ErrorHandler({
        success: false,
        message: "user not found",
        status: 404,
      });
    }
    return user;
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

export { postCreateUser, getUserByUsername, putUpdateToken, getUserByID, deleteExistingUser };
