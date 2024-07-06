import request from "supertest";
import express from "express";
import authRouter from "../routes/v1/auth";

const app = express();
app.use(express.json());
app.use("/auth", authRouter);

describe("Auth Routes - login", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should login a user", async () => {
    const userData = {
      username: "test",
      password: "abc123",
    };

    const response = await request(app).post("/auth/login").send(userData);
    expect(response.status).toBe(200);
  });
});
