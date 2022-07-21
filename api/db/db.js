const knex = require('knex');
const config = require("./knexfile");
const migrateAndSeed = require('./migrateAndSeed');

//Database Setup
const db = knex(config[process.env.KNEX_CONFIG]);
//Run migrations and seeds
//migrateAndSeed.migrateAndSeed(db);

module.exports = db;