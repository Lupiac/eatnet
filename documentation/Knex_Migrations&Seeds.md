# Express & Postgres via Knex

When updating the database schema, use migrations and seed but for better understandability, please also create a new sql file in *`postgres/tables`*

## README from https://gist.github.com/laurenfazah/e0b0033cdc40a313d4710cc04e654556

> Note: `<example>` is meant to denote text replaced by you (including brackets).

## Setup

```js
// global dependencies
npm install -g knex

```

```js
// project's dependencies
npm install knex pg --save
```

```js
// project's dev dependencies
npm nodemon --save-dev
```

### DB Setup

```bash
$ psql
```

```sql
CREATE DATABASE <example>;
CREATE DATABASE <example_test>;
```

## Knex 

### Config

```bash
$ knex init
Created ./knexfile.js
```

Replace contents of `./knexfile.js` with:

```js
module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost/<examples>',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection:'postgres://localhost/<examples_test>',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/production'
    },
    useNullAsDefault: true
  }
}
```

### Migrations

#### Create Table

```bash
$ knex migrate:make create-<example>-table
```
#### `up` and `down` Functions

Populate those functions in your `migrations/<example>.js` file.
For example:

```js
exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE <examples>(
    id SERIAL PRIMARY KEY NOT NULL,
    message TEXT,
    created_at TIMESTAMP
  )`
  return knex.raw(createQuery)
}

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE <examples>`
  return knex.raw(dropQuery)
}
```

#### Run Migrations

```
$ knex migrate:latest
```

Add `--env=test` to migrate your test database.


### Seeds

#### Create Seeds

```bash
$ knex seed:make <examples>
```

Replace the function in `seeds/dev/<examples>.js` with your own seeds.d

#### Seed DB

```bash
$ knex seed:run
```

## Requiring Necessary Modules into Express

> The following lines may need their paths adjusted depending on where in the project they're used.

```js
const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('../knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration);              // connect to DB via knex using env's settings
```

You're ready to get devving!