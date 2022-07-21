const db = require("../db/db");

class LoginDAO {
    getLoginFromEmail = async(email) =>{
        return db.select('email', 'hash').from('logins')
        .where('email', '=', email)
    }
}
module.exports = new LoginDAO();