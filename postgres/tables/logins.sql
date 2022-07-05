BEGIN TRANSACTION;

    CREATE TABLE logins (
        login_id serial PRIMARY KEY,
        hash varchar(100) NOT NULL,
        email text UNIQUE NOT NULL,
        FOREIGN KEY (email) REFERENCES users (email) ON DELETE CASCADE
    );
    
COMMIT;