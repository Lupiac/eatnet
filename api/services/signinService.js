const bcrypt = require('bcrypt-nodejs');
const redisDAO = require("../dao/redis")
const userDAO = require("../dao/user")
const loginDAO = require("../dao/login")

class SigninService {
    authenticate = async(authorization, email, password) => {
        if (authorization) {
            return redisDAO.getAuthTokenId(authorization);
        } else {
            return this.handleSignin(email, password)
        }
    }
    
    handleSignin = (email, password) => {
        return this.signin({email, password})
        .then(data =>
            data.user_id && data.email ? redisDAO.createSession(data) : Promise.reject(data)
        )
    }

    signin = async(signinDto) => {
        const {email, password} = signinDto;
        const login = await loginDAO.getLoginFromEmail(email);
        if(login.length>0){
            const isValid = bcrypt.compareSync(password, login[0].hash);
            if (isValid) {
              return userDAO.getUserByEmail(email);
            }
        }
    }
}
module.exports = new SigninService();