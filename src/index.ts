import express from "express";
import * as dotenv from "dotenv";
import * as functions from "firebase-functions";
import errorCatch from "./middlewares/errorCatch";
import middleWares from "./middlewares";
import router from "./routes";
import rootRoute from "./routes/root";
import corsMiddleware from "./middlewares/corsOption";
import { db } from "./config/dbConnection";

// integration with .env
dotenv.config();
const app = express();
// DB connection
db();
// body parser
app.use(express.json());
// server port
const server_port = process.env.SERVER_PORT || 3001;
// API root route
app.use(rootRoute);
// set cors accept client access
corsMiddleware(app);
// security middleware
middleWares(app);
// endpoint routes
app.use(router);
// middleware for catch error
app.use(errorCatch);
// server port listening
app.listen(server_port, () => {
  console.log(`server listening at http://localhost:${server_port}`);
});

export const be_todo = functions.https.onRequest(app);
