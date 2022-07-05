/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    let createQuery = `
    BEGIN TRANSACTION;

    CREATE TABLE logins (
        login_id serial PRIMARY KEY,
        hash varchar(100) NOT NULL,
        email text UNIQUE NOT NULL,
        FOREIGN KEY (email) REFERENCES users (email) ON DELETE CASCADE
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
    let dropQuery = `DROP TABLE logins`
    return knex.raw(dropQuery)
};
