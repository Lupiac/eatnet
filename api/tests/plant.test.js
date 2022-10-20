const request = require("supertest");
const app = require("../app.js");
const redisClient = require("../loaders/redis");
const fs = require('fs');

let currentUser = null;

beforeAll(async() => {
  const password = "c";
  // Creating a user
  const createdUser = await request(app).post("/register").send({
      email: "image@test.com",
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
describe("GET /plants", () => {
  describe("given user informations", () => {

    test("should respond with a 200 status code when informations are correct and return the list of plants with their toxicities", async() => {
      const response = await request(app).get(`/plants`)
      .set("Authorization", currentUser.token);

      expect(response.statusCode).toBe(200);
      expect(response.body.length).toBeGreaterThan(0);
    })

    test("should respond with a 401 status code when user is not logged", async() => {
      const response = await request(app).get(`/plants`)

      expect(response.statusCode).toBe(401);
      expect(response.body).toBe("Unauthorized");
    })
  })
})
describe("POST /plants", () => {
  describe("given user informations", () => {

    test("should respond with a 200 status code when informations are correct", async() => {
      const response = await request(app).post(`/plants`)
      .field('userId', currentUser.user.user_id)
      .field('organs', 'auto')
      .field('referential', 'the-plant-list')
      .attach('images', __dirname  +'/assets/images/benoite_commune.jpg')
      .set("Content-Type", "multipart/form-data")
      .set("Authorization", currentUser.token);

      expect(response.statusCode).toBe(200);
    })

    test("should respond with a 400 status code when a field is incorrect", async() => {
      const response = await request(app).post(`/plants`)
      .field('userId', currentUser.user.user_id)
      .field('organs', 'auto')
      .field('referential', 'the-plant-list')
      .set("Content-Type", "multipart/form-data")
      .set("Authorization", currentUser.token);

      expect(response.statusCode).toBe(400);
      expect(response.body).toBe("incorrect form submission");
    })

    test("should respond with a 401 status code when user is not logged", async() => {
      const response = await request(app).post(`/plants`)
      .field('userId', currentUser.user.user_id)
      .field('organs', 'auto')
      .field('referential', 'the-plant-list')
      .attach('images', __dirname  +'/assets/images/benoite_commune.jpg')
      .set("Content-Type", "multipart/form-data");

      expect(response.statusCode).toBe(401);
      expect(response.body).toBe("Unauthorized");
    })
  })
})
afterAll(async () => {
  await redisClient.quit();
});