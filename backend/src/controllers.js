const { Database: db } = require("./db");

const root = (req, resp) => {
  resp.json({ message: "Pong: Backend OK" });
};

const count = async (req, resp) => {
  let result;
  try {
    await db.pool.query(`
      UPDATE visits SET count = count + 1
    `);
    result = await db.pool.query(`SELECT count FROM visits`);
  } catch (e) {
    console.error(`Failed to update & select count: ${e?.stack}`);
  } finally {
    if (result.rowCount < 1) {
      result = 1;
    } else {
      result = result.rows[0];
    }
    resp.json({ count: result });
  }
};

const notFound404 = (req, resp) => {
  resp.sendStatus(404);
};

module.exports = {
  root,
  count,
  notFound404,
};
