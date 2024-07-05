import express, { Request, Response, NextFunction } from "express";

const rootRoute = express.Router();

rootRoute.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to BE todolist API",
    version: "1.0.0",
  });
});

rootRoute.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  res.locals.message = err.message;
  res.status(err.status || 500);
  res.json({ success: false, message: err.message });
});

export default rootRoute;
