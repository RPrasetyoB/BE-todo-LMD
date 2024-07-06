import request from "supertest";
import express from "express";
import v1Router from "../routes/v1";

const app = express();
app.use(express.json());
app.use("/v1", v1Router);

describe("Todo Routes - Create todo", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create new todo", async () => {
    const todoData = {
      title: "todo test",
      description: "todo tes",
      status: "in-progress",
    };
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MywiaWF0IjoxNzIwMjA0MDA5fQ.2d99DVlqTvd1ntLBIIH3n76rW2tTU1LSl-nIL2c0r9U";

    const response = await request(app)
      .post("/v1/todo")
      .set("Authorization", `Bearer ${token}`)
      .send(todoData);

    await request(app)
      .delete(`/v1/todo/${response.body.data.ID}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
  });
});
