const bcrypt = require('bcrypt-nodejs');
const userDAO = require("../dao/user")

class RegisterService {
    async registerUser(registerDto) {
        const {email, apiKey, password} = registerDto;
        const passwordHash = bcrypt.hashSync(password);
        //const apiKeyHash = bcrypt.hashSync(apiKey);
        return userDAO.register(email, apiKey, passwordHash);
    }
}
module.exports = new RegisterService();