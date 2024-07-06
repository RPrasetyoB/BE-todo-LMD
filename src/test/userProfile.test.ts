import request from "supertest";
import express from "express";
import v1Router from "../routes/v1";

const app = express();
app.use(express.json());
app.use("/v1", v1Router);

describe("User Routes - get Profile", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should get user profile", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6MywiaWF0IjoxNzIwMjA0MDA5fQ.2d99DVlqTvd1ntLBIIH3n76rW2tTU1LSl-nIL2c0r9U";

    const response = await request(app).get("/v1/user").set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
  });
});
