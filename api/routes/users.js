const express = require('express');
const userController = require('../controllers/user');
const auth = require('../middlewares/authorization');


const usersRouter = express.Router()

// USERS ROUTES
usersRouter.post('/users/:userId', auth.requireAuth, (req, res) => { userController.handleUserUpdate(req, res) })

module.exports = usersRouter;