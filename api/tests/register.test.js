const request = require("supertest")
const app = require("../app.js");
const redisClient = require("../loaders/redis");

describe("POST /register", () => {
  describe("given user informations", () => {
    test("should respond with a 200 status code when informations are correct", async() => {
      const response = await request(app).post("/register").send({
        email: "register@test.com",
        apiKey: process.env.PLANTNET_APIKEY,
        password: "a"
      });
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("user_id");
      expect(response.body).toHaveProperty("email", "register@test.com");
      expect(response.body).not.toHaveProperty("plantnet_apikey");
    })
    test("should respond with a 400 status code when a field is incorrect", async() => {
      const response = await request(app).post("/register").send({
        apikee: "wrong"
      });
      expect(response.statusCode).toBe(400);
      expect(response.body).toBe("incorrect form submission");
    })
    test("should respond with a 400 status code when email is already registered", async() => {
      const response = await request(app).post("/register").send({
        email: "register@test.com",
        apiKey: process.env.PLANTNET_APIKEY,
        password: "a"
      });
      expect(response.statusCode).toBe(400);
      expect(response.body).toBe("unable to register");
    })
  })
  afterAll(async () => {
    await redisClient.quit();
  });
})