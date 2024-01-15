const express = require("express");
const cors = require("cors");
const { Database: db } = require("./db");
const routes = require("./routes");

async function run() {
  console.log("Starting DB...");
  await db.init();

  const app = express();
  app.use(cors({ origin: "https://subzeero.dev" }));
  app.use("/", routes);

  app.listen(4000);
  console.log("Backend Running!");
}

run();
