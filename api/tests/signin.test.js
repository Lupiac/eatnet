const request = require("supertest")
const app = require("../app.js");

describe("POST /signin", () => {
  describe("given user informations", () => {
    beforeAll(async() => {
        // Creating a user
        const createUser = await request(app).post("/register").send({
            email: "signin@test.com",
            apiKey: "aze987x54wc846azx351s%%cq74qsc",
            password: "c"
        });
        return createUser
    });
    test("should respond with a 200 status code when informations are correct", async() => {
      const response = await request(app).post("/signin").send({
        email: "signin@test.com",
        password: "c",
      });
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("userId");
      expect(response.body).toHaveProperty("token");
      expect(response.body).toHaveProperty("user");
    })
    test("should respond with a 400 status code when a field is incorrect", async() => {
      const response = await request(app).post("/signin").send({
        password: "b",
      });
      expect(response.statusCode).toBe(400);
      expect(response.body).toBe("incorrect form submission");
    })
  })
})