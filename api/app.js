const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');
const config = require("./knexfile");
const morgan = require('morgan');
const migrateAndSeed = require('./migrateAndSeed');

const auth = require('./controllers/authorization');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const user = require('./controllers/user');

//Database Setup
const db = knex(config[process.env.KNEX_CONFIG]);
console.log(process.env.POSTGRES_URI)
//Run migrations and seeds
migrateAndSeed.migrateAndSeed(db);
const app = express();
const whitelist = ['http://localhost:8080']
const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(morgan('combined'));
app.use(cors());
// app.use(cors(corsOptions));
app.use(express.json());
// SIGNIN ROUTES
app.post('/signin', signin.signinAuthentication(db, bcrypt))
// REGISTER ROUTES
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
// USERS ROUTES
app.post('/users/:userId', auth.requireAuth, (req, res) => { user.handleUserUpdate(req, res, db) })

module.exports = app;