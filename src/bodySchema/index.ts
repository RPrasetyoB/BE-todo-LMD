import { z } from "zod";

export const registrationSchema = z.object({
  real_name: z.string({ message: "required" }),
  username: z.string({ message: "required" }).min(3, "must contain at least 3 characters"),
  password: z.string({ message: "required" }).min(6, "must contain at least 6 characters"),
});

export const loginSchema = z.object({
  username: z.string({ message: "required" }),
  password: z.string({ message: "required" }),
});

export const createTodoSchema = z.object({
  title: z.string({ message: "required" }),
  description: z.string({ message: "required" }),
  status: z.enum(["not started", "in-progress", "completed"], {
    required_error: "required",
    message: "should be 'not started','in-progress', or 'completed'",
  }),
});
