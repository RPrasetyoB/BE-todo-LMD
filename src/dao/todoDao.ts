import { prisma } from "../config/dbConnection";
import ErrorHandler from "../helper/errorHandler";
import { TodoData } from "../types/type";

// add todo to DB
const createTodo = async (userId: number, todoData: TodoData) => {
  const { title, description, status } = todoData;
  try {
    const addTodo = await prisma.todos.create({
      data: {
        user_id: userId,
        title: title,
        description: description,
        status: status,
      },
    });
    return addTodo;
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

export { createTodo };
