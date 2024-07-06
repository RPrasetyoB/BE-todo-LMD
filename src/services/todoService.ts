import { deleteTodo, getTodo, patchTodo, postCreateTodo, putTodo } from "../dao/todoDao";
import ErrorHandler from "../helper/errorHandler";
import { TodoData } from "../types/type";

// add new todo
const createTodoService = async (userId: number, todoData: TodoData) => {
  try {
    const addTodo = await postCreateTodo(userId, todoData);
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

// get user todo
const getTodoListService = async (userId: number) => {
  try {
    const todoList = await getTodo(userId);
    return {
      success: true,
      message: "user todo list retrieved successfully",
      data: todoList,
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

// update user todo
const updateTodoService = async (userId: number, todoId: number, todoData: TodoData) => {
  try {
    const todo = await putTodo(todoId, todoData);
    if (todo.user_id !== userId) {
      throw new ErrorHandler({
        success: false,
        status: 401,
        message: "access forbidden for update todo",
      });
    }
    return {
      success: true,
      message: "todo updated successfully",
      data: todo,
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

// update status todo
const updateStatusService = async (userId: number, todoId: number, status: string) => {
  try {
    const updatedStatus = await patchTodo(todoId, status);
    if (updatedStatus.user_id !== userId) {
      throw new ErrorHandler({
        success: false,
        status: 401,
        message: "access forbidden for update status",
      });
    }
    return {
      success: true,
      message: "status updated successfully",
      data: updatedStatus,
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

// delete user todo
const deleteTodoService = async (userId: number, todoId: number) => {
  try {
    const updatedStatus = await deleteTodo(todoId);
    if (updatedStatus.user_id !== userId) {
      throw new ErrorHandler({
        success: false,
        status: 401,
        message: "access forbidden for delete todo",
      });
    }
    return {
      success: true,
      message: "todo deleted successfully",
      data: updatedStatus,
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

export {
  createTodoService,
  getTodoListService,
  updateTodoService,
  updateStatusService,
  deleteTodoService,
};
