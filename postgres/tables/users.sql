BEGIN TRANSACTION;

CREATE TABLE users (
    user_id serial PRIMARY KEY,
    plantnet_apikey varchar(100) NOT NULL,
    email text UNIQUE NOT NULL
);

COMMIT;