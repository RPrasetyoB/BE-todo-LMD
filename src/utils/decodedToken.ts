import { Request } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SIGN } from "./env";

export const getToken = (req: Request): JwtPayload | null => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return null;
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SIGN!) as JwtPayload;
    return decoded;
  } catch (error) {
    return null;
  }
};

export const loggedUser = (decodedToken: JwtPayload | null) => {
  return {
    ID: decodedToken?.ID,
  };
};