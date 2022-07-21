// Functions needed to run migrations and seed
/* Function running migration
 * retries: number of attempts
 * delay: delay in ms between two attempts
 */
async function runMigrations(db, retries, delay) {
    for (let i = 1; i !== retries; i++) {
        try {
            return await db.migrate.latest();
        } catch (err) {
            await setTimeoutAsync(delay * i);
        }
    }

    throw new Error(`Unable to run migrations after ${retries} attempts.`);
}

/* Function running seeds
 * retries: number of attempts
 * delay: delay in ms between two attempts
 */
async function runSeeds(db, retries, delay) {
    for (let i = 1; i !== retries; i++) {
        try {
            return await db.seed.run();
        } catch (err) {
            await setTimeoutAsync(delay * i);
        }
    }

    throw new Error(`Unable to run seeds after ${retries} attempts.`);
}

// Funtion used to wait between two attempt
function setTimeoutAsync(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

function migrateAndSeed(db){
    console.log(`Using environment: ${process.env.KNEX_CONFIG}`);
    console.log("------ Starting migrations ------")
    runMigrations(db, 10, 100)
    .catch(err => {
        console.log(err);
    })
    .then(resMigrations => {
        console.log(`Batch ${resMigrations[0]} run: ${resMigrations[1].length} migrations`);
        console.log(resMigrations[1].join("\n"));
        console.log("------ Finished migrations ------")

        console.log("------ Starting seeds ------")
        runSeeds(db, 10, 100).then(resSeed => {
            console.log(`Ran ${resSeed[0].length} seed files`);
            console.log(resSeed[0].map(filepath=>filepath.split('/').pop()).join("\n"));
            console.log("------ Finished seeds ------")
        }).catch(err => {
            console.log(err.message);
            console.log(`Ran 0 seed files`);
            console.log("------ Finished seeds ------")
        })
    });
}

// End of migration and seed
module.exports = {
    migrateAndSeed
}