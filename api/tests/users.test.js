const request = require("supertest")
const app = require("../app.js");
const redisClient = require("../loaders/redis");

describe("POST /users/:userId", () => {
  describe("given user informations", () => {
    let currentUser = null;
    beforeAll(async() => {
        const password = "c";
        // Creating a user
        const createdUser = await request(app).post("/register").send({
            email: "user@test.com",
            apiKey: process.env.PLANTNET_APIKEY,
            password: password
        });

        // Logging the user to retrieve it's token
        const loggedUser = await request(app).post("/signin").send({
          email: createdUser.body.email,
          password: password
        })
        
        currentUser = loggedUser.body;

        return currentUser;
    });

    test("should respond with a 200 status code when informations are correct", async() => {
      const response = await request(app).post(`/users/${currentUser.user.user_id}`).send({
        apiKey: "fakeapikey",
      })
      .set("Authorization", currentUser.token);

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("user_id");
      expect(response.body).toHaveProperty("email", currentUser.user.email);
      expect(response.body).not.toHaveProperty("plantnet_apikey");
    })
    test("should respond with a 400 status code when a field is incorrect", async() => {
      const response = await request(app).post(`/users/${currentUser.user.user_id}`).send({
        password: "b",
      })
      .set("Authorization", currentUser.token);

      expect(response.statusCode).toBe(400);
      expect(response.body).toBe("error updating user");
    })
    test("should respond with a 400 status code when user is not found", async() => {
      const response = await request(app).post("/users/-1").send({
        apiKey: "fakeapikey",
      })
      .set("Authorization", currentUser.token);
      
      expect(response.statusCode).toBe(400);
      expect(response.body).toBe("error updating user");
    })
    test("should respond with a 401 status code when user is not logged", async() => {
      const response = await request(app).post(`/users/${currentUser.user.user_id}`).send({
        apiKey: "fakeapikey",
      });

      expect(response.statusCode).toBe(401);
      expect(response.body).toBe("Unauthorized");
    })
  })
  afterAll(async () => {
    await redisClient.quit();
  });
})