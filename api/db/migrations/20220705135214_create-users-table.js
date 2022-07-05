/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    let createQuery = `
    BEGIN TRANSACTION;

    CREATE TABLE users (
        user_id serial PRIMARY KEY,
        plantnet_apikey varchar(100) NOT NULL,
        email text UNIQUE NOT NULL
    );
    
    COMMIT;
    `
  return knex.raw(createQuery)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    let dropQuery = `DROP TABLE users`
    return knex.raw(dropQuery)
};
