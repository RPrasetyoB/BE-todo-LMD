import { Request, Response, NextFunction } from "express";
import { loggedUser } from "../utils/decodedToken";
import { TodoData } from "../types/type";
import {
  createTodoService,
  deleteTodoService,
  getTodoListService,
  updateStatusService,
  updateTodoService,
} from "../services/todoService";

// create new todo
const createNewTodo = async (req: Request, res: Response, next: NextFunction) => {
  const { ID } = loggedUser(req.user!);
  const todoData: TodoData = req.body;
  try {
    const result = await createTodoService(ID, todoData);
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

// get user todo
const userTodoList = async (req: Request, res: Response, next: NextFunction) => {
  const { ID } = loggedUser(req.user!);
  try {
    const result = await getTodoListService(ID);
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

// update todo
const updateUserTodo = async (req: Request, res: Response, next: NextFunction) => {
  const { ID } = loggedUser(req.user!);
  const { todoId } = req.params;
  const todoData: TodoData = req.body;
  try {
    const result = await updateTodoService(ID, Number(todoId), todoData);
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

// update status
const updateStatusTodo = async (req: Request, res: Response, next: NextFunction) => {
  const { ID } = loggedUser(req.user!);
  const { todoId } = req.params;
  const { status } = req.body;
  try {
    const result = await updateStatusService(ID, Number(todoId), status);
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

// delete todo
const deleteUserTodo = async (req: Request, res: Response, next: NextFunction) => {
  const { ID } = loggedUser(req.user!);
  const { todoId } = req.params;
  try {
    const result = await deleteTodoService(ID, Number(todoId));
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

export { createNewTodo, userTodoList, updateUserTodo, updateStatusTodo, deleteUserTodo };
