// middleware/validationMiddleware.ts
import { Request, Response, NextFunction } from "express";
import { z, ZodError } from "zod";
import ErrorHandler from "../utils/errorHandler";

export function validateData(schema: z.ZodObject<any, any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMessages = error.errors.map(issue => `${issue.path.join(".")} ${issue.message}`);
        throw new ErrorHandler({
          success: false,
          status: 400, // Adjust status code as per your application's needs
          message: errorMessages,
        });
      } else {
        throw new ErrorHandler({
          success: false,
          status: 500,
          message: "Internal Server Error",
        });
      }
    }
  };
}
