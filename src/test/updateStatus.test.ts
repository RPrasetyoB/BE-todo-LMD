import request from "supertest";
import express from "express";
import v1Router from "../routes/v1";

const app = express();
app.use(express.json());
app.use("/v1", v1Router);

describe("Todo Routes - Update status", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should update status", async () => {
    const todoData = {
      status: "not started",
    };
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MywiaWF0IjoxNzIwMjA0MDA5fQ.2d99DVlqTvd1ntLBIIH3n76rW2tTU1LSl-nIL2c0r9U";

    const response = await request(app)
      // try different todo id if receive 404
      .patch("/v1/todo/1")
      .set("Authorization", `Bearer ${token}`)
      .send(todoData);

    expect(response.status).toBe(200);
  });
});
