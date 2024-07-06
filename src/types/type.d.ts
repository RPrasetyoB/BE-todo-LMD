import { Request } from "express";

declare global {
  interface User {
    ID: number;
  }
  namespace Express {
    interface Request {
      user: User;
    }
  }
}

interface RegistrationData {
  real_name: string;
  username: string;
  password: string;
}

interface LoginData {
  username: string;
  password: string;
}

interface TodoData {
  title: string;
  description: string;
  status: string;
}
