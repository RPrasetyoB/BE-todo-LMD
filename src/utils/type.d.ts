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

interface registrationData {
  real_name: string;
  username: string;
  password: string;
}

interface loginData {
  username: string;
  password: string;
}
