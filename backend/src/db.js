const pg = require("pg");

const Database = {
  pool: undefined,
  init: async function () {
    if (Database.pool) {
      return console.error(
        "Attempt to reinitialize database after already initialized."
      );
    }

    // Create connection & setup tables
    Database.pool = new pg.Pool();

    let myClient = await Database.getClient();
    try {
      await myClient.query(`CREATE TABLE IF NOT EXISTS visits (
        since TIMESTAMP NOT NULL,
        count INT8 NOT NULL,
        PRIMARY KEY (since)
      )`);
      let result = await myClient.query("SELECT * FROM visits");
      if (result.rowCount < 1) {
        await Database.pool.query(`INSERT INTO visits(
          since, count
        ) VALUES (
          '${new Date().toISOString()}', 0
        )`);
      }
    } catch (e) {
      Database.pool = null;
      throw e;
    } finally {
      myClient.release();
      console.log("Database Initialized.");
    }
  },

  getClient: async function () {
    if (!Database.pool) {
      return console.error(
        "Attempt to getClient() before database initialization."
      );
    }
    return await Database.pool.connect();
  },
};

module.exports = { Database };
