import request from "supertest";
import express from "express";
import authRouter from "../routes/v1/auth";

const app = express();
app.use(express.json());
app.use("/auth", authRouter);

describe("Auth Routes - Register", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should register a user", async () => {
    const userData = {
      username: "usertest",
      password: "password",
      real_name: "New User",
    };

    await request(app).delete("/auth").send({ username: userData.username });

    const response = await request(app).post("/auth/register").send(userData);
    expect(response.status).toBe(200);
  });
});
