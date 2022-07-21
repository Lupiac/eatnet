const bcrypt = require('bcrypt-nodejs');
const userDAO = require("../dao/user")

class UserService {
    async updateUser(userDto){
        const {userId, apiKey} = userDto;
        return userDAO.updateUser(userId, apiKey);
    }
}
module.exports = new UserService();