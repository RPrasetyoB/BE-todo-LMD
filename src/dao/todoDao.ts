import { prisma } from "../config/dbConnection";
import ErrorHandler from "../helper/errorHandler";
import { TodoData } from "../types/type";

// add todo to DB
const postCreateTodo = async (userId: number, todoData: TodoData) => {
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

// get todo from DB
const getTodo = async (userId: number) => {
  try {
    const todoList = await prisma.todos.findMany({
      where: {
        user_id: userId,
      },
    });
    return todoList;
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

// update todo in DB
const putTodo = async (todoId: number, todoData: TodoData) => {
  const { title, description, status } = todoData;
  try {
    const todo = await prisma.todos.findUnique({
      where: { ID: todoId },
    });
    if (!todo) {
      throw new ErrorHandler({
        success: false,
        message: "todo not found",
        status: 404,
      });
    }
    const updateTodo = await prisma.todos.update({
      where: {
        ID: todoId,
      },
      data: {
        title: title,
        description: description,
        status: status,
      },
    });

    return updateTodo;
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

// update status todo in DB
const patchTodo = async (todoId: number, status: string) => {
  try {
    const todo = await prisma.todos.findUnique({
      where: { ID: todoId },
    });
    if (!todo) {
      throw new ErrorHandler({
        success: false,
        message: "todo not found",
        status: 404,
      });
    }
    const updateStatus = await prisma.todos.update({
      where: {
        ID: todoId,
      },
      data: {
        status: status,
      },
    });

    return updateStatus;
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

// update status todo in DB
const deleteTodo = async (todoId: number) => {
  try {
    const todo = await prisma.todos.findUnique({
      where: { ID: todoId },
    });
    if (!todo) {
      throw new ErrorHandler({
        success: false,
        message: "todo not found",
        status: 404,
      });
    }
    const delTodo = await prisma.todos.delete({
      where: {
        ID: todoId,
      },
    });

    return delTodo;
  } catch (error: any) {
    console.error(error);
    throw new ErrorHandler({
      success: false,
      status: error.status,
      message: error.message,
    });
  }
};

export { postCreateTodo, getTodo, putTodo, patchTodo, deleteTodo };
