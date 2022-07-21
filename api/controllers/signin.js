const signinService = require("../services/signinService");

class SigninController{
  signinAuthentication = (req, res) => {
    const { authorization } = req.headers;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json('incorrect form submission');
    }
    return signinService.authenticate(authorization, email, password)
      .then(session => res.status(200).json(session))
      .catch(err => res.status(400).json(err));
  }
}



module.exports = new SigninController();