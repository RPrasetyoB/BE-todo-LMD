import { createTodo } from "../dao/todoDao";
import ErrorHandler from "../helper/errorHandler";
import { TodoData } from "../types/type";

// add new todo
const createTodoService = async (userId: number, todoData: TodoData) => {
  try {
    const addTodo = await createTodo(userId, todoData);
    return {
      success: true,
      message: "new todo created successfully",
      data: addTodo,
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

export { createTodoService };
