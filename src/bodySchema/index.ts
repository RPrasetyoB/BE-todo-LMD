import { z } from "zod";

export const registrationSchema = z.object({
  real_name: z.string(),
  username: z.string().min(3, "must contain at least 3 characters"),
  password: z.string().min(6, "must contain at least 6 characters"),
});

export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});
