const express = require('express');
const registerController = require('../controllers/register');

const registerRouter = express.Router()

// REGISTER ROUTES
registerRouter.post('/register', (req, res) => { registerController.handleRegister(req, res) })

module.exports = registerRouter;