import express from "express";
import { createNewTodo } from "../../../controllers/todo";
import { validateData } from "../../../middlewares/bodyValidation";
import { createTodoSchema } from "../../../bodySchema";

const todoRouter = express.Router();

todoRouter.post("/", validateData(createTodoSchema), createNewTodo);

export default todoRouter;
