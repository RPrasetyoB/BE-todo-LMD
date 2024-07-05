import { Express } from "express";
import helmetApp from "./helmet";
import { xRequestId } from "./xRequestId";

const middleWares = (app: Express) => {
  helmetApp(app);
  app.use(xRequestId);
};

export default middleWares;
