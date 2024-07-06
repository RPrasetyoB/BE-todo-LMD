import express from "express";
import {
  createNewTodo,
  deleteUserTodo,
  updateStatusTodo,
  updateUserTodo,
  userTodoList,
} from "../../../controllers/todo";
import { validateData } from "../../../middlewares/bodyValidation";
import { todoSchema, updateStatusSchema } from "../../../bodySchema";

const todoRouter = express.Router();

todoRouter.post("/", validateData(todoSchema), createNewTodo);
todoRouter.get("/", userTodoList);
todoRouter.put("/:todoId", validateData(todoSchema), updateUserTodo);
todoRouter.patch("/:todoId", validateData(updateStatusSchema), updateStatusTodo);
todoRouter.delete("/:todoId", deleteUserTodo);

export default todoRouter;
