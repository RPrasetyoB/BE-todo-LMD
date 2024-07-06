import { Request, Response, NextFunction } from "express";
import { loggedUser } from "../utils/decodedToken";
import { TodoData } from "../types/type";
import { createTodoService } from "../services/todoService";

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

export { createNewTodo };
