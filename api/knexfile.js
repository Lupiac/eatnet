module.exports = {
  development: {
    client: 'pg',
    connection:process.env.POSTGRES_URI,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: ['./db/seeds/common','./db/seeds/dev']
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection:process.env.POSTGRES_URI,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/common'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.POSTGRES_URI,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/common'
    },
    useNullAsDefault: true
  }
}