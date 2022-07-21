const db = require("../db/db");

class UserDAO {
    register = async (email, apiKey, password) => {
        return db.transaction(trx => {
            return trx.into('users').insert({
                email: email,
                plantnet_apikey: apiKey
            })
            .returning('*')
            .then(user => {
                return trx.insert({
                        hash: password,
                        email: user[0].email
                    })
                    .into('logins')
                    .then(() => {
                        delete user[0].plantnet_apikey
                        return user[0];
                    })
            })
            .then(user =>{
                trx.commit;
                return user;
            })
            .catch(trx.rollback)
        })
    }
    getUserByEmail = async (email) => {
        return db.select('*').from('users')
                .where('email', '=', email)
                .then(user => {
                    delete user[0].plantnet_apikey
                    return user[0];
                })
    }
    getUserById = async (id) => {
        return db.select('*').from('users')
                .where({user_id: id})
                .then(user => {
                    delete user[0].plantnet_apikey
                    return user[0];
                })
    }
    getUserApiKey = async (id) => {
        return db.select('plantnet_apikey').from('users')
                .where({user_id: id})
                .then(apiKey => {
                    return apiKey[0];
                })
    }
    updateUser = async (userId, apiKey) => {
        return db('users')
        .where({ user_id: userId })
        .update({ plantnet_apikey: apiKey})
        .returning('*')
        .then(user => {
            delete user[0].plantnet_apikey
            return user[0];
        })
    }
}
module.exports = new UserDAO();
