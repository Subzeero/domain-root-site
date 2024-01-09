const express = require("express");
const cors = require("cors");
const { Database: db } = require("./db");
const routes = require("./routes");

async function run() {
  console.log("Starting DB...");
  await db.init();

  const app = express();
  app.use(cors({ origin: process.env.CORS_DOMAIN || "http://localhost:3000" }));
  app.use("/", routes);

  app.listen(4000);
  console.log("Backend Running!");
}

run();
