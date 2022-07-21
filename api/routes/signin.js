const express = require('express');
const signinController = require('../controllers/signin');

const signinRouter = express.Router()

// SIGNIN ROUTES
signinRouter.post('/signin', (req, res) => {signinController.signinAuthentication(req, res)} )

module.exports = signinRouter;