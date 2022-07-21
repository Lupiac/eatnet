const request = require("supertest")
const app = require("../app.js");
const redisClient = require("../loaders/redis");

describe("POST /signin", () => {
  describe("given user informations", () => {
    const password = "c";
    beforeAll(async() => {
        // Creating a user
        const createdUser = await request(app).post("/register").send({
            email: "signin@test.com",
            apiKey: process.env.PLANTNET_APIKEY,
            password: password
        });
        return createdUser;
    });
    test("should respond with a 200 status code when informations are correct", async() => {
      const response = await request(app).post("/signin").send({
        email: "signin@test.com",
        password: password,
      });
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("userId");
      expect(response.body).toHaveProperty("token");
      expect(response.body).toHaveProperty("user");
      expect(response.body.user).toHaveProperty("user_id");
      expect(response.body.user).toHaveProperty("email");
      expect(response.body.user).not.toHaveProperty("plantnet_apikey");
    })
    test("should respond with a 400 status code when a field is incorrect", async() => {
      const response = await request(app).post("/signin").send({
        password: "b",
      });
      expect(response.statusCode).toBe(400);
      expect(response.body).toBe("incorrect form submission");
    })
  })
  afterAll(async () => {
    await redisClient.quit();
  });
})