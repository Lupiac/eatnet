const userService = require("../services/userService");

class UserController{
  handleUserUpdate = (req, res) => {
    const { userId } = req.params;
    const { apiKey } = req.body;
    return userService.updateUser({userId, apiKey})
    .then(user => {
      if (user) {
        res.status(200).json(user)
      } else {
        res.status(400).json('Not found')
      }
    })
    .catch(err => res.status(400).json('error updating user'));
  }
}

module.exports = new UserController();