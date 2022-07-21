const registerService = require("../services/registerService");

class RegisterController{
  handleRegister = (req, res) => {
    const { email, apiKey, password } = req.body;
    if (!email || !apiKey || !password) {
      return res.status(400).json('incorrect form submission');
    }
    registerService.registerUser({ email, apiKey, password }).then(user => {
      return res.status(200).json(user);
    })
    .catch(err => res.status(400).json('unable to register'))
  }

}

module.exports = new RegisterController();


