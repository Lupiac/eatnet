const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const signinRouter = require("./routes/signin");
const registerRouter = require("./routes/register");
const usersRouter = require("./routes/users");
const plantsRouter = require("./routes/plants");

const app = express();
const whitelist = ['http://localhost:8080']
const corsOptions = {
  origin: function(origin, callback) {
    callback(null, true)
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
app.use(signinRouter);
app.use(registerRouter);
app.use(usersRouter);
app.use(plantsRouter);

module.exports = app;