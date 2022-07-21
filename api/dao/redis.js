const jwt = require('jsonwebtoken');
const redisClient = require("../loaders/redis");
class redisDAO {
    getAuthTokenId = (authorization) => {
        return redisClient.get(authorization, (err, reply) => {
          if (err || !reply) {
            return Promise.reject("Unauthorized");
          }
          return {id: reply}
        });
    }

    createSession = (user) => {
        const { email, user_id } = user;
        const token = this.signToken(email);
        return this.setToken(token, user_id)
          .then(() => {
            return { success: 'true', userId: user_id, token, user }
          })
    };
    
    signToken = (username) => {
        const jwtPayload = {username};
        return jwt.sign(jwtPayload, 'JWT_SECRET_KEY', {
            expiresIn: '2 days'
        });
    };

    setToken = (key, value) => Promise.resolve(redisClient.set(key, value));
}
module.exports = new redisDAO();